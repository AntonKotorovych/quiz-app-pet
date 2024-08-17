import axios from 'axios';
import { DATABASE_USERS } from 'constants/database';

const databaseInstance = axios.create({
  baseURL: DATABASE_USERS,
});

export default databaseInstance;
