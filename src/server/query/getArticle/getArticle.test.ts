import { articleFixtures } from "@/server/tests/fixtures/articles";
import { getArticle } from "./getArticle";
import {
  clearArticles,
  createArticles,
} from "@/server/tests/database/articles";

describe("getArticle", () => {
  beforeAll(async () => {
    const articles = articleFixtures([
      { id: "1", title: "Article 1" },
      { id: "2", title: "Article 2" },
    ]);
    await createArticles(articles);
  });

  afterAll(async () => {
    await clearArticles();
  });

  test("basic", async () => {
    const article = await getArticle({ articleId: "1" });
    expect(article).toMatchObject({ id: "1", title: "Article 1" });
  });

  test("not found", async () => {
    const article = await getArticle({ articleId: "0" });
    expect(article).toBeUndefined();
  });
});
