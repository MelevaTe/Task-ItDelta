import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://test-backend.itdelta.agency/api",
	}),
	tagTypes: ["Articles", "ArticleDetails"],
	endpoints: () => ({}),
});
