import { prisma } from "@/server/db";
import { createUser } from "./createUser";

jest.mock("@/server/utils/createId", () => {
  return {
    createId: () => "1",
  };
});

describe("createUser", () => {
  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  test("createUser", async () => {
    const user = await createUser({
      name: "名前",
      description: "説明",
    });
    expect(user).toMatchObject({ id: "1", name: "名前" });
  });
});
