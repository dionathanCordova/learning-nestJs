import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './controllers/users/users.controller';
import { Usuarios } from './models/usuarios.model';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.DB_CONNECTION,
      host: process.env.DB_HOST,
      port: Number(`${process.env.DB_PORT}`),
      username: `${process.env.DB_USERNAME}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_DATABASE}`,
      migrations: ['project2/migrations/*.ts'],
      cli: { migrationsDir: 'project2/migrations' },
      entities: [Usuarios],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuarios]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
