import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  apartamento: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  permission_nivel: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telefone: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  condominio_id: number;

  @ApiProperty()
  created_at: Date;
}
