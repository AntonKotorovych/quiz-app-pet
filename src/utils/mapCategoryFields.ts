import {
  CategoryResponseItem,
  CREATE_QUIZ_STEPS_CONFIG,
  DEFAULT_CATEGORY_ID,
  MappedCategory,
} from 'constants/config/createQuizStepsConfig';

export const mapCategoryFields = (response: CategoryResponseItem[]): MappedCategory[] => {
  const defaultCategoryFields = CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[DEFAULT_CATEGORY_ID];

  const result = [
    { ...defaultCategoryFields, name: 'Any Category', id: DEFAULT_CATEGORY_ID },
  ];

  response.forEach(category => {
    const categoryMappedFields =
      CREATE_QUIZ_STEPS_CONFIG.CATEGORIES[category.id] || defaultCategoryFields;

    result.push({ ...category, ...categoryMappedFields });
  });

  return result;
};
