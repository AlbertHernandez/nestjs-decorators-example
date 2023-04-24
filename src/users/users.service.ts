import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LogResponse } from '../decorators/log-response.decorator';
import { HandleError } from '../decorators/handle-error.decorator';
import { ErrorHandlerService } from '../error-handler/error-handler.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersLogger: Logger,
    private readonly usersErrorHandlerService: ErrorHandlerService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  @LogResponse()
  findAll() {
    return `This action returns all users`;
  }

  @LogResponse()
  @HandleError()
  async findOne(id: number) {
    throw new Error('Custom error!');
    return `This action returns a #${id} user`;
  }

  // Example logger without decorator
  update(id: number, updateUserDto: UpdateUserDto) {
    const response = `This action updates a #${id} user`;
    this.usersLogger.log(
      `[${this.constructor.name} - update] Response: ${response}`,
    );
    return response;
  }

  // Example error handler without decorator
  remove(id: number) {
    try {
      throw new Error('Custom error');
      return `This action removes a #${id} user`;
    } catch (error) {
      if (error instanceof Error) {
        this.usersErrorHandlerService.handle(error);
      }
      throw error;
    }
  }
}
