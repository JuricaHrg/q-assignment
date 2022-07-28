import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders home", () => {
  render(<Home />);

  const homeTitle = screen.getByText(/Hello human/i);
  expect(homeTitle).toBeInTheDocument();

  const buttonPosts = screen.getByText(/Show all posts/i);
  expect(buttonPosts).toBeInTheDocument();

  const buttonRandomPost = screen.getByText(/Surprise me/i);
  expect(buttonRandomPost).toBeInTheDocument();
});
