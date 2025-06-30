import { type FC, lazy } from "react";
import type { LoginFormProps } from "@/features/ArticleViewer/ui/ArticleViewerContent/ArticleViewerContent.tsx";

export const ArticleViewerContentAsync = lazy<FC<LoginFormProps>>(
	() => import("./ArticleViewerContent.tsx")
);
