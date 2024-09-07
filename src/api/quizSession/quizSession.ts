import axios from 'axios';
import Cookies from 'js-cookie';
import { API_ROUTER } from 'constants/apiRoutes';
import { COOKIE_SETTINGS } from 'constants/cookieSettings';

export default async function quizSession() {
  const currentToken = Cookies.get(COOKIE_SETTINGS.COOKIE_TOKEN_NAME);

  if (!currentToken) {
    try {
      const response = await axios.get(API_ROUTER.RETRIEVE_NEW_TOKEN);

      const newToken = response.data.token;

      Cookies.set(COOKIE_SETTINGS.COOKIE_TOKEN_NAME, newToken, {
        expires: COOKIE_SETTINGS.TOKEN_EXPIRATION_TIME,
      });

      return newToken;
    } catch (error) {
      throw error;
    }
  } else {
    return currentToken;
  }
}
