import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';

@Module({
  imports: [UsersModule, ErrorHandlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
