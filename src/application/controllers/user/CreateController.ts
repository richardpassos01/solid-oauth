import { Request, Response } from 'express';
import CreateUserCase from '@root/src/business/User/use-cases/Create';

export default class CreateController {
  constructor(
    private createUseCase: CreateUserCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
    } = request.body;

    try {
      const user = await this.createUseCase.execute({
        name,
        email,
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
