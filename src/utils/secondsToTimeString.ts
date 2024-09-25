import { ONE_HOUR_IN_SECONDS, ONE_MINUTE_IN_SECONDS } from 'constants/constants';

export const secondsToTimeString = (seconds: number): string => {
  const hours = Math.floor(seconds / ONE_HOUR_IN_SECONDS);
  const minutes = Math.floor(
    (seconds % ONE_HOUR_IN_SECONDS) / ONE_MINUTE_IN_SECONDS
  );
  const remainingSeconds = seconds % ONE_MINUTE_IN_SECONDS;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
