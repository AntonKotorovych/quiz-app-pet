import { Box, List } from '@chakra-ui/react';
import { CREATE_QUIZ_STEPS_CONFIG } from 'constants/config/createQuizStepsConfig';
import { FormPayload, useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import ListItem from '../ListItem';

export default function DifficultyList() {
  const setFormElementValue = useCreateQuizFormStore(
    state => state.setFormElementValue
  );

  const handleDifficultyClick = (payload: FormPayload) => {
    setFormElementValue({ key: payload.key, value: payload.value });
  };

  return (
    <Box width="full">
      <List
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        justifyItems="center"
      >
        {CREATE_QUIZ_STEPS_CONFIG.DIFFICULTY_LEVEL.map(difficultyLevel => (
          <ListItem
            keyType="difficulty"
            id={difficultyLevel.id}
            name={difficultyLevel.name}
            key={difficultyLevel.id}
            icon={difficultyLevel.icon}
            backgroundColor={difficultyLevel.backgroundColor}
            onClick={handleDifficultyClick}
          />
        ))}
      </List>
    </Box>
  );
}
