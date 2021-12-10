import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {User} from '../../models/User';
import ServiceUserCRUD from './ServiceUserCRUD';

export default class ControllerUserCRUD {
  private useCase: ServiceUserCRUD;
  constructor(useCase: ServiceUserCRUD) {
    this.useCase = useCase;
  }

  async handleSaveUser(req: Request, res: Response): Promise<Response> {
    const user: User = req.body;
    try {
      await this.useCase.saveUser(user);
      return res.status(StatusCodes.CREATED).send();
    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message || 'Unexpected error',
      });
    }
  }

  async handleDeleteUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.uuid;
    try {
      await this.useCase.deleteUser(id);
      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: err.message || 'Unexpected error',
      });
    }
  }

  async handleUpdateUser(req: Request, res: Response): Promise<Response> {
    const user: User = req.body;
    const id = req.params.uuid;

    try {
      await this.useCase.updateUser(user, id);
      return res.status(StatusCodes.OK).send();
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: err.message || 'Unexpected error',
      });
    }
  }

  async handleFindUser(req: Request, res: Response): Promise<Response> {
    const id = req.query.id as string;
    try {
      const result =
        id === undefined ?
          await this.useCase.findAll() :
          await this.useCase.findById(id);
      return res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: err.message || 'Unexpected error',
      });
    }
  }

  async handleFindUserById(req: Request, res: Response): Promise<Response> {
    const id = req.params.uuid;
    try {
      const result = await this.useCase.findById(id);
      return res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
