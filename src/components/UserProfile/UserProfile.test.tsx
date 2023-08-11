import { render, screen } from "@testing-library/react";

import { UserProfile } from ".";

test("show name", () => {
  const user = { name: "名前", description: "説明" };
  render(<UserProfile user={user} />);
  expect(screen.getByText("名前")).toBeInTheDocument();
});
