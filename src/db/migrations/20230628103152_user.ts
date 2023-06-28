import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id", { useBinaryUuid: true, primaryKey: true });
    table.string("user_name", 255).notNullable();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("isAdmin");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user");
}
