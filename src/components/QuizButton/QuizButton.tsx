import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface QuizButtonProps {
  colorScheme?: string;
  children: ReactNode;
  onClick?: VoidFunction;
}

export default function QuizButton({
  colorScheme = 'green',
  children,
  onClick,
}: QuizButtonProps) {
  return (
    <Button size="lg" minW={36} colorScheme={colorScheme} onClick={onClick}>
      {children}
    </Button>
  );
}
