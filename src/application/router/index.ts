import { Router } from 'express';
import fs from 'fs';

const router = Router();

fs.readdirSync(__dirname).forEach(async (file): Promise<void> => {
  if (file !== 'index.ts') {
    const routerFile = await import(`./${file}`);

    routerFile.loadIn(router);
  }
});

export default router;
