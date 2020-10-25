import { Request, Response } from 'express';
import UseCase from '@business/UserRole/use-cases/Create';

export default class CreateController {
  constructor(
    private useCase: UseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      userId,
      roleId,
    } = request.body;

    try {
      const userRole = await this.useCase.execute({
        user_id: userId,
        role_id: roleId,
      });

      return response.status(201).send(userRole);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
