import { Server } from "./servers.types";

export const sortServers = (
  servers: Server[],
  field: "name" | "distance"
): Server[] => {
  return [...servers].sort((a, b) => {
    if (field === "name") return a.name.localeCompare(b.name);
    return a.distance - b.distance;
  });
};

export const handleLogout = (navigate: (path: string) => void) => {
  localStorage.removeItem("token");
  navigate("/");
};
