import CategoryList from 'components/CreateQuiz/CategoryList';
import DifficultyList from 'components/CreateQuiz/DifficultyList';
import NumberOfQuestionsSelect from 'components/CreateQuiz/NumberOfQuestionsSelect';
import QuizTypeList from 'components/CreateQuiz/QuizTypeList';
import TimerInput from 'components/CreateQuiz/TimerInput';

export const STEP_CONFIG: {
  [key: string]: {
    title: string;
    component?: JSX.Element;
  };
} = {
  '1': {
    title: 'Number of Questions',
    component: <NumberOfQuestionsSelect />,
  },
  '2': {
    title: 'Select Category',
    component: <CategoryList />,
  },
  '3': {
    title: 'Select Difficulty',
    component: <DifficultyList />,
  },
  '4': {
    title: 'Select Type',
    component: <QuizTypeList />,
  },
  '5': {
    title: 'Timer for Each Question',
    component: <TimerInput />,
  },
};
