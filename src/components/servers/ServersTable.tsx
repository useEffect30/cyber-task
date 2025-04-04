import { ServersProps } from "./servers.types";

const ServersTable = ({ servers }: ServersProps) => {
  const serversList = () => {
    return servers.map((server, index) => (
      <tr key={index}>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
          {server.name}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
          {server.distance}
        </td>
      </tr>
    ));
  };

  return (
    <div className="overflow-y-auto shadow rounded-lg h-full">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Distance (km)
            </th>
          </tr>
        </thead>
        <tbody>{serversList()}</tbody>
      </table>
    </div>
  );
};

export default ServersTable;
