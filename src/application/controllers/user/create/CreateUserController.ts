import { Request, Response } from 'express';
import CreateUserUserCase from '@business/User/use-cases/create/CreateUserUseCase';

export default class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUserCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
    } = request.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
