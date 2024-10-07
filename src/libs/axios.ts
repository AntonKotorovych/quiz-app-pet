import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { OPENTDB_API } from 'constants/API';

const instance = applyCaseMiddleware(
  axios.create({
    baseURL: OPENTDB_API,
  })
);

export default instance;
