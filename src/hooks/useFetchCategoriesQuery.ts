import { useQuery } from '@tanstack/react-query';
import fetchCategories from 'api/fetchCategories';
import { CATEGORIES_FROM_OPENTDB_QUERY_KEY } from 'constants/constants';

export const useFetchCategoriesQuery = () => {
  return useQuery({
    queryKey: [CATEGORIES_FROM_OPENTDB_QUERY_KEY],
    queryFn: fetchCategories,
  });
};
