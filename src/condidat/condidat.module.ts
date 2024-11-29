import { Module } from '@nestjs/common';
import { CondidatService } from './condidat.service';
import { CondidatController } from './condidat.controller';

@Module({
  controllers: [CondidatController],
  providers: [CondidatService],
})
export class CondidatModule {}
