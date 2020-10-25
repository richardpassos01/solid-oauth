import { Router } from 'express';
import { application } from '@config';

export default function healthCheckRoutes(router: Router): void {
  router.get('/', (Request, Response) => Response.status(200).json({
    name: application.name,
    version: application.version,
    description: application.description,
    status: "it's alive",
    checked_in: new Date(),
  }));
}
