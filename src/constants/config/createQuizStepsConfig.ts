import { theme } from 'styles/theme';

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

const { colors } = theme;

export const CREATE_QUIZ_STEPS_CONFIG = {
  CATEGORIES: {
    [DEFAULT_CATEGORY_ID]: {
      icon: createIconPath('categories/any-category'),
      backgroundColor: {
        left: colors.gray[50],
        right: colors.blue[300],
      },
    },
    9: {
      icon: createIconPath('categories/general-knowledge'),
      backgroundColor: {
        left: colors.teal[300],
        right: colors.blue[300],
      },
    },
    10: {
      icon: createIconPath('categories/entertainment-books'),
      backgroundColor: {
        left: colors.pink[400],
        right: colors.white,
      },
    },
    11: {
      icon: createIconPath('categories/entertainment-film'),
      backgroundColor: {
        left: colors.yellow[400],
        right: colors.yellow[100],
      },
    },
    12: {
      icon: createIconPath('categories/entertainment-music'),
      backgroundColor: {
        left: colors.blue[300],
        right: colors.green[200],
      },
    },
    13: {
      icon: createIconPath('categories/entertainment-musicals&theatres'),
      backgroundColor: {
        left: colors.blue[200],
        right: colors.orange[200],
      },
    },
    14: {
      icon: createIconPath('categories/entertainment-television'),
      backgroundColor: {
        left: colors.red[100],
        right: colors.green[200],
      },
    },
    15: {
      icon: createIconPath('categories/entertainment-video-games'),
      backgroundColor: {
        left: colors.purple[200],
        right: colors.cyan[200],
      },
    },
    16: {
      icon: createIconPath('categories/entertainment-board-games'),
      backgroundColor: {
        left: colors.gray[500],
        right: colors.yellow[100],
      },
    },
    17: {
      icon: createIconPath('categories/science-and-nature'),
      backgroundColor: {
        left: colors.blue[300],
        right: colors.purple[200],
      },
    },
    18: {
      icon: createIconPath('categories/science-computers'),
      backgroundColor: {
        left: colors.yellow[100],
        right: colors.red[100],
      },
    },
    19: {
      icon: createIconPath('categories/science-mathematics'),
      backgroundColor: {
        left: colors.blue[200],
        right: colors.pink[200],
      },
    },
    20: {
      icon: createIconPath('categories/mythology'),
      backgroundColor: {
        left: colors.purple[300],
        right: colors.pink[100],
      },
    },
    21: {
      icon: createIconPath('categories/sports'),
      backgroundColor: {
        left: colors.purple[200],
        right: colors.cyan[200],
      },
    },
    22: {
      icon: createIconPath('categories/geography'),
      backgroundColor: {
        left: colors.pink[100],
        right: colors.blue[400],
      },
    },
    23: {
      icon: createIconPath('categories/history'),
      backgroundColor: {
        left: colors.pink[50],
        right: colors.green[200],
      },
    },
    24: {
      icon: createIconPath('categories/politics'),
      backgroundColor: {
        left: colors.blue[200],
        right: colors.blue[600],
      },
    },
    25: {
      icon: createIconPath('categories/art'),
      backgroundColor: {
        left: colors.pink[400],
        right: colors.cyan[200],
      },
    },
    26: {
      icon: createIconPath('categories/celebrities'),
      backgroundColor: {
        left: colors.green[400],
        right: colors.yellow[200],
      },
    },
    27: {
      icon: createIconPath('categories/animals'),
      backgroundColor: {
        left: colors.white,
        right: colors.yellow[400],
      },
    },
    28: {
      icon: createIconPath('categories/vehicles'),
      backgroundColor: {
        left: colors.gray[100],
        right: colors.red[300],
      },
    },
    29: {
      icon: createIconPath('categories/entertainment-comics'),
      backgroundColor: {
        left: colors.gray[600],
        right: colors.red[300],
      },
    },
    30: {
      icon: createIconPath('categories/science-gadgets'),
      backgroundColor: {
        left: colors.gray[50],
        right: colors.green[200],
      },
    },
    31: {
      icon: createIconPath('categories/entertainment-japanese-anime-and-manga'),
      backgroundColor: {
        left: colors.yellow[200],
        right: colors.green[300],
      },
    },
    32: {
      icon: createIconPath('categories/entertainment-cartoon-and-animations'),
      backgroundColor: {
        left: colors.white,
        right: colors.green[300],
      },
    },
  } as CategoryConfig,

  DIFFICULTY_LEVEL: [
    {
      id: 'easy',
      name: 'Easy',
      icon: createIconPath('difficulty-levels/easy-level'),
      backgroundColor: {
        left: '#cdf3ff',
        right: '#43b7ff',
      },
    },
    {
      id: 'medium',
      name: 'Medium',
      icon: createIconPath('difficulty-levels/medium-level'),
      backgroundColor: {
        left: '#a2fd62',
        right: '#f3ff4c',
      },
    },
    {
      id: 'hard',
      name: 'Hard',
      icon: createIconPath('difficulty-levels/hard-level'),
      backgroundColor: {
        left: '#ffc2c2',
        right: '#f84141',
      },
    },
  ] as DifficultyLevel[],
  QUIZ_TYPE: [
    {
      id: 'anyType',
      name: 'Any type',
      icon: createIconPath('quiz-types/any-type'),
      backgroundColor: {
        left: '#5ffaff',
        right: '#c7e3ff',
      },
    },
    {
      id: 'multiple',
      name: 'Multiple choices',
      icon: createIconPath('quiz-types/multiple-choices'),
      backgroundColor: {
        left: '#fff75c',
        right: '#7bfc51',
      },
    },
    {
      id: 'boolean',
      name: 'True/False',
      icon: createIconPath('quiz-types/true-false'),
      backgroundColor: {
        left: '#ffffff',
        right: '#a7a7a7',
      },
    },
  ] as QuizType[],
} as const;
