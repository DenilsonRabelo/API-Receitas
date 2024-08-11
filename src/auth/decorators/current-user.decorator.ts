import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CreateUserDto } from '../../usuario/dto/create-user-dto';
import { AuthRequest } from '../model/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): CreateUserDto => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);