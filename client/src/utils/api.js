import axios from 'axios';
import { createBrowserHistory } from 'history';

import toast from './toast';
import { objectToQueryString } from './url';
import { getStoredAuthToken, removeStoredAuthToken } from './authToken';

const history = createBrowserHistory();

const defaults = {
  baseURL: process.env.API_URL || 'http://localhost:3000',
  headers: () => ({
    'Content-Type': 'application/json',
    Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

const api = (method, url, variables) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
        if (error.response?.data?.error?.code === 'INVALID_TOKEN') {
          removeStoredAuthToken();
          history.push('/authenticate');
        } else {
          reject(error.response.data.error);
        }
        reject(defaults.error);
      },
    );
  });

const optimisticUpdate = async (url, { updateFields, currentFields, setLocalData }) => {
  try {
    setLocalData(updateFields);
    await api('put', url, updateFields);
  } catch (err) {
    setLocalData(currentFields);
    toast.error(err);
  }
};

export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('pathc', ...args),
  delete: (...args) => api('delete', ...args),
  optimisticUpdate,
};
