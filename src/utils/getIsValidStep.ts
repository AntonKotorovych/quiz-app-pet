import { STEP_CONFIG } from 'constants/config/stepConfig';

export const getIsValidStep = (step?: string): boolean => {
  if (step) {
    return !!step && Object.keys(STEP_CONFIG).includes(step);
  }
  return false;
};
