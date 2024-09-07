import { Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { MAX_QUESTION_QUANTITY } from 'constants/constants';
import { useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';

const QUESTION_QUANTITY_OPTIONS = Array.from(
  { length: MAX_QUESTION_QUANTITY },
  (_, i) => i + 1
);

export default function NumberOfQuestionsSelect() {
  const setFormElementValue = useCreateQuizFormStore(
    state => state.setFormElementValue
  );
  const numbersOfQuestionValue = useCreateQuizFormStore(
    state => state.numberOfQuestions
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormElementValue({ key: 'numberOfQuestions', value: e.target.value });
  };

  return (
    <Select
      placeholder="Select number of questions..."
      width="50%"
      size="lg"
      onChange={handleChange}
      value={numbersOfQuestionValue}
    >
      {QUESTION_QUANTITY_OPTIONS.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
