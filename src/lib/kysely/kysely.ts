import { CamelCasePlugin, Kysely, MysqlDialect } from "kysely";
import { createPool } from "mysql2";

import type { DB } from "@/lib/kysely/__generated__/types";

export const kysely = new Kysely<DB>({
  dialect: new MysqlDialect({
    pool: createPool({
      database: "test",
      host: "localhost",
      password: "password",
      port: 3308,
      user: "user",
    }),
  }),
  plugins: [new CamelCasePlugin()],
});
