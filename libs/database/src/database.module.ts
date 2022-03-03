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
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
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
