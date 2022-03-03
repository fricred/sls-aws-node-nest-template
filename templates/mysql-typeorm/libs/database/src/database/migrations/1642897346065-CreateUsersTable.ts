import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1642897346065 implements MigrationInterface {
  db = process.env.TYPEORM_DATABASE;
  table = 'USERS';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`${this.db}\`.\`${this.table}\` (
            \`id\` INT NOT NULL AUTO_INCREMENT,
            \`sub_cognito_id\` VARCHAR(45) NOT NULL,
            \`name\` VARCHAR(200) NOT NULL,
            \`phone\` VARCHAR(45) NOT NULL,
            \`email\` VARCHAR(200) NOT NULL,
            \`pay_rate\` DOUBLE NULL,
            \`home_address\` VARCHAR(500) NOT NULL,
            \`status_id\` INT NOT NULL,
            \`type_id\` INT NOT NULL,
            \`created_at\` DATE NOT NULL,
            \`creator_user_id\` VARCHAR(300) NOT NULL,
            \`updated_at\` DATE NULL,
            \`modifier_user_id\` VARCHAR(300) NULL,
            \`date_invited\` DATETIME NULL,
            \`date_registered\` DATETIME NULL,
            \`last_login\` DATETIME NULL,
            PRIMARY KEY (\`id\`)
            )
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`${this.db}\`.\`${this.table}\``);
  }
}
