import { Box, List } from '@chakra-ui/react';
import { CREATE_QUIZ_STEPS_CONFIG } from 'constants/config/createQuizStepsConfig';
import CreateQuizListItem from 'components/CreateQuizListItem';

export default function QuizTypeList() {
  return (
    <Box width="full">
      <List display="grid" gridTemplateColumns="repeat(3, 1fr)" justifyItems="center">
        {CREATE_QUIZ_STEPS_CONFIG.QUIZ_TYPE.map(quizType => (
          <CreateQuizListItem
            keyType="type"
            id={quizType.id}
            name={quizType.name}
            key={quizType.id}
            icon={quizType.icon}
            backgroundColor={quizType.backgroundColor}
          />
        ))}
      </List>
    </Box>
  );
}
