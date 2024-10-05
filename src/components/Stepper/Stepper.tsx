import {
  Box,
  Stepper as ChakraStepper,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { STEP_CONFIG, STEP_KEYS } from 'constants/config/stepConfig';

export default function Stepper() {
  const { step } = useParams();

  const { activeStep, setActiveStep } = useSteps({
    index: step ? +step - 1 : 0,
    count: STEP_KEYS.length,
  });

  useEffect(() => {
    if (step) {
      setActiveStep(+step - 1);
    }
  }, [step, setActiveStep]);

  return (
    <ChakraStepper index={activeStep} mb={10} colorScheme="green">
      {STEP_KEYS.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>Step: {step}</StepTitle>
            <StepDescription>{STEP_CONFIG[step].title}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
}
