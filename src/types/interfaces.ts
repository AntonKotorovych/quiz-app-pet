import { ElementId } from 'constants/config/createQuizStepsConfig';
import { FormPayload, QuizFormKeys } from 'hooks/useCreateQuizFormStore';

export interface CreateQuizListItem {
  id: ElementId;
  name: string;
  icon: string;
  backgroundColor: { left: string; right: string };
  keyType: QuizFormKeys;
  isSelected?: boolean;
  onClick?: ({ key, value }: FormPayload) => void;
}
