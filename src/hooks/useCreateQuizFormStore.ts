import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { DEFAULT_CATEGORY_ID } from 'constants/config/createQuizStepsConfig';

export const DEFAULT_TIMER_VALUE = 30;

const DEFAULT_STATE_VALUES = {
  numberOfQuestions: '',
  category: DEFAULT_CATEGORY_ID,
  difficulty: '',
  type: '',
  timer: DEFAULT_TIMER_VALUE,
};

type FormState = typeof DEFAULT_STATE_VALUES;
export type QuizFormKeys = keyof FormState;

interface FormActions {
  clearFormData: VoidFunction;
  clearField: (key: QuizFormKeys) => void;
  setFormElementValue: (payload: FormPayload) => void;
}

interface FormPayload {
  key: QuizFormKeys;
  value: string | number;
}

// interface StepState {
//   currentStep: number;
//   incrementCurrentStep: VoidFunction;
//   decrementCurrentStep: VoidFunction;
//   setStep: (step: number) => void;
// }

type FormStore = FormState & FormActions;

export const useCreateQuizFormStore = create<FormStore>()(
  persist(
    set => ({
      ...DEFAULT_STATE_VALUES,
      clearFormData: () => set(DEFAULT_STATE_VALUES),
      clearField: (key: QuizFormKeys) =>
        set(state => ({
          ...state,
          [key]: DEFAULT_STATE_VALUES[key],
        })),
      setFormElementValue: payload => {
        set(state => ({
          ...state,
          [payload.key]: payload.value,
        }));
      },
    }),
    {
      name: 'create-quiz-form-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
