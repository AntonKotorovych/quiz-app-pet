import { Input } from '@chakra-ui/react';
import { useFormStore } from 'hooks/useFormStore';

export default function PasswordInput() {
  const password = useFormStore(state => state.password);
  const setPassword = useFormStore(state => state.setPassword);

  return (
    <Input
      type="password"
      placeholder="Enter password..."
      isRequired
      value={password}
      onChange={event => setPassword(event.target.value)}
    />
  );
}
