import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './config/filters/entity-not-found.exception-filter';
import { QueryFailedExceptionFilter } from './config/filters/query-failed-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // error handler
  app.useGlobalFilters(
    new EntityNotFoundExceptionFilter(),
    new QueryFailedExceptionFilter(),
  );

  // documentacao
  const options = new DocumentBuilder()
    .setTitle('NestJs Api condominio')
    .setDescription('Documentação da aplicacao condominio')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
