import { Selectable } from "kysely";

import { User } from "@/lib/kysely";
import { kysely } from "@/lib/kysely/kysely";

export type GetUserProps = {
  userId: string;
};

export type GetUserResponse = Selectable<User> | undefined;

export const getUser = async ({
  userId,
}: GetUserProps): Promise<GetUserResponse> => {
  return kysely
    .selectFrom("users")
    .selectAll("users")
    .where("id", "=", userId)
    .executeTakeFirst();
};
