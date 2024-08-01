import AuthenticationForm from 'components/AuthenticationForm';
import { AUTH_TYPE } from 'constants/enums';
import { AuthContainer } from 'styles/containers/containers';

export default function SignInPage() {
  return (
    <AuthContainer>
      <AuthenticationForm formType={AUTH_TYPE.SIGN_IN} />
    </AuthContainer>
  );
}
