import { Box, List } from '@chakra-ui/react';
import { CREATE_QUIZ_STEPS_CONFIG } from 'constants/config/createQuizStepsConfig';
import ListItem from '../ListItem';

export default function CategoryList() {
  return (
    <Box overflowY="scroll" height="350px" width="full">
      <List
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={4}
        overflow="hidden"
        p={4}
      >
        {CREATE_QUIZ_STEPS_CONFIG.CATEGORIES.map(category => (
          <ListItem
            id={category.id}
            name={category.name}
            key={category.id}
            icon={category.icon}
            backgroundColor={category.backgroundColor}
          />
        ))}
      </List>
    </Box>
  );
}
