import { memo, useCallback, useState } from "react";
import { ArticleViewerModal } from "src/features/ArticleViewer";
import type { Article } from "../../model/types/article.ts";

interface ArticleListItemProps {
	article: Article;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { article } = props;
	const [isArticleModal, setIsArticleModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsArticleModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsArticleModal(true);
	}, []);

	if (!article) {
		return <div className="text-red-500">Картинка не найдена</div>;
	}

	return (
		<div className="mb-6">
			<div
				onClick={onShowModal}
				className="cursor-pointer group"
			>
				<div className="relative w-full h-[216px] max-w-[431px] overflow-hidden rounded-lg shadow-md">
					<img
						src={article.image}
						alt={"Картинка"}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>

				<div className="mt-3">
					<p className="text-gray-500 text-sm mt-1">
						ID: {article.id}
					</p>
				</div>
			</div>

			{isArticleModal && (
				<ArticleViewerModal
					isOpen={isArticleModal}
					onClose={onCloseModal}
					ArticleId={article.id}
				/>
			)}
		</div>
	);
});
