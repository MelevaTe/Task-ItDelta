import { memo } from "react";
import type { Comment } from "../model/types/comment.ts";

interface CommentListItemProps {
	comment: Comment;
}

export const CommentListItem = memo(({ comment }: CommentListItemProps) => {
	return (
		<li className="flex mt-6">
			<p className="text-black text-sm/5">
				{comment.author}: {comment.text}
			</p>
		</li>
	);
});
