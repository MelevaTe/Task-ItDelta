import { memo } from "react";
import { useGetArticleDetailsQuery } from "@/enteties/Article/api/articleApi.ts";
import { CommentList } from "@/enteties/Comment/index.ts";

interface ArticleDetailsProps {
	id: number;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { id } = props;

	const { data: article, isLoading, error } = useGetArticleDetailsQuery(id);

	if (isLoading) {
		return (
			<div className="text-center py-8">
				Загрузка данных о карточке...
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-red-500 text-center py-8">
				Ошибка:{" "}
				{"status" in error ? error.status : "Неизвестная ошибка"}
			</div>
		);
	}

	if (article) {
		return (
			<div className="max-w-3xl mx-auto p-6 bg-white rounded-lg ">
				{article.largeImage && (
					<img
						src={article.largeImage}
						alt={"Article image"}
						className="w-full h-auto rounded-md mb-6"
					/>
				)}
				<div className="mt-8">
					<h2 className="text-xl font-semibold mb-4">Комменатрии</h2>
					<CommentList comments={article.comments} />
				</div>
			</div>
		);
	}
});
