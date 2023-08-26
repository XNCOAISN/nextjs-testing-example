import { userFixtures } from "@/server/tests/fixtures/users";
import { getUser } from "./getUser";
import { clearUsers, createUsers } from "@/server/tests/database/users";

describe("getUser", () => {
  beforeAll(async () => {
    const users = userFixtures([{ id: "1", name: "User 1" }]);
    await createUsers(users);
  });

  afterAll(async () => {
    await clearUsers();
  });

  test("basic", async () => {
    const user = await getUser({ userId: "1" });
    expect(user).toMatchObject({ id: "1", name: "User 1" });
  });

  test("not found", async () => {
    const user = await getUser({ userId: "0" });
    expect(user).toBeUndefined();
  });
});
