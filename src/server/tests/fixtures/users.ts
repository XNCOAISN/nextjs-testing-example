import { type InsertObject } from "kysely";

import type { DB } from "@/lib/kysely";

type TableName = "users";

export type UserFixtureObject = Partial<InsertObject<DB, TableName>>;

export const userFixture = (
  object: UserFixtureObject
): InsertObject<DB, TableName> => {
  return {
    id: "",
    description: "description",
    name: "User",
    ...object,
  };
};

export const userFixtures = (
  objects: UserFixtureObject[],
  defaultValues?: UserFixtureObject
): InsertObject<DB, TableName>[] => {
  return objects.map((object) => {
    return userFixture({ ...defaultValues, ...object });
  });
};
