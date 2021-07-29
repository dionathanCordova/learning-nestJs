import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  telefone: string;

  @ApiProperty()
  apartamento: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ type: Number, description: 'Level of permision of user' })
  permissionNivel: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  condominio_id: number;
}
