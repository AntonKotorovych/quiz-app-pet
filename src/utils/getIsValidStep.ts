import { STEP_CONFIG } from 'constants/config/stepConfig';

export const getIsValidStep = (step: string | undefined): boolean => {
  if (step) return !!step && Object.keys(STEP_CONFIG).includes(step);
  return false;
};
