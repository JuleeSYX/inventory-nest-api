import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import authenticate from './middleware/swagger-auth.middleware';
import * as swaggerUi from 'swagger-ui-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('Inventory API')
  .setDescription('The API for Inventory')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  app.use('/docs', authenticate, swaggerUi.serve, swaggerUi.setup(document));

  await app.listen(3000);
}
bootstrap();
