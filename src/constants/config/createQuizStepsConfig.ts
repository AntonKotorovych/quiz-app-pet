type DifficultyLevelId = 'easy' | 'medium' | 'hard';
type QuizTypeId = 'anyType' | 'multiple' | 'boolean';

interface BackgroundColor {
  left: string;
  right: string;
}

interface Category {
  icon: string;
  backgroundColor: BackgroundColor;
}

interface CategoryConfig {
  [key: number]: Category;
}

interface DifficultyLevel {
  id: DifficultyLevelId;
  name: string;
  icon: string;
  backgroundColor: BackgroundColor;
}

interface QuizType {
  id: QuizTypeId;
  name: string;
  icon: string;
  backgroundColor: BackgroundColor;
}

export type ElementId = number | DifficultyLevelId | QuizTypeId;

export const DEFAULT_CATEGORY_ID = -1;

const createIconPath = (path: string) => `../../../assets/icons/${path}.svg`;

export const CREATE_QUIZ_STEPS_CONFIG = {
  CATEGORIES: {
    [DEFAULT_CATEGORY_ID]: {
      icon: createIconPath('categories/any-category'),
      backgroundColor: {
        left: 'gray.50',
        right: 'blue.300',
      },
    },
    9: {
      icon: createIconPath('categories/general-knowledge'),
      backgroundColor: {
        left: 'teal.300',
        right: 'blue.300',
      },
    },
    10: {
      icon: createIconPath('categories/entertainment-books'),
      backgroundColor: {
        left: 'pink.400',
        right: 'white',
      },
    },
    11: {
      icon: createIconPath('categories/entertainment-film'),
      backgroundColor: {
        left: 'yellow.400',
        right: 'yellow.100',
      },
    },
    12: {
      icon: createIconPath('categories/entertainment-music'),
      backgroundColor: {
        left: 'blue.300',
        right: 'green.200',
      },
    },
    13: {
      icon: createIconPath('categories/entertainment-musicals&theatres'),
      backgroundColor: {
        left: 'blue.200',
        right: 'orange.200',
      },
    },
    14: {
      icon: createIconPath('categories/entertainment-television'),
      backgroundColor: {
        left: 'red.100',
        right: 'green.200',
      },
    },
    15: {
      icon: createIconPath('categories/entertainment-video-games'),
      backgroundColor: {
        left: 'purple.200',
        right: 'cyan.200',
      },
    },
    16: {
      icon: createIconPath('categories/entertainment-board-games'),
      backgroundColor: {
        left: 'gray.500',
        right: 'yellow.100',
      },
    },
    17: {
      icon: createIconPath('categories/science-and-nature'),
      backgroundColor: {
        left: 'blue.300',
        right: 'purple.200',
      },
    },
    18: {
      icon: createIconPath('categories/science-computers'),
      backgroundColor: {
        left: 'yellow.100',
        right: 'red.100',
      },
    },
    19: {
      icon: createIconPath('categories/science-mathematics'),
      backgroundColor: {
        left: 'blue.200',
        right: 'pink.200',
      },
    },
    20: {
      icon: createIconPath('categories/mythology'),
      backgroundColor: {
        left: 'purple.300',
        right: 'pink.100',
      },
    },
    21: {
      icon: createIconPath('categories/sports'),
      backgroundColor: {
        left: 'purple.200',
        right: 'cyan.200',
      },
    },
    22: {
      icon: createIconPath('categories/geography'),
      backgroundColor: {
        left: 'pink.100',
        right: 'blue.400',
      },
    },
    23: {
      icon: createIconPath('categories/history'),
      backgroundColor: {
        left: 'pink.50',
        right: 'green.200',
      },
    },
    24: {
      icon: createIconPath('categories/politics'),
      backgroundColor: {
        left: 'blue.200',
        right: 'blue.600',
      },
    },
    25: {
      icon: createIconPath('categories/art'),
      backgroundColor: {
        left: 'pink.400',
        right: 'cyan.200',
      },
    },
    26: {
      icon: createIconPath('categories/celebrities'),
      backgroundColor: {
        left: 'green.400',
        right: 'yellow.200',
      },
    },
    27: {
      icon: createIconPath('categories/animals'),
      backgroundColor: {
        left: 'white',
        right: 'yellow.400',
      },
    },
    28: {
      icon: createIconPath('categories/vehicles'),
      backgroundColor: {
        left: 'gray.100',
        right: 'red.300',
      },
    },
    29: {
      icon: createIconPath('categories/entertainment-comics'),
      backgroundColor: {
        left: 'gray.600',
        right: 'red.300',
      },
    },
    30: {
      icon: createIconPath('categories/science-gadgets'),
      backgroundColor: {
        left: 'gray.50',
        right: 'green.200',
      },
    },
    31: {
      icon: createIconPath('categories/entertainment-japanese-anime-and-manga'),
      backgroundColor: {
        left: 'yellow.200',
        right: 'green.300',
      },
    },
    32: {
      icon: createIconPath('categories/entertainment-cartoon-and-animations'),
      backgroundColor: {
        left: 'white',
        right: 'green.300',
      },
    },
  } as CategoryConfig,

  DIFFICULTY_LEVEL: [
    {
      id: 'easy',
      name: 'Easy',
      icon: createIconPath('difficulty-levels/easy-level'),
      backgroundColor: {
        left: 'blue.100',
        right: 'blue.400',
      },
    },
    {
      id: 'medium',
      name: 'Medium',
      icon: createIconPath('difficulty-levels/medium-level'),
      backgroundColor: {
        left: 'green.200',
        right: 'yellow.300',
      },
    },
    {
      id: 'hard',
      name: 'Hard',
      icon: createIconPath('difficulty-levels/hard-level'),
      backgroundColor: {
        left: 'red.200',
        right: 'red.500',
      },
    },
  ] as DifficultyLevel[],
  QUIZ_TYPE: [
    {
      id: 'anyType',
      name: 'Any type',
      icon: createIconPath('quiz-types/any-type'),
      backgroundColor: {
        left: 'cyan.300',
        right: 'cyan.200',
      },
    },
    {
      id: 'multiple',
      name: 'Multiple choices',
      icon: createIconPath('quiz-types/multiple-choices'),
      backgroundColor: {
        left: 'yellow.200',
        right: 'green.200',
      },
    },
    {
      id: 'boolean',
      name: 'True/False',
      icon: createIconPath('quiz-types/true-false'),
      backgroundColor: {
        left: 'white',
        right: 'gray.500',
      },
    },
  ] as QuizType[],
} as const;
