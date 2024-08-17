import { useQuery } from '@tanstack/react-query';
import { getUserAuth } from 'api/getUserAuth';
import { USERS } from 'constants/queryKeys';

export const useFetchUsersQuery = () => {
  return useQuery({ queryKey: [USERS], queryFn: getUserAuth });
};
