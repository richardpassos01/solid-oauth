import express from 'express';
import registerRoutes from '@application/router';

const app = express();

app.use(express.json());

registerRoutes(app);

export default app;
