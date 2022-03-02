import { Module } from '@nestjs/common';
import { DbLibraryModule } from '@app/database';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@auth/auth';
import { User } from '@app/database/entities';

@Module({
  imports: [
    DbLibraryModule,
    TypeOrmModule.forFeature([User]),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
