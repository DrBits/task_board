import * as authentication from 'controllers/authentication';

export const attachPublicRoutes = (app: any): void => {
  app.post('/authentication/guest', authentication.createGuestAccount);
};
