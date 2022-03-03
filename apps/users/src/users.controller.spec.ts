import { DbLibraryModule } from '@app/database';
import { User } from '@app/database/entities';
import { AuthModule } from '@auth/auth';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [DbLibraryModule, TypeOrmModule.forFeature([User]), AuthModule],
    }).compile();

    userController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return an user containing the id 31', async () => {
      const users = await userController.getHello();
      expect(users.some(({ id }) => id === 31)).toBe(true);
    });
  });
});
