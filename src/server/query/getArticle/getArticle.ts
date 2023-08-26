import { Selectable } from "kysely";

import { Article, DB, User } from "@/lib/kysely";
import { kysely } from "@/lib/kysely/kysely";

export type GetArticleProps = {
  articleId: string;
};

export type GetArticleResponse = Selectable<Article> | undefined;

export const getArticle = async ({
  articleId,
}: GetArticleProps): Promise<GetArticleResponse> => {
  return kysely
    .selectFrom("articles")
    .selectAll("articles")
    .where("articles.id", "=", articleId)
    .executeTakeFirst();
};
