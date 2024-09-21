import { Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FIRST_STEP, LAST_STEP, STEP_CONFIG } from 'constants/config/stepConfig';
import { ROUTES } from 'constants/routes';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import { CreateQuizContainer } from './styles';

export default function CreateQuiz() {
  const { step } = useParams();
  const navigate = useNavigate();

  const clearFormData = useCreateQuizFormStore(state => state.clearFormData);
  const clearField = useCreateQuizFormStore(state => state.clearField);

  const isValidStep = !!step && Object.keys(STEP_CONFIG).includes(step);

  const handleClear = () => {
    if (step) clearField(STEP_CONFIG[step].name);
  };

  const handleClickNext = () => {
    if (isValidStep) {
      navigate(`${ROUTES.CREATE_QUIZ}/${+step + 1}`);
    }
  };

  const handleClickBack = () => {
    if (isValidStep) {
      navigate(`${ROUTES.CREATE_QUIZ}/${+step - 1}`);
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
              onClick={handleClickBack}
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
              onClick={handleClickNext}
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
