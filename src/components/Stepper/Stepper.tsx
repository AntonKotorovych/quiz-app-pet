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
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { STEP_CONFIG, STEP_KEYS } from 'constants/config/stepConfig';

export default function Stepper() {
  const { step } = useParams();

  return (
    <ChakraStepper index={step ? +step - 1 : 0} mb={10} colorScheme="green">
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
