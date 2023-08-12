import { prisma } from "@/server/db";

export type GetUserProps = {
  userId: string;
};

export const getUser = async ({ userId }: GetUserProps) => {
  return prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
};
