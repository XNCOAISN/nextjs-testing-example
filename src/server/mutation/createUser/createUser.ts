import { Selectable } from "kysely";

import { User, kysely } from "@/lib/kysely";
import { createId } from "@/server/utils";
import { validate } from "@/server/utils/validate";

import { CreateUserSchema, createUserSchema } from "./createUserSchema";

export type CreateUserProps = CreateUserSchema;

export type CreateUserOptions<TReturning extends boolean = false> = {
  returning: TReturning;
};

export type CreateUserResponse<T extends boolean> = T extends true
  ? Selectable<User>
  : string;

export const createUser = async <TReturning extends boolean = false>(
  props: CreateUserProps,
  options?: CreateUserOptions<TReturning>
): Promise<CreateUserResponse<TReturning>> => {
  validate(props, createUserSchema);
  const { name, description } = props;

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
