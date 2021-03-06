import { Request, Response } from 'express';
import UseCase from '@business/User/use-cases/Create';

export default class CreateController {
  constructor(
    private useCase: UseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      username,
      document,
      password,
    } = request.body;

    try {
      const user = await this.useCase.execute({
        name,
        email,
        username,
        document,
        password,
      });

      return response.status(201).send(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
