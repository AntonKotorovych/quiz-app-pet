import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { DEFAULT_CATEGORY_ID } from 'constants/config/createQuizStepsConfig';

const DEFAULT_STATE_VALUES = {
  numberOfQuestions: '',
  category: DEFAULT_CATEGORY_ID,
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
  value: string | number;
}

interface StepState {
  currentStep: number;
  incrementCurrentStep: VoidFunction;
  decrementCurrentStep: VoidFunction;
  setStep: (step: number) => void;
}

type FormStore = FormState & FormActions & StepState;

export const useCreateQuizFormStore = create<FormStore>()(
  persist(
    set => ({
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
