import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'utils/api';
import toast from 'utils/toast';
import { getStoredAuthToken, storeAuthToken } from 'utils/authToken';
import Loader from 'components/Loader';

const Authenticate = () => {
  const history = useHistory();

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        const { authToken } = await api.post('/authentication/guest');
        storeAuthToken(authToken);
        history.push('/');
      } catch (error) {
        toast.error(error);
      }
    };

    if (!getStoredAuthToken()) {
      createGuestAccount();
    }
  }, [history]);

  return <Loader />;
};

export default Authenticate;
