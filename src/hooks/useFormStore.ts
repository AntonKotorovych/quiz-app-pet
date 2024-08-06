import { create } from 'zustand';
import { AUTH_TYPE } from 'constants/enums';
import { DIGIT_REGEX, EMAIL_REGEX } from 'constants/regexps';

interface FormState {
  state: {
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
  };
  errors: {
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
  };
}

interface FormPayload {
  key: string;
  value: string;
}

interface FormActions {
  setFieldByName: (payload: FormPayload) => void;
  setErrorByName: (payload: FormPayload) => void;
  clearErrors: VoidFunction;
  resetFormState: VoidFunction;
  validateFields: (formType: AUTH_TYPE) => boolean;
}

type FormStore = FormState & FormActions;

const DEFAULT_FORM_STATE: FormState = {
  state: {
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  },
  errors: {
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  },
};

export const useFormStore = create<FormStore>((set, get) => ({
  ...DEFAULT_FORM_STATE,
  setFieldByName: payload =>
    set(state => ({
      state: { ...state.state, [payload.key]: payload.value },
    })),
  setErrorByName: payload =>
    set(state => ({
      errors: { ...state.errors, [payload.key]: payload.value },
    })),
  clearErrors: () => {
    set({
      errors: {
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
      },
    });
  },
  resetFormState: () => {
    set(DEFAULT_FORM_STATE);
  },
  validateFields: formType => {
    const { email, userName, password, confirmPassword } = get().state;
    const { setErrorByName } = get();
    let isValid = true;

    if (formType === AUTH_TYPE.SIGN_UP) {
      if (!EMAIL_REGEX.test(email)) {
        setErrorByName({ key: 'email', value: 'Invalid email address' });
        isValid = false;
      }

      if (userName.length > 15) {
        setErrorByName({
          key: 'userName',
          value: 'Username must contain no more than 15 characters',
        });
        isValid = false;
      }

      if (password.length < 7 || password.length > 25) {
        setErrorByName({
          key: 'password',
          value: 'Password must be between 7 and 25 characters.',
        });
        isValid = false;
      } else if (!DIGIT_REGEX.test(password)) {
        setErrorByName({
          key: 'password',
          value: 'Password must contain at least one number.',
        });
        isValid = false;
      }

      if (password !== confirmPassword) {
        setErrorByName({ key: 'password', value: 'Passwords do not match.' });
        setErrorByName({ key: 'confirmPassword', value: 'Passwords do not match.' });
        isValid = false;
      }
    }

    if (formType === AUTH_TYPE.SIGN_IN) {
      if (!EMAIL_REGEX.test(email)) {
        setErrorByName({ key: 'email', value: 'Invalid email address' });
        isValid = false;
      }
    }

    return isValid;
  },
}));
