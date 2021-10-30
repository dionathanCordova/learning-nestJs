import { DatabaseConfigModule } from 'src/config/database/config.module';
import { DatabaseConfigService } from 'src/config/database/config.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      useFactory: async (databaseConfigService: DatabaseConfigService) => ({
        type: 'mysql',
        host: databaseConfigService.host,
        port: databaseConfigService.port,
        username: databaseConfigService.username,
        password: databaseConfigService.password,
        database: databaseConfigService.database,
        entities: ['./dist/modules/**/entities/*.entity.js'],
        migrations: ['./dist/database/migrations/*.js'],
        cli: { migrationsDir: './src/database/migrations' },
        retryAttempts: 1,
        requestTimeout: 30000,
        options: { enableArithAbort: true },
        synchronize: false,
        logging: process.env.NODE_ENV !== 'production',
      }),
      inject: [DatabaseConfigService],
    }),
  ],
})
export class DatabaseProviderModule {}
