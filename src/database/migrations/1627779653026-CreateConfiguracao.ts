import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateConfiguracao1627779653026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'configuracoes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'taxa_agua_basica',
            type: 'double precision',
          },
          {
            name: 'taxa_agua_intermediaria',
            type: 'double precision',
          },
          {
            name: 'taxa_agua_avancada',
            type: 'double precision',
          },
          {
            name: 'valor_mensal_diaria',
            type: 'double precision',
          },
          {
            name: 'valor_reserva_mensal',
            type: 'double precision',
          },
          {
            name: 'valor_m3_gas',
            type: 'double precision',
          },
          {
            name: 'ano',
            type: 'int',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'qtd_apartamentos',
            type: 'int',
          },
          {
            name: 'nome_condominio',
            type: 'varchar',
          },
          {
            name: 'cidade_condominio',
            type: 'varchar',
          },
          {
            name: 'estado_condominio',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'varchar',
          },
          {
            name: 'categiria_despesa_agua',
            type: 'enum',
            enum: ['simples', 'rateio'],
          },
          {
            name: 'sindico_isento',
            type: 'boolean',
          },
          {
            name: 'payment_plan',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
          {
            name: 'updater_id',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('configuracoes');
  }
}

// @Column({ type: 'decimal', precision: 22, scale: 2,default: 0.00 })
// bday: number;
