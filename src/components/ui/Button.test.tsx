import { render, screen } from "@testing-library/react";
import ThemedButton from "./Button";

test("render button text", () => {
  render(<ThemedButton>Click Me</ThemedButton>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
