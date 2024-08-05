import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { AUTH_INPUT_NAMES } from 'constants/enums';
import { FormActions, useFormStore } from 'hooks/useFormStore';

interface Props extends InputProps {
  label: string;
  name: AUTH_INPUT_NAMES;
}

export default function FormElement({
  type,
  label,
  placeholder,
  isRequired,
  name,
}: Props) {
  const value = useFormStore(state => state[name]);
  const setValue = useFormStore(state => {
    const setterMethod =
      `set${name.charAt(0).toUpperCase() + name.slice(1)}` as keyof FormActions;
    return state[setterMethod];
  });
  const toggleIsVisiblePassword = useFormStore(
    state => state.toggleIsVisiblePassword
  );
  const error = useFormStore(state => state[`${name}Error`]);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          isRequired={isRequired}
          value={value}
          name={name}
          onChange={event => setValue(event.target.value)}
        />
        {(name === AUTH_INPUT_NAMES.PASSWORD ||
          name === AUTH_INPUT_NAMES.CONFIRM_PASSWORD) && (
          <InputRightElement cursor={'pointer'} onClick={toggleIsVisiblePassword}>
            {type === 'password' && <ViewIcon />}
            {type === 'text' && <ViewOffIcon />}
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
