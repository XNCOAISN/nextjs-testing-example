import { sql } from "kysely";

import { kysely } from "@/lib/kysely";
import type { DB } from "@/lib/kysely";
import { InsertObject } from "kysely";

type TableName = "users";

export type CreateUserObjectOrList =
  | InsertObject<DB, TableName>
  | ReadonlyArray<InsertObject<DB, TableName>>;

export const createUsers = async (insert: CreateUserObjectOrList) => {
  return kysely.insertInto("users").values(insert).execute();
};

export const clearUsers = async () => {
  return sql`truncate table users;`.execute(kysely);
};

type UserPK = {
  id: string;
};

export const getUser = async ({ id }: UserPK) => {
  return kysely
    .selectFrom("users")
    .selectAll("users")
    .where("id", "=", id)
    .executeTakeFirst();
};
