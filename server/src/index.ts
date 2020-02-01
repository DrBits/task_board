import 'module-alias/register';
import 'dotenv/config';
import express from 'express';

import createDatabaseConnection from 'database/createConnection';

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
  app.use(express.json());
  app.use(express.urlencoded);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
