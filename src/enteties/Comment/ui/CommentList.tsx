import { memo } from "react";
import { CommentListItem } from "./CommentListItem.tsx";
import type { Comment } from "../model/types/comment.ts";

interface CommentListProps {
	comments?: Comment[];
	isLoading: boolean;
}

export const CommentList = memo(({ comments, isLoading }: CommentListProps) => {
	if (isLoading) {
		return (
			<div className="text-center py-8">
				<p>Загрузка данных о карточке...</p>
			</div>
		);
	}

	if (!comments) {
		return <div>Комментарии не загружены</div>;
	}

	if (comments.length === 0) {
		return <p className="text-gray-500">Комменатриев еще не оставлено</p>;
	}

	return (
		<>
			<p className="text-gray-700 text-sm/5">Comments</p>
			<ul className="mt-8">
				{comments.map((comment) => (
					<CommentListItem
						key={comment.id}
						comment={comment}
					/>
				))}
			</ul>
		</>
	);
});
