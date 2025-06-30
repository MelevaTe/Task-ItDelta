import React, { memo, useState } from "react";
import { useAddArticleCommentMutation } from "@/pages/ArticlesPage/api/articlesapi.ts";

interface AddCommentFormProps {
	articleId: number;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { articleId } = props;
	const [text, setText] = useState("");
	const [addComment, { isLoading, error }] = useAddArticleCommentMutation();

	const handleSubmit = async () => {
		if (!text.trim()) return;

		try {
			await addComment({ articleId, comment: text }).unwrap();
			setText("");
		} catch (error) {
			console.error("Ошибка при отправке комментария:", error);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<div className={`flex flex-col gap-2`}>
			<div className="flex flex-col items-start gap-2 mb-6">
				<p className="text-gray-700 font-medium text-sm/5">Comment</p>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={handleKeyDown}
					className="w-full flex-1 px-4 py-2 min-h-30 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
					disabled={isLoading}
				/>
				<p className="text-gray-500 text-sm/5">
					Write a few sentences about the photo
				</p>
			</div>
			<button
				onClick={handleSubmit}
				disabled={isLoading || !text.trim()}
				className={`px-4 py-2 bg-indigo-600 rounded-md text-white text-sm/5 ${
					isLoading ? "opacity-50 cursor-not-allowed" : ""
				}`}
			>
				{isLoading ? "Отправка..." : "Отправить"}
			</button>

			{error && (
				<div className="text-red-500 text-sm">
					<p className="text-red-500">
						Ошибка при отправке комментария
					</p>
				</div>
			)}
		</div>
	);
});

export default AddCommentForm;
