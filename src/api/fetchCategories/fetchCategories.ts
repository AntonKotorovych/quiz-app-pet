import { API_ROUTER } from 'constants/apiRoutes';
import { CategoryResponseItem } from 'constants/config/createQuizStepsConfig';
import instance from 'libs/axios';

export default async function fetchCategories(): Promise<CategoryResponseItem[]> {
  try {
    const { data } = await instance.get(API_ROUTER.CATEGORIES);
    return data.triviaCategories;
  } catch (error) {
    throw error;
  }
}
