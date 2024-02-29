import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1709219435610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table (
                {
                    name: "users", 
                    columns: [ 
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment"
                        },
                        {
                            name: "first_name",
                            type: "varchar",
                            length: "255"
                        },
                        {
                            name: "last_name",
                            type: "varchar",
                            length: "255"
                        },
                        {
                            name: "email",
                            type: "varchar",
                            length: "255"
                        },
                        {
                            name: "password_hash",
                            type: "varchar",
                            length: "255"
                        },
                        {
                            name: "roles_id",
                            type: "int",
                            isNullable: true,
                        },
                    ],
                    foreignKeys: [
                        {
                            columnNames: ["roles_id"],
                            referencedTableName: "roles",
                            referencedColumnNames: ["id"],
                            onDelete: "CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
