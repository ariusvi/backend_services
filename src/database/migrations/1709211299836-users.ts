import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1709211299836 implements MigrationInterface {

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
                            length: "255",
                            isNullable: false,
                            isUnique: true
                        },
                        {
                            name: "password_hash",
                            type: "varchar",
                            length: "255",
                            isNullable: false,
                        },
                        {
                            name: "is_active",
                            type: "boolean",
                            default: "true",
                        },
                        {
                            name: "roles_id",
                            type: "int",
                            default: 1
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
