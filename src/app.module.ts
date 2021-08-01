import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './controllers/users/users.controller';
import { Users } from './models/users.model';
// import ormConfig from './config/orm';

@Module({
  imports: [
    ConfigModule.forRoot(),

    // TypeOrmModule.forRoot({
    //   // @ts-ignore
    //   type: `${process.env.DB_CONNECTION}`,
    //   host: 'db',
    //   port: Number(`${process.env.DB_PORT}`),
    //   username: `${process.env.DB_USERNAME}`,
    //   password: `${process.env.DB_PASSWORD}`,
    //   database: `${process.env.DB_DATABASE}`,
    //   entities: [Users],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: 'postgres',
      host: process.env.PG_DB_HOST,
      port: Number(process.env.PG_DB_PORT),
      username: process.env.PG_DB_USERNAME,
      password: process.env.PG_DB_PASSWORD,
      database: process.env.PG_DB_DATABASE,
      synchronize: false,
      entities: [Users],
      subscribers: ['project2/*.subscriber.ts'],
      migrations: ['project2/migrations/*.ts'],
      cli: { migrationsDir: 'project2/migrations' },
    }),
    // TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
