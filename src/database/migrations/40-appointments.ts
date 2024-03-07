import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Appointments1709211299836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table (
                {
                    name: "appointments", 
                    columns: [ 
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment"
                        },
                        {
                            name: "appointment_date",
                            type: "timestamp",
                            default: "now()",
                            onUpdate: "now()",
                        },
                        {
                            name: "users_id",
                            type: "int",
                            isNullable: true,
                        },
                        {
                            name: "services_id",
                            type: "int",
                            isNullable: true,
                        },
                    ],
                    foreignKeys: [
                        {
                            columnNames: ["users_id"],
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            onDelete: "CASCADE"
                        },
                        {
                            columnNames: ["services_id"],
                            referencedTableName: "services",
                            referencedColumnNames: ["id"],
                            onDelete: "CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }

}
