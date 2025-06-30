import { memo } from "react";
import { ArticleDetails } from "@/enteties/Article";
import { AddCommentForm } from "@/features/addCommentForm/index.ts";

export interface LoginFormProps {
	onSuccess: () => void;
	ArticleId: number;
}

const ArticleViewerContent = memo((props: LoginFormProps) => {
	const { ArticleId } = props;

	return (
		<div>
			<ArticleDetails id={ArticleId} />
			<AddCommentForm articleId={ArticleId} />
		</div>
	);
});

export default ArticleViewerContent;
