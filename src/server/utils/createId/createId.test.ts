import { createId } from "./createId";

jest.mock("nanoid", () => {
  return {
    nanoid: (size: number) => {
      return "x".repeat(size);
    },
  };
});

describe("createId", () => {
  test("length=16 (default)", () => {
    const id = createId();
    expect(id).toHaveLength(16);
  });

  test("length=10", () => {
    const id = createId({ length: 10 });
    expect(id).toHaveLength(10);
  });
});
