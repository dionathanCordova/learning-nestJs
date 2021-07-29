import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { UserResponse } from 'src/api-doc/user.response';
import { UserDTO } from 'src/dto/user.dto';
import { Users } from 'src/Models/users.models';
import { Repository } from 'typeorm';

@Controller('users')
export class UserController {
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
    const Users = await this.UsersRepo.findOneOrFail(id);
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
