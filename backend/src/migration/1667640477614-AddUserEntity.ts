import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserEntity1667640477614 implements MigrationInterface {
    name = 'AddUserEntity1667640477614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "modified_photo"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" ADD "modified_photo" character varying`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "photo" character varying`);
    }

}
