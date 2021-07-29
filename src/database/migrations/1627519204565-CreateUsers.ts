import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1627519204565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
          {
            name: 'apartamento',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'text',
          },
          {
            name: 'permissionNivel',
            type: 'int',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'condominio_id',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
