import { memo } from "react";
import type { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
	articles?: Article[];
	isLoading?: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles, isLoading } = props;

	if (isLoading) {
		return (
			<div>
				<div>Идет загрузка...</div>
			</div>
		);
	}

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                gap-8
                items-center justify-items-stretch
                p-4"
		>
			{articles?.length ? (
				articles.map((article) => (
					<ArticleListItem
						article={article}
						key={article.id}
					/>
				))
			) : (
				<div className="col-span-full text-center py-10">
					Картинки отсутсвуют
				</div>
			)}
		</div>
	);
});
