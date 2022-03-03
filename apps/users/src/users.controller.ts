import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, AlowedGroups } from '@auth/auth/groups.guard';
import { UsersService } from './users.service';
import { User } from '@app/database/entities';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @AlowedGroups(['system'])
  @Get()
  async getHello(): Promise<User[]> {
    const users = await this.userService.listUsers();
    console.log(`UsersController >> getHello`,this.userService.getHello());
    return users;
  }
}
