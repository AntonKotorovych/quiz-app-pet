import { Box, Input, Text } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import {
  DEFAULT_TIMER_VALUE,
  useCreateQuizFormStore,
} from 'hooks/useCreateQuizFormStore';
import { secondsToTimeString } from 'utils/secondsToTimeString';
import { timeStringToSeconds } from 'utils/timeStringToSeconds';

export default function TimerInput() {
  const timerValue = useCreateQuizFormStore(state => state.timer);
  const setFormElementValue = useCreateQuizFormStore(
    state => state.setFormElementValue
  );

  const handleTimerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const convertedToSecondsTime = timeStringToSeconds(event.target.value);

    if (convertedToSecondsTime <= 3600) {
      setFormElementValue({ key: 'timer', value: convertedToSecondsTime });
    } else {
      setFormElementValue({ key: 'timer', value: DEFAULT_TIMER_VALUE });
      alert('Time exceeds the maximum allowed duration of 1 hour.');
    }
  };

  return (
    <Box width="70%" borderColor="gray.700">
      <Text mb={4}>Total seconds - {timerValue}</Text>
      <Input
        type="time"
        step="1"
        borderRadius="full"
        value={secondsToTimeString(timerValue)}
        onChange={handleTimerChange}
      />
    </Box>
  );
}
