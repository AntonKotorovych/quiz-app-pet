import {
  Button,
  Avatar as ChakraAvatar,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase/firebaseConfig';

interface Props {
  title: string | null;
}

export default function Avatar({ title }: Props) {
  const handleSignOut = () => {
    if (confirm('Are you sure you want to log out?')) signOut(auth);
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <ChakraAvatar
            as="button"
            size="lg"
            src="../assets/avatars/cat.jpg"
            userSelect="none"
            title={title ? title : ''}
          />
        </PopoverTrigger>
        <PopoverContent
          w="11rem"
          boxShadow="lg"
          borderColor="gray.600"
          borderRadius="none"
        >
          <PopoverArrow />
          <PopoverHeader bg="green.400" borderColor="gray.600">
            <Button size="sm" w="full" colorScheme="yellow">
              My Account
            </Button>
          </PopoverHeader>
          <PopoverBody bg="green.400">
            <Button size="sm" w="full" colorScheme="yellow" onClick={handleSignOut}>
              Sign Out
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
