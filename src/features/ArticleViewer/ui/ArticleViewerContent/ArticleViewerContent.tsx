import { memo } from "react";
import { ArticleDetails } from "@/enteties/Article";
import { useGetArticleDetailsQuery } from "@/enteties/Article/api/articleApi.ts";
import { CommentList } from "@/enteties/Comment";
import { AddCommentForm } from "@/features/addCommentForm/index.ts";

export interface LoginFormProps {
	onSuccess: () => void;
	ArticleId: number;
}

const ArticleViewerContent = memo((props: LoginFormProps) => {
	const { ArticleId } = props;
	const {
		data: article,
		isLoading,
		error,
	} = useGetArticleDetailsQuery(ArticleId);

	if (!article) {
		return <div>Карточка не найдена</div>;
	}

	return (
		<div>
			<ArticleDetails
				article={article}
				isLoading={isLoading}
				error={error}
			/>
			<AddCommentForm articleId={article.id} />
			<CommentList
				comments={article.comments}
				isLoading={isLoading}
			/>
		</div>
	);
});

export default ArticleViewerContent;
