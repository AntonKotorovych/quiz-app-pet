import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { signIn } from 'api/auth';
import { useFormStore } from './useFormStore';
import { useToastNotification } from './useToastNotification';

export const useSignInMutation = () => {
  const navigate = useNavigate();
  const showNotification = useToastNotification();
  const resetFormState = useFormStore(state => state.resetFormState);

  return useMutation({
    mutationFn: signIn,
    onMutate: () => {
      showNotification({
        status: 'loading',
        title: 'Signing in',
        description: 'Please wait while we log you in...',
      });
    },
    onError: error => {
      showNotification({
        status: 'error',
        title: 'Sign In Failed',
        description: error.message,
      });
    },
    onSuccess: userData => {
      resetFormState();
      navigate(ROUTES.HOME);
      showNotification({
        status: 'success',
        title: 'Sign In Successful!',
        description: `Greetings ${userData?.displayName}, You have been logged in successfully.`,
      });
    },
  });
};
