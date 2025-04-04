import { Server } from "@/components/servers/servers.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serversApiSlice = createApi({
  reducerPath: "servers",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://playground.tesonet.lt/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/tokens",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
    }),
    getServers: builder.query<Server[], void>({
      query: () => "/servers",
    }),
  }),
});

export const { useLoginMutation, useGetServersQuery } = serversApiSlice;
