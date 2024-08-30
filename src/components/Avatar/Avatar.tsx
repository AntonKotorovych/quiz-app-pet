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
import { useSignOutMutation } from 'hooks/useSignOutMutation';

interface Props {
  title: string | null;
  avatarImgSrc: string | null;
}

export default function Avatar({ title, avatarImgSrc }: Props) {
  const { mutate: signOutMutate, isPending } = useSignOutMutation();

  const handleSignOut = () => {
    if (confirm('Are you sure you want to log out?')) signOutMutate();
  };

  return (
    <Popover>
      <PopoverTrigger>
        <ChakraAvatar
          as="button"
          size="lg"
          src={avatarImgSrc || ''}
          userSelect="none"
          title={title || ''}
        />
      </PopoverTrigger>
      <PopoverContent
        w="44"
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
          <Button
            size="sm"
            w="full"
            colorScheme="yellow"
            onClick={handleSignOut}
            isLoading={isPending}
          >
            Sign Out
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
