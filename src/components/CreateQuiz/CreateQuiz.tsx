import { Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FIRST_STEP, LAST_STEP, STEP_CONFIG } from 'constants/config/stepConfig';
import QuizButton from 'components/QuizButton';
import { ROUTES } from 'constants/routes';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import { getIsValidStep } from 'utils/getIsValidStep';
import { CreateQuizContainer } from './styles';

enum StepDirections {
  NEXT = 'next',
  BACK = 'back',
}

export default function CreateQuiz() {
  const navigate = useNavigate();
  const { step } = useParams();

  const clearFormData = useCreateQuizFormStore(state => state.clearFormData);
  const clearField = useCreateQuizFormStore(state => state.clearField);

  const isValidStep = getIsValidStep(step);

  const handleClear = () => {
    if (step) clearField(STEP_CONFIG[step].name);
  };

  const handleNavigate = (direction: StepDirections) => {
    if (isValidStep && step) {
      const convertedStep = +step;

      const newStep =
        direction === StepDirections.NEXT ? convertedStep + 1 : convertedStep - 1;

      navigate(`${ROUTES.CREATE_QUIZ}/${newStep}`);
    }
  };

  useEffect(() => {
    return () => {
      clearFormData();
    };
  }, [clearFormData]);

  if (!isValidStep || !step) {
    return null;
  }

  const QuizStep = STEP_CONFIG[step]?.component;

  return (
    <CreateQuizContainer as="section">
      <Flex p={10} flexDirection="column" h="full" w="full">
        <Flex flexDirection="column" flex={1} justifyContent="space-between">
          <Text fontSize="xl">Step: {step}</Text>
          <Heading size="lg" alignSelf="center">
            {STEP_CONFIG[step]?.title}
          </Heading>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection="column"
          flex={6}
          justifyContent="center"
        >
          <QuizStep />
        </Flex>
        <HStack
          borderTop="2px"
          justifyContent="space-between"
          spacing={10}
          pt={6}
          flex={1}
        >
          <QuizButton onClick={handleClear} colorScheme="yellow">
            Clear
          </QuizButton>
          {step !== FIRST_STEP && (
            <QuizButton onClick={() => handleNavigate(StepDirections.BACK)}>
              Back
            </QuizButton>
          )}
          <Spacer />
          {step !== LAST_STEP && (
            <QuizButton onClick={() => handleNavigate(StepDirections.NEXT)}>
              Next
            </QuizButton>
          )}
          <QuizButton colorScheme="yellow">Finish</QuizButton>
        </HStack>
      </Flex>
    </CreateQuizContainer>
  );
}
