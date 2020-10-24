import { Request, Response } from 'express';
import FetchUserUseCase from '@business/User/use-cases/fetch/FetchUserUseCase';

export default class FetchUserController {
  constructor(
    private fetchUserUseCase: FetchUserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
    } = request.params;

    try {
      const user = await this.fetchUserUseCase.execute({
        id: `${id}`,
      });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
