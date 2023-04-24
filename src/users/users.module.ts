import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';

@Module({
  imports: [ErrorHandlerModule],
  controllers: [UsersController],
  providers: [UsersService, Logger],
})
export class UsersModule {}
