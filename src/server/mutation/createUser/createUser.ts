// import { prisma } from "@/server/db";
import { createId } from "@/server/utils";
import { User, kysely } from "@/lib/kysely";
import { Selectable } from "kysely";

export type CreateUserProps = Pick<User, "name" | "description">;

export type CreateUserOptions<TReturning extends boolean = false> = {
  returning: TReturning;
};

export type CreateUserResponse<T extends boolean> = T extends true
  ? Selectable<User>
  : string;

export const createUser = async <TReturning extends boolean = false>(
  { name, description }: CreateUserProps,
  options?: CreateUserOptions<TReturning>
): Promise<CreateUserResponse<TReturning>> => {
  const userId = createId();
  await kysely
    .insertInto("users")
    .values({ id: userId, name, description })
    .execute();

  if (options?.returning) {
    return kysely
      .selectFrom("users")
      .selectAll("users")
      .where("id", "=", userId)
      .executeTakeFirstOrThrow() as Promise<CreateUserResponse<TReturning>>;
  }

  return userId as CreateUserResponse<TReturning>;
};
