import { FormEvent } from 'react';
import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AUTH_INPUT_NAMES, AUTH_TYPE } from 'constants/enums';
import { emailPattern, hasNumber } from 'constants/regexps';
import { useFormStore } from 'hooks/useFormStore';
import { ROUTES } from 'constants/routes';
import FormElement from './FormElement';

interface Props {
  formType: string;
}

export default function AuthenticationForm({ formType }: Props) {
  const getEmail = useFormStore(state => state.getEmail);
  const getUsername = useFormStore(state => state.getUsername);
  const getPassword = useFormStore(state => state.getPassword);
  const getConfirmPassword = useFormStore(state => state.getConfirmPassword);
  const isVisiblePassword = useFormStore(state => state.isVisiblePassword);

  const setEmailError = useFormStore(state => state.setEmailError);
  const setUsernameError = useFormStore(state => state.setUsernameError);
  const setPasswordError = useFormStore(state => state.setPasswordError);
  const setConfirmPasswordError = useFormStore(
    state => state.setConfirmPasswordError
  );
  const clearErrors = useFormStore(state => state.clearErrors);

  const resetFormState = useFormStore(state => state.resetFormState);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    clearErrors();

    const email = getEmail();
    const username = getUsername();
    const password = getPassword();
    const confirmPassword = getConfirmPassword();

    let isValid = true;

    if (formType === AUTH_TYPE.SIGN_UP) {
      if (!emailPattern.test(email)) {
        setEmailError('Invalid email address');
        isValid = false;
      }

      if (username.length > 15) {
        setUsernameError('Username must contain no more than 15 characters');
        isValid = false;
      }

      if (password.length < 7 || password.length > 25) {
        setPasswordError('Password must be between 7 and 25 characters.');
        isValid = false;
      } else if (!hasNumber.test(password)) {
        setPasswordError('Password must contain at least one number.');
        isValid = false;
      }

      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match.');
        setConfirmPasswordError('Passwords do not match.');
        isValid = false;
      }
    }

    if (formType === AUTH_TYPE.SIGN_IN) {
      if (!emailPattern.test(email)) {
        setEmailError('Invalid email address');
        isValid = false;
      }
    }

    if (isValid && formType === AUTH_TYPE.SIGN_UP) {
      console.log('Sign Up Form is Valid!');
      resetFormState();
      navigate(ROUTES.SIGN_IN);
    } else if (isValid && formType === AUTH_TYPE.SIGN_IN) {
      console.log('Sign In Form is Valid!');
      resetFormState();
      navigate(ROUTES.HOME);
    } else {
      return;
    }
  };

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <VStack spacing="2rem" userSelect="none">
        <Text>
          {formType === AUTH_TYPE.SIGN_UP && 'Sign Up'}
          {formType === AUTH_TYPE.SIGN_IN && 'Sign In'}
        </Text>
        <FormElement
          type="email"
          name={AUTH_INPUT_NAMES.EMAIL}
          label="Email"
          placeholder="Enter email..."
          isRequired
        />
        {formType === AUTH_TYPE.SIGN_UP && (
          <FormElement
            type="text"
            name={AUTH_INPUT_NAMES.USERNAME}
            label="Username"
            placeholder="Enter username..."
            isRequired
          />
        )}
        <FormElement
          type={isVisiblePassword ? 'text' : 'password'}
          name={AUTH_INPUT_NAMES.PASSWORD}
          label="Password"
          placeholder="Enter password..."
          isRequired
        />
        {formType === AUTH_TYPE.SIGN_UP && (
          <FormElement
            type={isVisiblePassword ? 'text' : 'password'}
            name={AUTH_INPUT_NAMES.CONFIRM_PASSWORD}
            label="Confirm password"
            placeholder="Enter password confirmation..."
            isRequired
          />
        )}
        <Flex mt="2rem" w="100%" justifyContent="space-around">
          <Link
            to={formType === AUTH_TYPE.SIGN_UP ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}
          >
            <Button colorScheme="blackAlpha" onClick={() => resetFormState()}>
              {formType === AUTH_TYPE.SIGN_UP && 'Sign In'}
              {formType === AUTH_TYPE.SIGN_IN && 'Sign Up'}
            </Button>
          </Link>
          <Button type="submit" colorScheme="green">
            {formType === AUTH_TYPE.SIGN_UP && 'Sign Up'}
            {formType === AUTH_TYPE.SIGN_IN && 'Sign In'}
          </Button>
        </Flex>
      </VStack>
    </Form>
  );
}
