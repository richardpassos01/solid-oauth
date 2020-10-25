import { Request, Response } from 'express';
import UseCase from '@root/src/business/Authenticate/use-cases/Create';

export default class CreateController {
  constructor(
    private useCase: UseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
    } = request.body;

    try {
      const token = await this.useCase.execute({
        name,
        email,
      });

      return response.status(201).send(token);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
