import { Logger, Module } from '@nestjs/common';
import { ErrorHandlerService } from './error-handler.service';

@Module({
  providers: [ErrorHandlerService, Logger],
  exports: [ErrorHandlerService],
})
export class ErrorHandlerModule {}
