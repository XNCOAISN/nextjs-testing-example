import { clearUsers } from "@/server/tests/database/users";

import { createUser } from "./createUser";

jest.mock("@/server/utils/createId", () => {
  return {
    createId: () => "1",
  };
});

describe("createUser", () => {
  afterEach(async () => {
    await clearUsers();
  });

  test("basic", async () => {
    const userId = await createUser({
      name: "名前",
      description: "説明",
    });
    expect(userId).toBe("1");
  });

  test("returning", async () => {
    const user = await createUser(
      {
        name: "名前",
        description: "説明",
      },
      { returning: true }
    );
    expect(user).toMatchObject({ id: "1", name: "名前" });
  });
});
