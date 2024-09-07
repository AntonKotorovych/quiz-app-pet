import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const DEFAULT_STATE_VALUES = {
  numberOfQuestions: '',
  category: '',
  difficulty: '',
  type: '',
  timer: '',
};

const MIN_STEP = 1;
const MAX_STEP = 5;

export const DEFAULT_STEP = MIN_STEP;

type FormState = typeof DEFAULT_STATE_VALUES;
type CreateQuizFormKeys = keyof FormState;

interface FormActions {
  clearFormData: VoidFunction;
  setFormElementValue: (payload: FormPayload) => void;
}

interface FormPayload {
  key: CreateQuizFormKeys;
  value: string;
}

interface StepState {
  currentStep: number;
  incrementCurrentStep: VoidFunction;
  decrementCurrentStep: VoidFunction;
  setStep: (step: number) => void;
  getCurrentStep: () => number;
}

type FormStore = FormState & FormActions & StepState;

export const useCreateQuizFormStore = create<FormStore>()(
  persist(
    (set, get) => ({
      ...DEFAULT_STATE_VALUES,
      clearFormData: () =>
        set({ ...DEFAULT_STATE_VALUES, currentStep: DEFAULT_STEP }),
      setFormElementValue: payload => {
        set(state => ({
          ...state,
          [payload.key]: payload.value,
        }));
      },
      currentStep: DEFAULT_STEP,
      getCurrentStep: () => get().currentStep,
      incrementCurrentStep: () => {
        set(state => {
          if (state.currentStep < MAX_STEP) {
            return { currentStep: state.currentStep + 1 };
          }
          return state;
        });
      },
      decrementCurrentStep: () => {
        set(state => {
          if (state.currentStep > MIN_STEP) {
            return { currentStep: state.currentStep - 1 };
          }
          return state;
        });
      },
      setStep: step => set(() => ({ currentStep: step })),
    }),
    {
      name: 'create-quiz-form-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
