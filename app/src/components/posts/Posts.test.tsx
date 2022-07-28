import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

test("renders posts", () => {
  render(<Posts />);

  const postsTitle = screen.getByText(/Posts/i);
  expect(postsTitle).toBeInTheDocument();
});
