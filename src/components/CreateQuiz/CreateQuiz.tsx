import { Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { STEP_CONFIG } from 'constants/config/stepConfig';
import { ROUTES } from 'constants/routes';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import { CreateQuizContainer } from './styles';

export default function CreateQuiz() {
  const { step } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentStep = useCreateQuizFormStore(state => state.currentStep);
  const incrementStep = useCreateQuizFormStore(state => state.incrementCurrentStep);
  const decrementStep = useCreateQuizFormStore(state => state.decrementCurrentStep);
  const setStep = useCreateQuizFormStore(state => state.setStep);
  const clearFormData = useCreateQuizFormStore(state => state.clearFormData);

  const isValidStep = step && Object.keys(STEP_CONFIG).includes(step);

  useEffect(() => {
    if (isValidStep) {
      setStep(+step);
    } else {
      navigate(ROUTES.HOME);
    }
  }, [step, isValidStep, setStep, navigate, clearFormData]);

  useEffect(() => {
    if (isValidStep) navigate(`${ROUTES.CREATE_QUIZ}/${currentStep}`);
  }, [currentStep, navigate, isValidStep]);

  useEffect(() => {
    return () => {
      clearFormData();
    };
  }, [clearFormData]);

  if (!isValidStep) {
    return null;
  }

  if (!location.pathname.includes(ROUTES.CREATE_QUIZ)) {
    console.log('clearFormData');
    clearFormData();
  }
  return (
    <CreateQuizContainer as="section">
      <Flex p={10} flexDirection="column" h="full">
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
          {STEP_CONFIG[step].component}
        </Flex>
        <HStack
          borderTop="5px black solid"
          justifyContent="space-between"
          spacing={10}
          pt={6}
          flex={1}
        >
          <Button colorScheme="yellow" size="lg" w={36}>
            Clear
          </Button>
          {step !== '1' && (
            <Button colorScheme="green" size="lg" w={36} onClick={decrementStep}>
              Back
            </Button>
          )}
          <Spacer />
          {step !== '5' && (
            <Button colorScheme="green" size="lg" w={36} onClick={incrementStep}>
              Next
            </Button>
          )}
          <Button colorScheme="yellow" size="lg" w={36}>
            Finish
          </Button>
        </HStack>
      </Flex>
    </CreateQuizContainer>
  );
}
