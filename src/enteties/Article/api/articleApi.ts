import { rtkApi } from "@/shared/api/rtkApi";
import type { ArticleDetailsData } from "../model/types/article";

export const articleApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleDetails: build.query<ArticleDetailsData, number>({
			query: (id) => `/image/${id}`,
			providesTags: ["ArticleDetails"],
		}),
	}),
});

export const { useGetArticleDetailsQuery } = articleApi;
