import { FormEvent, useEffect, useState } from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AUTH_TYPE } from 'constants/enums';
import { useFormStore } from 'hooks/useFormStore';
import { ROUTES } from 'constants/routes';
import { FORM_CONFIG } from 'constants/constants';
import FormElement from './FormElement';
import { ButtonContainer } from './styles';

interface Props {
  formType: AUTH_TYPE;
}

export default function AuthenticationForm({ formType }: Props) {
  const validateFields = useFormStore(state => state.validateFields);
  const clearErrors = useFormStore(state => state.clearErrors);
  const resetFormState = useFormStore(state => state.resetFormState);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    clearErrors();
    const isValid = validateFields(formType);

    if (isValid && formType === AUTH_TYPE.SIGN_UP) {
      resetFormState();
      navigate(ROUTES.SIGN_IN);
    } else if (isValid && formType === AUTH_TYPE.SIGN_IN) {
      resetFormState();
      navigate(ROUTES.HOME);
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
          <Link to={FORM_CONFIG[formType].redirectRoute}>
            {FORM_CONFIG[formType].redirectLinkText}
          </Link>
          <Button type="submit" colorScheme="green">
            {FORM_CONFIG[formType].submitText}
          </Button>
        </ButtonContainer>
      </VStack>
    </Form>
  );
}
