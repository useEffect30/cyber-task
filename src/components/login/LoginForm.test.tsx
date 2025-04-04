import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeContext } from "@/context/ThemeProvider";
import LoginForm from "./LoginForm";

vi.mock("@/state/servers/serversApiSlice", () => ({
  useLoginMutation: () => [
    vi.fn(() => Promise.resolve({ unwrap: () => ({ token: "mock-token" }) })),
    { error: null, isLoading: false },
  ],
}));

const renderWithProviders = () =>
  render(
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ toggle: false, toggleFunction: () => {} }}
      >
        <LoginForm />
      </ThemeContext.Provider>
    </BrowserRouter>
  );

test("renders username and password inputs", () => {
  renderWithProviders();

  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test("allows typing into inputs", () => {
  renderWithProviders();

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);

  fireEvent.change(usernameInput, { target: { value: "user" } });
  fireEvent.change(passwordInput, { target: { value: "pass" } });

  expect(usernameInput).toHaveValue("user");
  expect(passwordInput).toHaveValue("pass");
});
