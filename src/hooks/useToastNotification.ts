import { useRef } from 'react';
import { ToastId, useToast, UseToastOptions } from '@chakra-ui/react';

export const useToastNotification = () => {
  const toast = useToast();

  const toastIdRef = useRef<ToastId>();

  return ({ status, title, description }: UseToastOptions) => {
    if (status === 'loading') {
      if (!toastIdRef.current) {
        toastIdRef.current = toast({
          title,
          description,
          status,
          duration: null,
          isClosable: true,
        });
      }
    } else if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        title,
        description,
        status,
        duration: 5000,
        isClosable: true,
      });

      toastIdRef.current = undefined;
    }
  };
};
