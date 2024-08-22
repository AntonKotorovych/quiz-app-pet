import { FormEvent, useEffect, useState } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import GoogleButton from 'react-google-button';
import { AUTH_TYPE, LOGIN_METHOD, TOAST_STATUS } from 'constants/enums';
import { useFormStore } from 'hooks/useFormStore';
import { ROUTES } from 'constants/routes';
import { FORM_CONFIG } from 'constants/constants';
import { useSignUpMutation } from 'hooks/useSignUpMutation';
import { useSignInMutation } from 'hooks/useSignInMutation';
import { useToastNotification } from 'hooks/useToastNotification';
import { SignIn } from 'firebase/signIn';
import FormElement from './FormElement';
import { ButtonContainer } from './styles';

interface Props {
  formType: AUTH_TYPE;
}

export default function AuthenticationForm({ formType }: Props) {
  const validateFields = useFormStore(state => state.validateFields);
  const clearErrors = useFormStore(state => state.clearErrors);
  const resetFormState = useFormStore(state => state.resetFormState);
  const getFormState = useFormStore(state => state.getFormState);
  const getLoginCredentials = useFormStore(state => state.getLoginCredentials);

  const { mutate: signUp } = useSignUpMutation();
  const { mutate: signIn } = useSignInMutation();

  const { showNotification } = useToastNotification();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleSignIn = ({ userData, loginMethod }: SignIn) => {
    showNotification(TOAST_STATUS.LOADING, {
      title: 'Signing in',
      description: 'Please wait while we log you in...',
    });

    signIn(
      { userData, loginMethod },
      {
        onError: error => {
          showNotification(TOAST_STATUS.ERROR, {
            title: 'Sign In Failed',
            description: error.message,
          });
        },
        onSuccess: userData => {
          resetFormState();
          navigate(ROUTES.HOME);
          showNotification(TOAST_STATUS.SUCCESS, {
            title: 'Sign In Successful!',
            description: `Greetings ${userData?.displayName}, You have been logged in successfully.`,
          });
        },
      }
    );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    clearErrors();
    const isValid = validateFields(formType);

    if (isValid && formType === AUTH_TYPE.SIGN_UP) {
      const formState = getFormState();

      showNotification(TOAST_STATUS.LOADING, {
        title: 'Registration.',
        description: 'Wait please...',
      });

      signUp(formState, {
        onError: error => {
          showNotification(TOAST_STATUS.ERROR, {
            title: 'Unsuccess',
            description: error.message,
          });
        },
        onSuccess: () => {
          resetFormState();
          navigate(ROUTES.SIGN_IN);
          showNotification(TOAST_STATUS.SUCCESS, {
            title: 'Registration Complete!',
            description:
              'Your registration was successful. Please log in with your username and password.',
          });
        },
      });
    } else if (isValid && formType === AUTH_TYPE.SIGN_IN) {
      const loginCredentials = getLoginCredentials();

      handleSignIn({
        userData: loginCredentials,
        loginMethod: LOGIN_METHOD.EMAIL_AND_PASSWORD,
      });
    } else {
      return;
    }
  };

  const togglePasswordVisibility = () => setIsVisiblePassword(prev => !prev);

  useEffect(() => {
    resetFormState();
  }, [pathname, resetFormState]);

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <VStack spacing="2rem" userSelect="none">
        <Text>{FORM_CONFIG[formType].title}</Text>
        <FormElement
          type="email"
          name="email"
          label="Email"
          placeholder="Enter email..."
          isRequired
        />
        {formType === AUTH_TYPE.SIGN_UP && (
          <FormElement
            type="text"
            name="userName"
            label="Username"
            placeholder="Enter username..."
            isRequired
          />
        )}
        <FormElement
          type={isVisiblePassword ? 'text' : 'password'}
          name="password"
          label="Password"
          placeholder="Enter password..."
          withInputRight
          toggleVisibility={togglePasswordVisibility}
          isRequired
        />
        {formType === AUTH_TYPE.SIGN_UP && (
          <FormElement
            type={isVisiblePassword ? 'text' : 'password'}
            name="confirmPassword"
            label="Confirm password"
            placeholder="Enter password confirmation..."
            withInputRight
            toggleVisibility={togglePasswordVisibility}
            isRequired
          />
        )}
        <ButtonContainer>
          <ChakraLink
            fontWeight="normal"
            fontSize="sm"
            _hover={{ color: 'green.500', textDecor: 'underline' }}
            as={Link}
            to={FORM_CONFIG[formType].redirectRoute}
          >
            {FORM_CONFIG[formType].redirectLinkText}
          </ChakraLink>
          <Button type="submit" colorScheme="green">
            {FORM_CONFIG[formType].submitText}
          </Button>
          {formType === AUTH_TYPE.SIGN_IN && (
            <Box mt="0.5rem">
              <Text textAlign="center" fontWeight="normal">
                or
              </Text>
              <Box mt="0.5rem">
                <GoogleButton
                  onClick={() => handleSignIn({ loginMethod: LOGIN_METHOD.GOOGLE })}
                />
              </Box>
            </Box>
          )}
        </ButtonContainer>
      </VStack>
    </Form>
  );
}
