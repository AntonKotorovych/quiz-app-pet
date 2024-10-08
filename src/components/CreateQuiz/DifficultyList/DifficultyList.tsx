import { Box, List } from '@chakra-ui/react';
import { CREATE_QUIZ_STEPS_CONFIG } from 'constants/config/createQuizStepsConfig';
import CreateQuizListItem from 'components/CreateQuizListItem';

export default function DifficultyList() {
  return (
    <Box width="full">
      <List display="grid" gridTemplateColumns="repeat(3, 1fr)" justifyItems="center">
        {CREATE_QUIZ_STEPS_CONFIG.DIFFICULTY_LEVEL.map(difficultyLevel => (
          <CreateQuizListItem
            keyType="difficulty"
            id={difficultyLevel.id}
            name={difficultyLevel.name}
            key={difficultyLevel.id}
            icon={difficultyLevel.icon}
            backgroundColor={difficultyLevel.backgroundColor}
          />
        ))}
      </List>
    </Box>
  );
}
