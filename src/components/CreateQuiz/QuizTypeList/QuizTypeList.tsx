import { Box, List } from '@chakra-ui/react';
import { CREATE_QUIZ_STEPS_CONFIG } from 'constants/config/createQuizStepsConfig';
import { FormPayload, useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import ListItem from '../ListItem';

export default function QuizTypeList() {
  const setFormElementValue = useCreateQuizFormStore(
    state => state.setFormElementValue
  );

  const handleQuizTypeClick = (payload: FormPayload) => {
    setFormElementValue({ key: payload.key, value: payload.value });
  };

  return (
    <Box width="full">
      <List
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        justifyItems="center"
      >
        {CREATE_QUIZ_STEPS_CONFIG.QUIZ_TYPE.map(quizType => (
          <ListItem
            keyType="type"
            id={quizType.id}
            name={quizType.name}
            key={quizType.id}
            icon={quizType.icon}
            backgroundColor={quizType.backgroundColor}
            onClick={handleQuizTypeClick}
          />
        ))}
      </List>
    </Box>
  );
}
