import { Button, HStack, Spacer, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import MainLogoSVG from 'components/MainLogo/MainLogoSVG';
import Avatar from 'components/Avatar';
import { useAuth } from 'components/AuthListener/AuthListener';
import { HeaderContainer, NavBar, StyledText } from './styles';

export default function Header() {
  const { user, isLoading } = useAuth();

  return (
    <HeaderContainer as="header">
      <NavBar>
        <Link to={ROUTES.HOME} title="Go to Home Page">
          <MainLogoSVG />
        </Link>
        <Spacer />
        <HStack spacing={7}>
          <Button colorScheme="yellow">Create Quiz</Button>
          {isLoading && <Spinner size="xl" color="gray.700" thickness="4px" />}
          {user && <Avatar title={user.displayName} avatarImgSrc={user.photoURL} />}
          {!user && !isLoading && (
            <>
              <Link to={ROUTES.SIGN_UP} title="Register new account">
                <StyledText>Sign Up</StyledText>
              </Link>
              <Link to={ROUTES.SIGN_IN} title="Login to existing account">
                <StyledText>Sign In</StyledText>
              </Link>
            </>
          )}
        </HStack>
      </NavBar>
    </HeaderContainer>
  );
}
