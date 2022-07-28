import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

test("renders home", () => {
  render(<Loading />);

  const loadingSpinner = screen.getByRole(/status/i);
  expect(loadingSpinner).toBeInTheDocument();
});
