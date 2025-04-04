export type ServersProps = {
  servers: Server[];
};

export type Server = {
  name: string;
  distance: number;
};

export type SortField = "name" | "distance";
