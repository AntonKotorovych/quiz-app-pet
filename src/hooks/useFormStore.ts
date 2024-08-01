import { create } from 'zustand';

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormActions {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
}

type FormStore = FormState & FormActions;

const DEFAULT_FORM_STATE: FormState = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const useFormStore = create<FormStore>(set => ({
  ...DEFAULT_FORM_STATE,
  setEmail: email => set({ email }),
  setPassword: password => set({ password }),
  setConfirmPassword: confirmPassword => set({ confirmPassword }),
}));
