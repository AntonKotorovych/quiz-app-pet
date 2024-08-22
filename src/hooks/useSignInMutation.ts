import { useMutation } from '@tanstack/react-query';
import { signIn } from 'firebase/signIn';
import { useFormStore } from './useFormStore';

export const useSignInMutation = () => {
  const setErrorByName = useFormStore(state => state.setErrorByName);

  return useMutation({
    mutationFn: signIn,
    onError: error => {
      setErrorByName({ key: 'email', value: error.message });
    },
  });
};
