import AuthenticationForm from 'components/AuthenticationForm';
import { AUTH_TYPE } from 'constants/enums';
import { AuthContainer } from 'styles/containers/containers';

export default function SignUpPage() {
  return (
    <AuthContainer as="section">
      <AuthenticationForm formType={AUTH_TYPE.SIGN_UP} />
    </AuthContainer>
  );
}
