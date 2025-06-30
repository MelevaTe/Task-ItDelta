import { memo } from "react";
import { ArticleInfiniteList } from "../../ui/ArticleInfiniteList/ArticleInfiniteList";

const ArticlesPage = () => {
	return (
		<div>
			<ArticleInfiniteList />
		</div>
	);
};

export default memo(ArticlesPage);
