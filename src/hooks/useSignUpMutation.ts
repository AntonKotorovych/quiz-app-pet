import { useMutation } from '@tanstack/react-query';
import { postFormData } from 'api/postFormData';

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: postFormData,
  });
};
