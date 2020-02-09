import 'module-alias/register';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import createDatabaseConnection from 'database/createConnection';

import { attachPublicRoutes } from 'routes';
import { addRespondToResponse } from 'middleware/response';
import { authenticateUser } from 'middleware/authentication';

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
    console.log('Database is connected!');
  } catch (err) {
    console.log(err);
  }
};

const initializeExpress = (): void => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());

  app.use(addRespondToResponse);

  attachPublicRoutes(app);

  app.use('/', authenticateUser);

  app.listen(process.env.PORT || 3000);
  console.log(`Server started on ${process.env.PORT || 3000} port`);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
