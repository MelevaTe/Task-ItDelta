import type { Article } from "@/enteties/Article";
import { rtkApi } from "@/shared/api/rtkApi";

export const articlesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticles: build.query<Article[], void>({
			query: () => "/images",
			providesTags: ["Articles"],
		}),

		addArticleComment: build.mutation<
			void,
			{ articleId: number; comment: string }
		>({
			query: ({ articleId, comment }) => ({
				url: `/image/${articleId}/comments`,
				method: "POST",
				body: { comment },
			}),
			invalidatesTags: ["Articles"],
		}),
	}),
});

export const { useGetArticlesQuery, useAddArticleCommentMutation } =
	articlesApi;
