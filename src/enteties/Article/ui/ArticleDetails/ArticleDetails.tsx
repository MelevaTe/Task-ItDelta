import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { memo } from "react";
import type { ArticleDetailsData } from "@/enteties/Article/model/types/article.ts";

interface ArticleDetailsProps {
	article?: ArticleDetailsData;
	isLoading: boolean;
	error?: FetchBaseQueryError | SerializedError | undefined;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { article, isLoading, error } = props;

	if (isLoading) {
		return (
			<div className="text-center py-8">
				<p>Загрузка данных о карточке...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-red-500 text-center py-8">
				<p>Произошла ошибка при загрузке данных</p>
			</div>
		);
	}

	if (article) {
		return (
			<div className=" mx-auto bg-white rounded-lg overflow-hidden mb-6">
				{article.largeImage && (
					<div className="overflow-hidden w-100 h-100">
						<img
							src={article.largeImage}
							alt={"Article image"}
							className="w-full h-full object-cover rounded-md mb-6"
						/>
					</div>
				)}
			</div>
		);
	}
});
