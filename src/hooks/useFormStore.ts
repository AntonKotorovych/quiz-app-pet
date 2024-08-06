import { create } from 'zustand';

interface FormState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  emailError: string;
  usernameError: string;
  passwordError: string;
  confirmPasswordError: string;
  isVisiblePassword: boolean;
}

export interface FormActions {
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  getEmail: () => string;
  getUsername: () => string;
  getPassword: () => string;
  getConfirmPassword: () => string;
  setEmailError: (emailError: string) => void;
  setUsernameError: (usernameError: string) => void;
  setPasswordError: (passwordError: string) => void;
  setConfirmPasswordError: (confirmPasswordError: string) => void;
  toggleIsVisiblePassword: VoidFunction;
  clearErrors: VoidFunction;
  resetFormState: VoidFunction;
}

type FormStore = FormState & FormActions;

const DEFAULT_FORM_STATE: FormState = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  emailError: '',
  usernameError: '',
  passwordError: '',
  confirmPasswordError: '',
  isVisiblePassword: false,
};

export const useFormStore = create<FormStore>((set, get) => ({
  ...DEFAULT_FORM_STATE,
  setEmail: email => set({ email }),
  setUsername: username => set({ username }),
  setPassword: password => set({ password }),
  setConfirmPassword: confirmPassword => set({ confirmPassword }),
  getEmail: () => get().email,
  getUsername: () => get().username,
  getPassword: () => get().password,
  getConfirmPassword: () => get().confirmPassword,
  setEmailError: emailError => set({ emailError }),
  setUsernameError: usernameError => set({ usernameError }),
  setPasswordError: passwordError => set({ passwordError }),
  setConfirmPasswordError: confirmPasswordError => set({ confirmPasswordError }),
  toggleIsVisiblePassword: () =>
    set(state => ({ isVisiblePassword: !state.isVisiblePassword })),
  clearErrors: () => {
    set({
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
    });
  },
  resetFormState: () => {
    set({
      ...DEFAULT_FORM_STATE,
    });
  },
}));
