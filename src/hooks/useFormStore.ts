import { create } from 'zustand';

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
  isVisiblePassword: boolean;
}

export interface FormActions {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  getEmail: () => string;
  getPassword: () => string;
  getConfirmPassword: () => string;
  setEmailError: (emailError: string) => void;
  setPasswordError: (passwordError: string) => void;
  setConfirmPasswordError: (confirmPasswordError: string) => void;
  setIsVisiblePassword: VoidFunction;
  clearErrors: VoidFunction;
  resetFormState: VoidFunction;
}

type FormStore = FormState & FormActions;

const DEFAULT_FORM_STATE: FormState = {
  email: '',
  password: '',
  confirmPassword: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
  isVisiblePassword: false,
};

export const useFormStore = create<FormStore>((set, get) => ({
  ...DEFAULT_FORM_STATE,
  setEmail: email => set({ email }),
  setPassword: password => set({ password }),
  setConfirmPassword: confirmPassword => set({ confirmPassword }),
  getEmail: () => get().email,
  getPassword: () => get().password,
  getConfirmPassword: () => get().confirmPassword,
  setEmailError: emailError => set({ emailError }),
  setPasswordError: passwordError => set({ passwordError }),
  setConfirmPasswordError: confirmPasswordError => set({ confirmPasswordError }),
  setIsVisiblePassword: () =>
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
