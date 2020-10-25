import { Request, Response } from 'express';
import UseCase from '@root/src/business/Authenticate/use-cases/Refresh';

export default class RefreshController {
  constructor(
    private useCase: UseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      refreshToken,
    } = request.body;

    try {
      const token = await this.useCase.execute(refreshToken);

      return response.status(201).send(token);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
