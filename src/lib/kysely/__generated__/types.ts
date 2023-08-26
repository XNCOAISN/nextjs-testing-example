import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Article = {
    id: string;
    title: string;
    body: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    authorId: string;
};
export type User = {
    id: string;
    name: string;
    description: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type DB = {
    articles: Article;
    users: User;
};
