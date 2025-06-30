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
			<div className="flex items-center gap-2">
				<input
					type="text"
					placeholder="Введите текст комменатария"
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={handleKeyDown}
					className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					disabled={isLoading}
				/>
				<button
					onClick={handleSubmit}
					disabled={isLoading || !text.trim()}
					className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
						isLoading ? "opacity-50 cursor-not-allowed" : ""
					}`}
				>
					{isLoading ? <p>Отправка...</p> : <p>Отправить</p>}
				</button>
			</div>

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
