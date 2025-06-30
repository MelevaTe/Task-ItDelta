import { type Comment } from "../../../Comment";

export interface Article {
	id: number;
	image: string;
}

export interface ArticleDetailsData {
	id: number;
	image: string;
	largeImage: string;
	comments: Comment[];
}
