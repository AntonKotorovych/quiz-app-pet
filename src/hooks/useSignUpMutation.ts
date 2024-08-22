import { useMutation } from '@tanstack/react-query';
import { signUp } from 'firebase/signUp';
import { useFormStore } from './useFormStore';

export const useSignUpMutation = () => {
  const setErrorByName = useFormStore(state => state.setErrorByName);

  return useMutation({
    mutationFn: signUp,
    onError: error => {
      setErrorByName({ key: 'email', value: error.message });
    },
  });
};
