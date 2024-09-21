import { Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FIRST_STEP, LAST_STEP, STEP_CONFIG } from 'constants/config/stepConfig';
import { ROUTES } from 'constants/routes';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import { CreateQuizContainer } from './styles';

enum Directions {
  NEXT = 'next',
  BACK = 'back',
}

export default function CreateQuiz() {
  const { step } = useParams();
  const navigate = useNavigate();

  const clearFormData = useCreateQuizFormStore(state => state.clearFormData);
  const clearField = useCreateQuizFormStore(state => state.clearField);

  const isValidStep = !!step && Object.keys(STEP_CONFIG).includes(step);

  const handleClear = () => {
    if (step) clearField(STEP_CONFIG[step].name);
  };

  const handleNavigate = (direction: Directions) => {
    if (isValidStep) {
      const newStep = direction === Directions.NEXT ? +step + 1 : +step - 1;

      navigate(`${ROUTES.CREATE_QUIZ}/${newStep}`);
    }
  };

  useEffect(() => {
    return () => {
      clearFormData();
    };
  }, [clearFormData]);

  if (!isValidStep) {
    return null;
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
          borderTop="2px"
          justifyContent="space-between"
          spacing={10}
          pt={6}
          flex={1}
        >
          <Button colorScheme="yellow" size="lg" minW={36} onClick={handleClear}>
            Clear
          </Button>
          {step !== FIRST_STEP && (
            <Button
              colorScheme="green"
              size="lg"
              minW={36}
              onClick={() => handleNavigate(Directions.BACK)}
            >
              Back
            </Button>
          )}
          <Spacer />
          {step !== LAST_STEP && (
            <Button
              colorScheme="green"
              size="lg"
              minW={36}
              onClick={() => handleNavigate(Directions.NEXT)}
            >
              Next
            </Button>
          )}
          <Button colorScheme="yellow" size="lg" minW={36}>
            Finish
          </Button>
        </HStack>
      </Flex>
    </CreateQuizContainer>
  );
}
