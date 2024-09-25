import { useParams } from 'react-router-dom';
import CreateQuiz from 'components/CreateQuiz';
import { STEP_CONFIG } from 'constants/config/stepConfig';
import Error from 'components/Error';

export default function CreateQuizPage() {
  const { step } = useParams();

  const isValidStep = !!step && Object.keys(STEP_CONFIG).includes(step);

  return (
    <>
      {isValidStep ? (
        <CreateQuiz step={step} />
      ) : (
        <Error title="404" message="Page not found" />
      )}
    </>
  );
}
