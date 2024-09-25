import { ONE_HOUR_IN_SECONDS, ONE_MINUTE_IN_SECONDS } from 'constants/constants';

export const timeStringToSeconds = (timeString: string): number => {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  return hours * ONE_HOUR_IN_SECONDS + minutes * ONE_MINUTE_IN_SECONDS + seconds;
};
