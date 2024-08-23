import { Box, Button, HStack, Icon } from '@chakra-ui/react';
import GoogleButton from 'react-google-button';
import { FaFacebook } from 'react-icons/fa';

interface AuthServiceButtonsProps {
  onGoogleClick: VoidFunction;
  onFacebookClick: VoidFunction;
}

export default function AuthServiceButtons({
  onGoogleClick,
  onFacebookClick,
}: AuthServiceButtonsProps) {
  return (
    <Box mt="0.5rem">
      <HStack height="3rem">
        <GoogleButton
          style={{ width: '50%', height: '100%', alignContent: 'center' }}
          onClick={onGoogleClick}
        />
        <Button
          colorScheme="blue"
          height="100%"
          fontSize="sm"
          width="50%"
          boxShadow="2xl"
          onClick={onFacebookClick}
          leftIcon={<Icon as={FaFacebook} width="2rem" height="2rem" />}
        >
          Sign in with Facebook
        </Button>
      </HStack>
    </Box>
  );
}
