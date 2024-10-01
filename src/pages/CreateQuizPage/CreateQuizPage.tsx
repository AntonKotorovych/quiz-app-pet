import { useParams } from 'react-router-dom';
import CreateQuiz from 'components/CreateQuiz';
import Error from 'components/Error';
import { getIsValidStep } from 'utils/getIsValidStep';

export default function CreateQuizPage() {
  const { step } = useParams();

  const isValidStep = getIsValidStep(step);

  return (
    <>
      {isValidStep ? <CreateQuiz /> : <Error title="404" message="Page not found" />}
    </>
  );
}
