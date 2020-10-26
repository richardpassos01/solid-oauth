import { Request, Response } from 'express';
import UseCase from '@business/UserRole/use-cases/Fetch';

export default class FetchController {
  constructor(
    private useCase: UseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      userId,
    } = request.params;

    try {
      const userRoles = await this.useCase.execute(userId);

      return response.status(200).json(userRoles);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
