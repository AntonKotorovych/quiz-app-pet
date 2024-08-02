import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
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
  const error = useFormStore(state => state[`${name}Error`]);
  // const setError = useFormStore(
  //   state =>
  //     state[
  //       `set${name.charAt(0).toUpperCase() + name.slice(1)}Error` as keyof FormActions
  //     ]
  // );

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        isRequired={isRequired}
        value={value}
        name={name}
        onChange={event => setValue(event.target.value)}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
