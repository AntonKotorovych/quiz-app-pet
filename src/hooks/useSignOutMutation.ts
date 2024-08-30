import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { signOut } from 'api/auth';
import { useToastNotification } from './useToastNotification';

export const useSignOutMutation = () => {
  const navigate = useNavigate();
  const showNotification = useToastNotification();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate(ROUTES.SIGN_IN);
      showNotification({ status: 'success', title: "You've logout successfully!" });
    },
  });
};
