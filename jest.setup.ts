import { kysely } from "@/lib/kysely";
import "@testing-library/jest-dom/extend-expect";

afterAll(async () => {
  await kysely.destroy();
});
