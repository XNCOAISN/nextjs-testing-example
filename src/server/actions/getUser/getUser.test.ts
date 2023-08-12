import { prisma } from "@/server/db";

import { getUser } from "./getUser";

describe("getUser", () => {
  beforeEach(async () => {
    await prisma.user.createMany({
      data: [
        {
          id: "1",
          name: "User 1",
          description: "description",
        },
        {
          id: "2",
          name: "User 2",
          description: "description",
        },
      ],
    });
  });

  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  test("getUser", async () => {
    const user = await getUser({ userId: "1" });
    expect(user).toMatchObject({ id: "1", name: "User 1" });
  });
});
