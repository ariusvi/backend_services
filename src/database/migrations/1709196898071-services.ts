import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Services1709196898071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table (
                {
                    name: "services", 
                    columns: [ 
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment"
                        },
                        {
                            name: "serice_name",
                            type: "varchar",
                            length: "255"
                        },
                        {
                            name: "description",
                            type: "varchar",
                            length: "1000"
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
