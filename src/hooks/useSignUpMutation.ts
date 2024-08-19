import { useMutation } from '@tanstack/react-query';
import { postFormData } from 'api/postFormData';
import { useFormStore } from './useFormStore';

export const useSignUpMutation = () => {
  const setErrorByName = useFormStore(state => state.setErrorByName);

  return useMutation({
    mutationFn: postFormData,
    onError: error => {
      setErrorByName({ key: 'email', value: error.message });
    },
  });
};
