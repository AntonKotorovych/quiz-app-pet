import { StateValuesType } from 'hooks/useFormStore';
import databaseInstance from 'libs/axios';
import { fetchUsers } from './fetchUsers';

export async function postFormData(formData: StateValuesType) {
  try {
    const users = await fetchUsers();

    let isUserUnique = true;

    for (const key in users) {
      if (
        users[key].email === formData.email ||
        users[key].userName === formData.userName
      ) {
        isUserUnique = false;
        break;
      }
    }

    if (isUserUnique) {
      const postResponse = await databaseInstance.post('', formData);
      return postResponse;
    } else {
      return Promise.reject(
        new Error('User with this email or username already exists')
      );
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
