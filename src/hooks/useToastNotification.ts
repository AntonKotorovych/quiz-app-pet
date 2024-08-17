import { useToast } from '@chakra-ui/react';
import { TOAST_STATUS } from 'constants/enums';

export const useToastNotification = () => {
  const toast = useToast();

  const showNotification = (
    status: TOAST_STATUS,
    payload: { title: string; description: string }
  ) => {
    const id = `notificationToast-${Date.now()}`;

    toast({
      id,
      title: payload.title,
      description: payload.description,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  return { showNotification };
};
