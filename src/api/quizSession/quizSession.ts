import Cookies from 'js-cookie';
import { API_ROUTER } from 'constants/apiRoutes';
import { COOKIE_SETTINGS } from 'constants/cookieSettings';
import instance from 'libs/axios';

export default async function quizSession() {
  try {
    const currentToken = Cookies.get(COOKIE_SETTINGS.COOKIE_TOKEN_NAME);

    if (!currentToken) {
      const response = await instance.get(API_ROUTER.TOKEN, {
        params: {
          command: 'request',
        },
      });

      const newToken = response.data.token;

      Cookies.set(COOKIE_SETTINGS.COOKIE_TOKEN_NAME, newToken, {
        expires: COOKIE_SETTINGS.TOKEN_EXPIRATION_TIME,
      });

      return newToken;
    }

    return currentToken;
  } catch (error) {
    throw error;
  }
}
