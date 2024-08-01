import { Input } from '@chakra-ui/react';
import { useFormStore } from 'hooks/useFormStore';

export default function EmailInput() {
  const email = useFormStore(state => state.email);
  const setEmail = useFormStore(state => state.setEmail);

  return (
    <Input
      type="email"
      placeholder="Enter email..."
      isRequired
      value={email}
      onChange={event => setEmail(event.target.value)}
    />
  );
}
