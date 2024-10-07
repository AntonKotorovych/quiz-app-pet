import { Box, Input, Text, useToast } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import { secondsToTimeString } from 'utils/secondsToTimeString';
import { timeStringToSeconds } from 'utils/timeStringToSeconds';
import { ONE_HOUR_IN_SECONDS } from 'constants/constants';

export default function TimerInput() {
  const toast = useToast();

  const timerValue = useCreateQuizFormStore(state => state.timer);
  const setFormElementValue = useCreateQuizFormStore(
    state => state.setFormElementValue
  );

  const handleTimerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const convertedToSecondsTime = timeStringToSeconds(event.target.value);

    if (convertedToSecondsTime <= ONE_HOUR_IN_SECONDS) {
      setFormElementValue({ key: 'timer', value: convertedToSecondsTime });
    } else {
      toast({
        status: 'error',
        title: 'Oops!',
        description: "You can't set the timer for more than an hour",
      });
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
