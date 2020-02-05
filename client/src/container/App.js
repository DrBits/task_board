import React from 'react';

import Toast from 'components/Toast';

import BaseStyles from 'styles/baseStyles';

import Routes from '../router';

const App = () => (
  <>
    <BaseStyles />
    <Toast />
    <Routes />
  </>
);

export default App;
