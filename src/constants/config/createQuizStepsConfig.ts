// Category icons

import GeneralKnowledge from '../../../assets/icons/categories/general-knowledge.svg';
import EntertainmentBooks from '../../../assets/icons/categories/entertainment-books.svg';
import EntertainmentFilm from '../../../assets/icons/categories/entertainment-film.svg';
import EntertainmentMusic from '../../../assets/icons/categories/entertainment-music.svg';
import EntertainmentMusicalsAndTheatres from '../../../assets/icons/categories/entertainment-musicals&theatres.svg';
import EntertainmentTelevision from '../../../assets/icons/categories/entertainment-television.svg';
import EntertainmentVideoGames from '../../../assets/icons/categories/entertainment-video-games.svg';
import EntertainmentBoardGames from '../../../assets/icons/categories/entertainment-board-games.svg';
import ScienceAndNature from '../../../assets/icons/categories/science-and-nature.svg';
import ScienceComputers from '../../../assets/icons/categories/science-computers.svg';
import ScienceMathematics from '../../../assets/icons/categories/science-mathematics.svg';
import Mythology from '../../../assets/icons/categories/mythology.svg';
import Sports from '../../../assets/icons/categories/sports.svg';
import Geography from '../../../assets/icons/categories/geography.svg';
import History from '../../../assets/icons/categories/history.svg';
import Politics from '../../../assets/icons/categories/politics.svg';
import Art from '../../../assets/icons/categories/art.svg';
import Celebrities from '../../../assets/icons/categories/celebrities.svg';
import Animals from '../../../assets/icons/categories/animals.svg';
import Vehicles from '../../../assets/icons/categories/vehicles.svg';
import EntertainmentComics from '../../../assets/icons/categories/entertainment-comics.svg';
import ScienceGadgets from '../../../assets/icons/categories/science-gadgets.svg';
import EntertainmentAnimeManga from '../../../assets/icons/categories/entertainment-japanese-anime-and-manga.svg';
import EntertainmentCartoons from '../../../assets/icons/categories/entertainment-cartoon-and-animations.svg';
import AnyCategory from '../../../assets/icons/categories/any-category.svg';

// Difficulty level icons

import EasyLevel from '../../../assets/icons/difficulty-levels/easy-level.svg';
import MediumLevel from '../../../assets/icons/difficulty-levels/medium-level.svg';
import HardLevel from '../../../assets/icons/difficulty-levels/hard-level.svg';

// Quiz-types icons

import AnyType from '../../../assets/icons/quiz-types/any-type.svg';
import MultipleChoice from '../../../assets/icons/quiz-types/multiple-choices.svg';
import TrueFalse from '../../../assets/icons/quiz-types/true-false.svg';

type DifficultyLevelId = 'easy' | 'medium' | 'hard';
type QuizTypeId = 'anyType' | 'multiple' | 'boolean';

interface BackgroundColor {
  left: string;
  right: string;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  backgroundColor: BackgroundColor;
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

export const DEFAULT_CATEGORY_ID = 1;

export const CREATE_QUIZ_STEPS_CONFIG = {
  CATEGORIES: [
    {
      id: DEFAULT_CATEGORY_ID,
      name: 'Any Category',
      icon: AnyCategory,
      backgroundColor: {
        left: '#f5fbe6',
        right: '#70b7f9',
      },
    },
    {
      id: 9,
      name: 'General Knowledge',
      icon: GeneralKnowledge,
      backgroundColor: {
        left: '#74ebd5',
        right: '#80befd',
      },
    },
    {
      id: 10,
      name: 'Entertainment: Books',
      icon: EntertainmentBooks,
      backgroundColor: {
        left: '#e181e1',
        right: '#ffffff',
      },
    },
    {
      id: 11,
      name: 'Entertainment: Film',
      icon: EntertainmentFilm,
      backgroundColor: {
        left: '#CAC531',
        right: '#F3F9A7',
      },
    },
    {
      id: 12,
      name: 'Entertainment: Music',
      icon: EntertainmentMusic,
      backgroundColor: {
        left: '#58b6fe',
        right: '#baf784',
      },
    },
    {
      id: 13,
      name: 'Entertainment: Musicals & Theatres',
      icon: EntertainmentMusicalsAndTheatres,
      backgroundColor: {
        left: '#7bd5ff',
        right: '#ffc088',
      },
    },
    {
      id: 14,
      name: 'Entertainment: Television',
      icon: EntertainmentTelevision,
      backgroundColor: {
        left: '#e0e0e0',
        right: '#8bffc1',
      },
    },
    {
      id: 15,
      name: 'Entertainment: Video Games',
      icon: EntertainmentVideoGames,
      backgroundColor: {
        left: '#b7baff',
        right: '#80ceff',
      },
    },
    {
      id: 16,
      name: 'Entertainment: Board Games',
      icon: EntertainmentBoardGames,
      backgroundColor: {
        left: '#989898',
        right: '#faffd7',
      },
    },
    {
      id: 17,
      name: 'Science & Nature',
      icon: ScienceAndNature,
      backgroundColor: {
        left: '#60b4fc',
        right: '#cfccfa',
      },
    },
    {
      id: 18,
      name: 'Science: Computers',
      icon: ScienceComputers,
      backgroundColor: {
        left: '#FFEFBA',
        right: '#feecec',
      },
    },
    {
      id: 19,
      name: 'Science: Mathematics',
      icon: ScienceMathematics,
      backgroundColor: {
        left: '#85b8d8',
        right: '#ffd0d7',
      },
    },
    {
      id: 20,
      name: 'Mythology',
      icon: Mythology,
      backgroundColor: {
        left: '#e07bff',
        right: '#b99ea2',
      },
    },
    {
      id: 21,
      name: 'Sports',
      icon: Sports,
      backgroundColor: {
        left: '#a9a9e7',
        right: '#91EAE4',
      },
    },
    {
      id: 22,
      name: 'Geography',
      icon: Geography,
      backgroundColor: {
        left: '#d7d7d7',
        right: '#6895fc',
      },
    },
    {
      id: 23,
      name: 'History',
      icon: History,
      backgroundColor: {
        left: '#e6e9e8',
        right: '#9eebc7',
      },
    },
    {
      id: 24,
      name: 'Politics',
      icon: Politics,
      backgroundColor: {
        left: '#a2c6ff',
        right: '#4c8bb8',
      },
    },
    {
      id: 25,
      name: 'Art',
      icon: Art,
      backgroundColor: {
        left: '#ff58d3',
        right: '#ade1f9',
      },
    },
    {
      id: 26,
      name: 'Celebrities',
      icon: Celebrities,
      backgroundColor: {
        left: '#20b92f',
        right: '#dbff8d',
      },
    },
    {
      id: 27,
      name: 'Animals',
      icon: Animals,
      backgroundColor: {
        left: '#ffffff',
        right: '#feac39',
      },
    },
    {
      id: 28,
      name: 'Vehicles',
      icon: Vehicles,
      backgroundColor: {
        left: '#e6e9e8',
        right: '#ff7869',
      },
    },
    {
      id: 29,
      name: 'Entertainment: Comics',
      icon: EntertainmentComics,
      backgroundColor: {
        left: '#868686',
        right: '#ff9f89',
      },
    },
    {
      id: 30,
      name: 'Science: Gadgets',
      icon: ScienceGadgets,
      backgroundColor: {
        left: '#fdfdfd',
        right: '#6affb9',
      },
    },
    {
      id: 31,
      name: 'Entertainment: Japanese Anime & Manga',
      icon: EntertainmentAnimeManga,
      backgroundColor: {
        left: '#dfffad',
        right: '#49d393',
      },
    },
    {
      id: 32,
      name: 'Entertainment: Cartoon & Animations',
      icon: EntertainmentCartoons,
      backgroundColor: {
        left: '#ffffff',
        right: '#5bff71',
      },
    },
  ] as Category[],

  DIFFICULTY_LEVEL: [
    {
      id: 'easy',
      name: 'Easy',
      icon: EasyLevel,
      backgroundColor: {
        left: '#cdf3ff',
        right: '#43b7ff',
      },
    },
    {
      id: 'medium',
      name: 'Medium',
      icon: MediumLevel,
      backgroundColor: {
        left: '#a2fd62',
        right: '#f3ff4c',
      },
    },
    {
      id: 'hard',
      name: 'Hard',
      icon: HardLevel,
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
      icon: AnyType,
      backgroundColor: {
        left: '#5ffaff',
        right: '#c7e3ff',
      },
    },
    {
      id: 'multiple',
      name: 'Multiple choices',
      icon: MultipleChoice,
      backgroundColor: {
        left: '#fff75c',
        right: '#7bfc51',
      },
    },
    {
      id: 'boolean',
      name: 'True/False',
      icon: TrueFalse,
      backgroundColor: {
        left: '#ffffff',
        right: '#a7a7a7',
      },
    },
  ] as QuizType[],
} as const;
