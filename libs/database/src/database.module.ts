import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from './entities';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './database/database-exception.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
      logging: ['error'],
      subscribers: [],
    }),
  ],
  providers: [
    DatabaseService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  exports: [DatabaseService],
})
export class DbLibraryModule {}
