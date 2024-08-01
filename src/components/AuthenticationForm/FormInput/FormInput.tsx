import {
  FormControl,
  // FormErrorMessage,
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

export default function FormInput({
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

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        isRequired={isRequired}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      {/* <FormErrorMessage>{validationErrorMessage}</FormErrorMessage> */}
    </FormControl>
  );
}
