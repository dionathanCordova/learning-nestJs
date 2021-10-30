import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppConfigModule } from './config/api/config.module';
import { DatabaseProviderModule } from './providers/database/provider.module';
import { ModelsModule } from './modules/module.modules';
import { APP_FILTER } from '@nestjs/core';
import { QueryFailedExceptionFilter } from './config/filters/query-failed-exception-filter';
import { EntityNotFoundExceptionFilter } from './config/filters/entity-not-found.exception-filter';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigModule, DatabaseProviderModule, ModelsModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: QueryFailedExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: EntityNotFoundExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {}
