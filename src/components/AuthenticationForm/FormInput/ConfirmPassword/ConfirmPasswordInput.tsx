import { Input } from '@chakra-ui/react';
import { useFormStore } from 'hooks/useFormStore';

export default function ConfirmPasswordInput() {
  const confirmPassword = useFormStore(state => state.confirmPassword);
  const setConfirmPassword = useFormStore(state => state.setConfirmPassword);

  return (
    <Input
      type="password"
      placeholder="Enter password confirmation..."
      isRequired
      value={confirmPassword}
      onChange={event => setConfirmPassword(event.target.value)}
    />
  );
}
