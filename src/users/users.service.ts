import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LogResponse } from '../decorators/log-response.decorator';
import { HandleError } from '../decorators/handle-error.decorator';

@Injectable()
export class UsersService {
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
