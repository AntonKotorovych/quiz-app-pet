import { Box, HStack, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import MainLogoSVG from 'components/MainLogo/MainLogoSVG';
import Button from 'components/Button';
import { HeaderContainer, NavBar, StyledText } from './styles';

export default function Header() {
  return (
    <HeaderContainer as="header">
      <NavBar>
        <Box w="4rem">
          <Link to={ROUTES.HOME} title="Go to Home Page">
            <MainLogoSVG />
          </Link>
        </Box>
        <Spacer />
        <HStack spacing={7}>
          <Button>Create Quiz</Button>
          <Link to={ROUTES.SIGN_UP} title="Register new account">
            <StyledText>Sign Up</StyledText>
          </Link>
          <Link to={ROUTES.SIGN_IN} title="Login to existing account">
            <StyledText>Sign In</StyledText>
          </Link>
        </HStack>
      </NavBar>
    </HeaderContainer>
  );
}
