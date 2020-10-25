import { Request, Response } from 'express';
import FetchUseCase from '@business/User/use-cases/fetch/FetchUseCase';

export default class FetchController {
  constructor(
    private fetchUseCase: FetchUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
    } = request.params;

    try {
      const user = await this.fetchUseCase.execute({
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
