import { ChangeEvent } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { useFormStore } from 'hooks/useFormStore';
import { AuthFormKeys } from 'types/types';

interface Props extends InputProps {
  label: string;
  name: AuthFormKeys;
  toggleVisibility?: VoidFunction;
}

export default function FormElement({
  type,
  label,
  placeholder,
  isRequired,
  name,
  toggleVisibility,
}: Props) {
  const value = useFormStore(state => state.state[name]);
  const setFieldByName = useFormStore(state => state.setFieldByName);
  const error = useFormStore(state => state.errors[`${name}`]);
  const setErrorByName = useFormStore(state => state.setErrorByName);

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldByName({ key: name, value: event.target.value });
    setErrorByName({ key: name, value: '' });
  };

  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          isRequired={isRequired}
          value={value}
          name={name}
          onChange={handleChangeValue}
        />
        {(name === 'password' || name === 'confirmPassword') && (
          <InputRightElement>
            <Button onClick={toggleVisibility}>
              {type === 'password' && <ViewIcon />}
              {type === 'text' && <ViewOffIcon />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
