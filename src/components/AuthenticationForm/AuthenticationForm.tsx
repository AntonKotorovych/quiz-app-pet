import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { Form, Link } from 'react-router-dom';
import { AUTH_INPUT_NAMES, AUTH_TYPE } from 'constants/enums';
import { ROUTES } from 'constants/routes';
import FormInput from './FormInput';

interface Props {
  formType: string;
}

export default function AuthenticationForm({ formType }: Props) {
  return (
    <Form method="post">
      <VStack spacing="2rem">
        <Text>
          {formType === AUTH_TYPE.SIGN_UP && 'Sign Up'}
          {formType === AUTH_TYPE.SIGN_IN && 'Sign In'}
        </Text>
        <FormInput
          type="email"
          name={AUTH_INPUT_NAMES.EMAIL}
          label="Email"
          placeholder="Enter email..."
          isRequired
        />
        <FormInput
          type="password"
          name={AUTH_INPUT_NAMES.PASSWORD}
          label="Password"
          placeholder="Enter password..."
          isRequired
        />
        {formType === AUTH_TYPE.SIGN_UP && (
          <FormInput
            type="password"
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
            <Button>
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
