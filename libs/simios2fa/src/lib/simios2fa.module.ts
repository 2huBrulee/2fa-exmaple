import { Module } from '@nestjs/common';
import { Simios2faService } from './simios2fa.service';

@Module({
  controllers: [],
  providers: [Simios2faService],
  exports: [Simios2faService],
})
export class Simios2faModule {}
