import { Suspense } from "react";
import { ArticleViewerContentAsync } from "@/features/ArticleViewer/ui/ArticleViewerContent/ArticleViewerContent.async.ts";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal/Modal.tsx";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
	ArticleId: number;
}

export const ArticleViewerModal = ({
	className,
	isOpen,
	onClose,
	ArticleId,
}: LoginModalProps) => (
	<Modal
		className={classNames("", {}, [className])}
		isOpen={isOpen}
		onClose={onClose}
		lazy
	>
		<Suspense fallback={""}>
			<ArticleViewerContentAsync
				onSuccess={onClose}
				ArticleId={ArticleId}
			/>
		</Suspense>
	</Modal>
);
