import { Router } from 'express';
import fs from 'fs';

const router = Router();
interface LoadingRouter {
  loadIn(router: Router): Router;
}

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.ts') {
    import(`./${file}`).then((route: LoadingRouter) => {
      route.loadIn(router);
    });
  }
});

export default router;
