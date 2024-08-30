import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { theme } from 'styles/theme';
import { AuthListenerProvider } from 'components/AuthListener/AuthListener';

const queryClient = new QueryClient();

export default function App() {
  return (
    <AuthListenerProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </QueryClientProvider>
    </AuthListenerProvider>
  );
}
