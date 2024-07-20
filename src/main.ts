import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as express from 'express';

import { Logger } from '@/shared/logger';
import { UnCaughtExceptionFilter } from '@/shared/filters';
import { TimeoutInterceptor } from '@/shared/interceptors';
import { ValidationPipe } from '@/shared/pipes';

import { AppModule } from './app.module';

/**
 *
 */
async function bootstrap () {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger()
  });
  app.enableCors();
  app.use(express.json({ limit: '200MB' }));
  app.use(helmet());
  app.useGlobalFilters(new UnCaughtExceptionFilter());
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));

  const swaggerConfig = new DocumentBuilder()
    .setTitle('HRMS')
    .setDescription('HRMS API description')
    .setVersion('1.0')
    .addTag('HRMS')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description:
          '[just text field] Please enter token in following format: Bearer <JWT>',
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header'
      },
      'access-token' // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
void bootstrap();
