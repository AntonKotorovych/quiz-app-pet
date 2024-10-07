import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_CATEGORY_ID, ElementId } from 'constants/config/createQuizStepsConfig';

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
  isSelected: (key: QuizFormKeys, id: ElementId) => boolean;
}

export interface FormPayload {
  key: QuizFormKeys;
  value: string | number;
}

type FormStore = FormState & FormActions;

export const useCreateQuizFormStore = create<FormStore>()(
  persist(
    (set, get) => ({
      ...DEFAULT_STATE_VALUES,
      clearFormData: () => set(DEFAULT_STATE_VALUES),
      clearField: (key: QuizFormKeys) =>
        set(state => ({
          ...state,
          [key]: DEFAULT_STATE_VALUES[key],
        })),
      setFormElementValue: ({ key, value }) => {
        set(state => ({
          ...state,
          [key]: value,
        }));
      },
      isSelected: (key, id) => {
        const currentItem = get()[key];

        return currentItem === id;
      },
    }),
    {
      name: 'create-quiz-form-storage',
    }
  )
);
