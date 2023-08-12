import { User } from "@prisma/client";

import { prisma } from "@/server/db";
import { createId } from "@/server/utils";

export type CreateUserProps = Pick<User, "name" | "description">;

export const createUser = async ({ name, description }: CreateUserProps) => {
  const data = {
    id: createId(),
    name,
    description,
  };
  return prisma.user.create({ data });
};
