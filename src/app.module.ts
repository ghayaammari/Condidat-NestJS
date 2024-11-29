import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CondidatModule } from './condidat/condidat.module';

@Module({
  imports: [CondidatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
