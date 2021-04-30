import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Simios2faModule } from '@simios-dev/2fa';

@Module({
  imports: [Simios2faModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
