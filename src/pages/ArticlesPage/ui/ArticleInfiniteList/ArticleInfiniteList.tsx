import { ArticleList } from "@/enteties/Article";
import { useGetArticlesQuery } from "@/pages/ArticlesPage/api/articlesapi.ts";

export const ArticleInfiniteList = () => {
	const { data: articles, isLoading, error } = useGetArticlesQuery();

	if (error) return <div>Ошибка: {error.toString()}</div>;

	return (
		<ArticleList
			isLoading={isLoading}
			articles={articles}
		/>
	);
};
