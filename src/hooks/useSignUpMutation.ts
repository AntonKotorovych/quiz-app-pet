import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { signUp } from 'api/auth';
import { useFormStore } from './useFormStore';
import { useToastNotification } from './useToastNotification';

export const useSignUpMutation = () => {
  const showNotification = useToastNotification();
  const navigate = useNavigate();

  const setErrorByName = useFormStore(state => state.setErrorByName);
  const resetFormState = useFormStore(state => state.resetFormState);

  return useMutation({
    mutationFn: signUp,
    onMutate: () => {
      showNotification({
        status: 'loading',
        title: 'Signing up',
        description: 'Please wait while we create your account...',
      });
    },
    onError: error => {
      setErrorByName({ key: 'email', value: error.message });
      showNotification({
        status: 'error',
        title: 'Unsuccess',
        description: error.message,
      });
    },
    onSuccess: userData => {
      resetFormState();
      navigate(ROUTES.HOME);
      showNotification({
        status: 'success',
        title: 'Registration Complete!',
        description: `Your registration was successful. Greetings ${userData.displayName}`,
      });
    },
  });
};
