import { type InsertObject } from "kysely";

import type { DB } from "@/lib/kysely";

type TableName = "articles";

export type ArticleFixtureObject = Partial<InsertObject<DB, TableName>>;

export const articleFixture = (
  object: ArticleFixtureObject
): InsertObject<DB, TableName> => {
  return {
    id: "",
    title: "Title",
    body: "body",
    authorId: "",
    ...object,
  };
};

export const articleFixtures = (
  objects: ArticleFixtureObject[],
  defaultValues?: ArticleFixtureObject
): InsertObject<DB, TableName>[] => {
  return objects.map((object) => {
    return articleFixture({ ...defaultValues, ...object });
  });
};
