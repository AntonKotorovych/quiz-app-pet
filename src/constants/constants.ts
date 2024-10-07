import { AUTH_TYPE } from './enums';
import { ROUTES } from './routes';

interface FormConfig {
  submitText: string;
  redirectLinkText: string;
  redirectRoute: string;
  title: string;
}

type AuthFormConfig = Record<AUTH_TYPE, FormConfig>;

export const FORM_CONFIG: AuthFormConfig = {
  [AUTH_TYPE.SIGN_UP]: {
    submitText: 'Sign Up',
    redirectLinkText: 'Have an account? Log In',
    redirectRoute: ROUTES.SIGN_IN,
    title: 'Sign Up',
  },
  [AUTH_TYPE.SIGN_IN]: {
    submitText: 'Sign In',
    redirectLinkText: 'No account yet? Sign Up',
    redirectRoute: ROUTES.SIGN_UP,
    title: 'Sign In',
  },
};

export const MAX_QUESTION_QUANTITY = 50;

export const CATEGORIES_FROM_OPENTDB_QUERY_KEY = 'categories';

export const ONE_HOUR_IN_SECONDS = 3600;

export const ONE_MINUTE_IN_SECONDS = 60;
