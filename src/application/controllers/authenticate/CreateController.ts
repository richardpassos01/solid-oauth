import { Request, Response } from 'express';
import UseCase from '@business/Authenticate/use-cases/Create';
import VerifyUserUseCase from '@business/User/use-cases/Verify';

export default class CreateController {
  constructor(
    private useCase: UseCase,
    private verifyUserUseCase: VerifyUserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      identifier,
      password,
    } = request.body;

    try {
      const user = await this.verifyUserUseCase.execute(identifier, password);

      const token = await this.useCase.execute(user);

      return response.status(201).send(token);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
