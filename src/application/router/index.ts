import { Router, Express } from 'express';
import authenticationRoutes from './routes/authentication';
import healthCheckRoutes from './routes/healthCheck';
import userRoutes from './routes/user';
import userRoleRoutes from './routes/userRole';

const registerRoutes = (server: Express): void => {
  const router = Router();

  healthCheckRoutes(router);
  authenticationRoutes(router);
  userRoutes(router);
  userRoleRoutes(router);

  server.use(router);
};

export default registerRoutes;
