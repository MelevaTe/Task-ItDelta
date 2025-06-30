import { memo } from "react";
import type { Comment } from "../model/types/comment.ts";

interface CommentListItemProps {
	comment: Comment;
}

export const CommentListItem = memo(({ comment }: CommentListItemProps) => {
	return (
		<li className="border-b pb-4">
			<p className="font-medium text-gray-800">{comment.author}</p>
			<p className="text-gray-600 mt-1">{comment.text}</p>
		</li>
	);
});
