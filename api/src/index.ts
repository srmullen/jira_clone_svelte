import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import { authenticateUser } from './middleware/authentication';
import { attachPublicRoutes, attachPrivateRoutes } from './routes';

function createDatabaseConnection() {
  console.log('connecting to db');
}

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
  } catch (err) {
    console.log(err);
  }
}

const initializeExpress = (): void => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  attachPublicRoutes(app);

  app.use('/', authenticateUser);

  attachPrivateRoutes(app);

  app.listen(process.env.PORT || 3001, () => {
    console.log('App listening on port 3001')
  });
}

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
}

initializeApp();