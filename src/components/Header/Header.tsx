import MainLogoSVG from 'components/MainLogo/MainLogoSVG';
import { HeaderContainer, NavBar, StyledText } from './styles';
import { Box, HStack, Spacer } from '@chakra-ui/react';
import { ROUTES } from 'constants/routes';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

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
          <Button />
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
