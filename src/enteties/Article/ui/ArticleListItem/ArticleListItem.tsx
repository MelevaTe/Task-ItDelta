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
		<div
			onClick={onShowModal}
			className="flex flex-col h-full "
		>
			<div className="relative flex-1 overflow-hidden rounded-lg cursor-pointer max-w-110 max-h-54 mb-2">
				<img
					src={article.image}
					alt={"Картинка"}
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<p className="text-gray-900 text-sm/5">ID: {article.id}</p>

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
