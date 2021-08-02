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
import { Usuarios } from 'src/models/usuarios.model';
import { Repository } from 'typeorm';

import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserResponse } from 'src/api-doc/user.response';
import { UserDTO } from 'src/dto/user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(Usuarios)
    private UsuariosRepo: Repository<Usuarios>,
  ) {}

  @Get()
  async index(): Promise<Usuarios[]> {
    return await this.UsuariosRepo.find();
  }

  @ApiOkResponse({
    type: UserResponse,
  })
  @Get(':id')
  async show(@Param('id') id: string): Promise<Usuarios> {
    return await this.UsuariosRepo.findOneOrFail(id);
  }

  @ApiCreatedResponse({
    type: UserResponse,
  })
  @Post()
  async store(@Body(new ValidationPipe()) body: UserDTO): Promise<Usuarios> {
    const Usuarios = this.UsuariosRepo.create(body);
    return this.UsuariosRepo.save(Usuarios);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: UserDTO,
  ): Promise<Usuarios> {
    await this.UsuariosRepo.findOneOrFail(id);
    this.UsuariosRepo.update([id], body);
    return this.UsuariosRepo.findOneOrFail(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    await this.UsuariosRepo.findOneOrFail(id);
    await this.UsuariosRepo.delete(id);
  }
}
