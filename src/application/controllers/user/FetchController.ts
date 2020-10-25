import { Request, Response } from 'express';
import FetchUseCase from '@business/User/use-cases/Fetch';

export default class FetchController {
  constructor(
    private fetchUseCase: FetchUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      identifierValue,
      identifierType,
    } = request.query;

    try {
      const user = await this.fetchUseCase.execute(
        identifierValue,
        identifierType,
      );

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error',
      });
    }
  }
}
