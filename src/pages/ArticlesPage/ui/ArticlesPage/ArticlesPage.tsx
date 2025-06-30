import { memo } from "react";
import { ArticleInfiniteList } from "../../ui/ArticleInfiniteList/ArticleInfiniteList";

const ArticlesPage = () => {
	return (
		<div className="mt-50">
			<ArticleInfiniteList />
		</div>
	);
};

export default memo(ArticlesPage);
