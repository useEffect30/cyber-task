import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useGetServersQuery } from "@/state/servers/serversApiSlice";
import { ThemeContext } from "@/context/ThemeProvider";
import { sortServers, handleLogout } from "./servers.deps";
import { SortField } from "./servers.types";
import ServersTable from "./ServersTable";
import ThemedButton from "../ui/Button";
import LoadingSpinner from "@/assets/loadingSpinner.svg";

const Servers = () => {
  const { data: servers = [], isLoading, error } = useGetServersQuery();
  const { toggle } = useContext(ThemeContext);
  const [sortField, setSortField] = useState<SortField>("name");

  const sortedServers = useMemo(
    () => sortServers(servers, sortField),
    [servers, sortField]
  );

  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <img src={LoadingSpinner} alt="loading spinner" />
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center">
        Error loading servers.
      </div>
    );

  return (
    <div className="p-8 rounded-md w-full h-screen overflow-hidden border]">
      <div className="flex items-center md:justify-between flex-wrap justify-center">
        <div>
          <h2
            className={` font-semibold text-2xl ${
              toggle ? "text-[#fa87b6]" : "text-[#ebf615]"
            }`}
          >
            Servers List
          </h2>
        </div>
        <div className="lg:space-x-2 md:pr-10">
          <ThemedButton fullWidth onClick={() => setSortField("name")}>
            Sort by Name
          </ThemedButton>
          <ThemedButton fullWidth onClick={() => setSortField("distance")}>
            Sort by Distance
          </ThemedButton>
          <ThemedButton
            fullWidth
            isLoading={isLoading}
            onClick={() => handleLogout(navigate)}
          >
            Logout
          </ThemedButton>
        </div>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-10 pt-2 h-full">
        <div className="overflow-y-auto shadow rounded-lg max-h-[calc(100vh-200px)]">
          <ServersTable servers={sortedServers} />
        </div>
      </div>
    </div>
  );
};

export default Servers;
