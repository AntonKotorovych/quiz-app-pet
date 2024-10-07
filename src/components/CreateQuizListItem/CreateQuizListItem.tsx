import ListItem from 'components/CreateQuiz/ListItem';
import { FormPayload, useCreateQuizFormStore } from 'hooks/useCreateQuizFormStore';
import { ListItemProps } from 'types/interfaces';

export default function CreateQuizListItem({ ...props }: ListItemProps) {
  const setFormElementValue = useCreateQuizFormStore(state => state.setFormElementValue);
  const isSelected = useCreateQuizFormStore(state =>
    state.isSelected(props.keyType, props.id)
  );

  const handleElementClick = (payload: FormPayload) => {
    setFormElementValue({ key: payload.key, value: payload.value });
  };

  return <ListItem {...props} onClick={handleElementClick} isSelected={isSelected} />;
}
