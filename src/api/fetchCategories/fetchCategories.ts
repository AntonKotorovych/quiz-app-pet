import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';

interface CategoryMappingItem {
  id: number;
  name: string;
}

export default async function fetchCategories(): Promise<CategoryMappingItem[]> {
  try {
    const { data } = await instance.get(API_ROUTER.CATEGORIES);
    return data.triviaCategories;
  } catch (error) {
    throw error;
  }
}
