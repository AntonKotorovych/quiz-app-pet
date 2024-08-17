import { StateValuesType } from 'hooks/useFormStore';
import databaseInstance from 'libs/axios';

type Users = {
  [key: string]: StateValuesType;
};

export async function fetchUsers(): Promise<Users> {
  try {
    const response = await databaseInstance.get('');
    return response.data;
  } catch (error) {
    throw error;
  }
}
