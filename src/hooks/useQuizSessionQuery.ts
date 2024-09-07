import { useQuery } from '@tanstack/react-query';
import quizSession from 'api/quizSession/quizSession';
import { COOKIE_SETTINGS } from 'constants/cookieSettings';

export const useQuizSessionQuery = () => {
  return useQuery({
    queryKey: [COOKIE_SETTINGS.COOKIE_TOKEN_NAME],
    queryFn: quizSession,
  });
};
