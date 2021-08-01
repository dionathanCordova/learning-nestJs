import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/models/users.model';
import { Repository } from 'typeorm';

import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserResponse } from 'src/api-doc/user.response';
// import { Users } from 'src/Models/users.models';
import { UserDTO } from 'src/dto/user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(Users)
    private UsersRepo: Repository<Users>,
  ) {}

  @Get()
  async index(): Promise<Users[]> {
    return await this.UsersRepo.find();
  }

  @ApiOkResponse({
    type: UserResponse,
  })
  @Get(':id')
  async show(@Param('id') id: string): Promise<Users> {
    return await this.UsersRepo.findOneOrFail(id);
  }

  @ApiCreatedResponse({
    type: UserResponse,
  })
  @Post()
  async store(@Body(new ValidationPipe()) body: UserDTO): Promise<Users> {
    const Users = this.UsersRepo.create(body);
    return this.UsersRepo.save(Users);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Users): Promise<Users> {
    await this.UsersRepo.findOneOrFail(id);
    this.UsersRepo.update([id], body);
    return this.UsersRepo.findOneOrFail(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    await this.UsersRepo.findOneOrFail(id);
    await this.UsersRepo.delete(id);
  }
}
