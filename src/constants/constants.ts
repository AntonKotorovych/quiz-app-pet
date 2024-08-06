import { AUTH_TYPE } from './enums';
import { ROUTES } from './routes';

export const FORM_CONFIG = {
  [AUTH_TYPE.SIGN_UP]: {
    submitText: 'Sign Up',
    redirectLinkText: 'Sign In',
    redirectRoute: ROUTES.SIGN_IN,
    title: 'Sign Up',
  },
  [AUTH_TYPE.SIGN_IN]: {
    submitText: 'Sign In',
    redirectLinkText: 'Sign Up',
    redirectRoute: ROUTES.SIGN_UP,
    title: 'Sign In',
  },
};
