import { render, screen } from "@testing-library/react";
import ServersTable from "./ServersTable";
import { Server } from "./servers.types";

const mockServers: Server[] = [
  { name: "Cyber", distance: 10 },
  { name: "Care", distance: 10 },
];

test("renders a list of servers", () => {
  render(<ServersTable servers={mockServers} />);

  expect(screen.getByText("Cyber")).toBeInTheDocument();
  expect(screen.getByText("Care")).toBeInTheDocument();

  const distanceElements = screen.getAllByText(/10/);
  expect(distanceElements).toHaveLength(2);
});
