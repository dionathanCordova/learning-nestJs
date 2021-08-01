import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity('users')
export class Users {
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
  permissionNivel: number;

  @Column()
  image: string;

  @Column()
  condominio_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: string;
}
