import { Request } from 'express';
import { CreateUserDto } from '../../usuario/dto/create-user-dto';

export interface AuthRequest extends Request {
  user: CreateUserDto;
}