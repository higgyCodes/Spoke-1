exports.up = function(knex) {
  return knex.schema
    .alterTable("user_organization", table => {
      table.enu("temp_role", [
        "OWNER",
        "ADMIN",
        "SUPERVOLUNTEER",
        "TEXTER",
        "SUSPENDED"
      ]);
    })
    .then(() =>
      knex("user_organization")
        .update({
          temp_role: knex.raw("??", ["user_organization.role"])
        })
        .then(() =>
          knex.schema
            .table("user_organization", table => table.dropColumn("role"))
            .then(() =>
              knex.schema.table("user_organization", table =>
                table.renameColumn("temp_role", "role")
              )
            )
        )
    );
};

exports.down = function(knex) {
  return knex.schema
    .alterTable("user_organization", table => {
      table.string("temp_role");
    })
    .then(() =>
      knex("user_organization")
        .update({
          temp_role: knex.raw("??", ["user_organization.role"])
        })
        .then(() =>
          knex.schema
            .table("user_organization", table => table.dropColumn("role"))
            .then(() =>
              knex.schema.table("user_organization", table =>
                table.renameColumn("temp_role", "role")
              )
            )
        )
    );
};
