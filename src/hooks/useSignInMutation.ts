import { useMutation } from '@tanstack/react-query';
import { loginUser } from 'api/loginUser';
import { useFormStore } from './useFormStore';

export const useSignInMutation = () => {
  const setErrorByName = useFormStore(state => state.setErrorByName);

  return useMutation({
    mutationFn: loginUser,
    onError: error => {
      setErrorByName({ key: 'email', value: error.message });
    },
  });
};
