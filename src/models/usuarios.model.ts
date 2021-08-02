import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity('usuarios')
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  apartamento: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  permission_nivel: number;

  @Column()
  image: string;

  @Column()
  condominio_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: string;
}
