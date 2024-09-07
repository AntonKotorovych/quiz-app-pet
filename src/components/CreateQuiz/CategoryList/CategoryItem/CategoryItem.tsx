import { ListIcon, ListItem } from '@chakra-ui/react';

interface Props {
  name: string;
  icon: string;
  backgroundColor: string;
}

export default function CategoryItem({ name, icon, backgroundColor }: Props) {
  return (
    <ListItem bgColor={backgroundColor}>
      <ListIcon as={icon} />
      {name}
    </ListItem>
  );
}
