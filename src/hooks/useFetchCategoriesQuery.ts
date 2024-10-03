import { useQuery } from '@tanstack/react-query';
import fetchCategories from 'api/fetchCategories';
import {
  CategoryResponseItem,
  MappedCategory,
} from 'constants/config/createQuizStepsConfig';
import { CATEGORIES_FROM_OPENTDB_QUERY_KEY } from 'constants/constants';

interface UseFetchCategoriesQueryOptions {
  select?: (data: CategoryResponseItem[]) => MappedCategory[];
}

export const useFetchCategoriesQuery = (options: UseFetchCategoriesQueryOptions) => {
  return useQuery({
    queryKey: [CATEGORIES_FROM_OPENTDB_QUERY_KEY],
    queryFn: fetchCategories,
    ...options,
  });
};
