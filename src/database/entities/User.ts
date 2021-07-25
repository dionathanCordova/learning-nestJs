import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
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
  password: string;

  @Column()
  permissionNivel: string;

  @Column()
  image: string;

  @CreateDateColumn()
  condominio_id: string;
  created_at: string;
}
