import axios from 'axios';
import Cookies from 'js-cookie';

export default async function quizSession() {
  const token = Cookies.get('quiz_token');

  if (!token) {
    try {
      const response = await axios.get(
        'https://opentdb.com/api_token.php?command=request'
      );

      Cookies.set('quiz_token', response.data.token, { expires: 0.25 });
    } catch (error) {
      throw error;
    }
  } else {
    return;
  }
}
