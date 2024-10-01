import CategoryList from 'components/CreateQuiz/CategoryList';
import DifficultyList from 'components/CreateQuiz/DifficultyList';
import NumberOfQuestionsSelect from 'components/CreateQuiz/NumberOfQuestionsSelect';
import QuizTypeList from 'components/CreateQuiz/QuizTypeList';
import TimerInput from 'components/CreateQuiz/TimerInput';
import { QuizFormKeys } from 'hooks/useCreateQuizFormStore';

export const STEP_CONFIG: {
  [key: string]: {
    name: QuizFormKeys;
    title: string;
    component: React.FC;
  };
} = {
  '1': {
    name: 'numberOfQuestions',
    title: 'Number of Questions',
    component: NumberOfQuestionsSelect,
  },
  '2': {
    name: 'category',
    title: 'Select Category',
    component: CategoryList,
  },
  '3': {
    name: 'difficulty',
    title: 'Select Difficulty',
    component: DifficultyList,
  },
  '4': {
    name: 'type',
    title: 'Select Type',
    component: QuizTypeList,
  },
  '5': {
    name: 'timer',
    title: 'Timer for Each Question',
    component: TimerInput,
  },
};

const STEP_KEYS = Object.keys(STEP_CONFIG);

export const FIRST_STEP = STEP_KEYS[0];
export const LAST_STEP = STEP_KEYS[STEP_KEYS.length - 1];
