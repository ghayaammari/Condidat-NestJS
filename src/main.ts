import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    // sta5demt middelware Validation pipe bech yintercepi les requete lkoll w yvalidehom 
    new ValidationPipe({
      transform: true,
    }),
  );
    await app.listen(3000);
}
bootstrap();
