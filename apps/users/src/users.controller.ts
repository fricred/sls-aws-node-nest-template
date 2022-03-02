import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, AlowedGroups } from '@auth/auth/groups.guard';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @AlowedGroups(['system'])
  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
