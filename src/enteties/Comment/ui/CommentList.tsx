import { memo } from "react";
import { CommentListItem } from "./CommentListItem.tsx";
import type { Comment } from "../model/types/comment.ts";

interface CommentListProps {
	comments: Comment[];
}

export const CommentList = memo(({ comments }: CommentListProps) => {
	if (comments.length === 0) {
		return <p className="text-gray-500">Комменатриев еще не оставлено</p>;
	}

	return (
		<ul className="space-y-4">
			{comments.map((comment) => (
				<CommentListItem
					key={comment.id}
					comment={comment}
				/>
			))}
		</ul>
	);
});
