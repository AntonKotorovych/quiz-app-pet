import { useRef } from 'react';
import { ToastId, useToast } from '@chakra-ui/react';
import { TOAST_STATUS } from 'constants/enums';

export const useToastNotification = () => {
  const toast = useToast();

  const toastIdRef = useRef<ToastId>();

  const showNotification = (
    status: TOAST_STATUS,
    payload: { title: string; description: string }
  ) => {
    if (status === TOAST_STATUS.LOADING) {
      if (!toastIdRef.current) {
        toastIdRef.current = toast({
          title: payload.title,
          description: payload.description,
          status,
          duration: null,
          isClosable: true,
        });
      }
    } else if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        title: payload.title,
        description: payload.description,
        status,
        duration: 5000,
        isClosable: true,
      });

      toastIdRef.current = undefined;
    }
  };

  return { showNotification };
};
