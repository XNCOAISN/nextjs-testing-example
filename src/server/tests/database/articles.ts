import { sql } from "kysely";

import { kysely } from "@/lib/kysely";
import type { DB } from "@/lib/kysely";
import { InsertObject } from "kysely";

type TableName = "articles";

export type CreateArticleObjectOrList =
  | InsertObject<DB, TableName>
  | ReadonlyArray<InsertObject<DB, TableName>>;

export const createArticles = async (insert: CreateArticleObjectOrList) => {
  return kysely.insertInto("articles").values(insert).execute();
};

export const clearArticles = async () => {
  return sql`truncate table articles;`.execute(kysely);
};

type ArticlePK = {
  id: string;
};

export const getArticle = async ({ id }: ArticlePK) => {
  return kysely
    .selectFrom("articles")
    .selectAll("articles")
    .where("id", "=", id)
    .executeTakeFirst();
};
