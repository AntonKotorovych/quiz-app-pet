import { FormEvent, useEffect, useState } from 'react';
import { Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { Form, Link, useLocation } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AUTH_TYPE, LOGIN_METHOD } from 'constants/enums';
import { useFormStore } from 'hooks/useFormStore';
import { FORM_CONFIG } from 'constants/constants';
import { useSignUpMutation } from 'hooks/useSignUpMutation';
import { useSignInMutation } from 'hooks/useSignInMutation';
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

  const { mutate: signUpMutate, isPending: isSignUpPending } = useSignUpMutation();
  const { mutate: signInMutate, isPending: isSignInPending } = useSignInMutation();
  const { pathname } = useLocation();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    clearErrors();
    const isValid = validateFields(formType);

    if (isValid && formType === AUTH_TYPE.SIGN_UP) {
      const formState = getFormState();

      signUpMutate(formState);
    } else if (isValid && formType === AUTH_TYPE.SIGN_IN) {
      const { email, password } = getFormState();

      signInMutate({
        userData: { email, password },
        loginMethod: LOGIN_METHOD.EMAIL_PASSWORD,
      });
    } else {
      return;
    }
  };

  const togglePasswordVisibility = () => setIsVisiblePassword(prev => !prev);

  const handleGoogleSignIn = () =>
    signInMutate({ loginMethod: LOGIN_METHOD.GOOGLE });

  const handleFacebookSignIn = () =>
    signInMutate({ loginMethod: LOGIN_METHOD.FACEBOOK });

  useEffect(() => {
    resetFormState();
  }, [pathname, resetFormState]);

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <VStack spacing={8} userSelect="none">
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
          <Button
            type="submit"
            colorScheme="green"
            isLoading={isSignInPending || isSignUpPending}
            isDisabled={isSignInPending || isSignUpPending}
          >
            {FORM_CONFIG[formType].submitText}
          </Button>
          {formType === AUTH_TYPE.SIGN_IN && (
            <Box mt={2}>
              <Text textAlign="center" fontWeight="normal">
                or
              </Text>
              <Box mt={2}>
                <HStack>
                  <Button
                    colorScheme="blue"
                    onClick={handleGoogleSignIn}
                    leftIcon={<Icon as={FaGoogle} width={7} height={7} />}
                    flex={1}
                    boxShadow="2xl"
                    p={6}
                    isLoading={isSignInPending}
                  >
                    Sign in with Google
                  </Button>
                  <Button
                    colorScheme="blue"
                    fontSize="sm"
                    flex={1}
                    boxShadow="2xl"
                    p={6}
                    onClick={handleFacebookSignIn}
                    leftIcon={<Icon as={FaFacebook} width={8} height={8} />}
                    isLoading={isSignInPending}
                  >
                    Sign in with Facebook
                  </Button>
                </HStack>
              </Box>
            </Box>
          )}
        </ButtonContainer>
      </VStack>
    </Form>
  );
}
