// Modal.tsx

import type { ReactNode } from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Portal from "../Portal/Portal";

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose, lazy } = props;

	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeHandler();
			}
		},
		[closeHandler]
	);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		return () => {
			if (timerRef.current !== null) {
				clearTimeout(timerRef.current);
			}
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [onKeyDown]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal element={document.getElementById("app") ?? document.body}>
			<div
				className={`
          fixed z-[10] top-0 right-0 bottom-0 left-0 flex items-center justify-center
          transition-opacity duration-300 ease-out
          ${isOpen && !isClosing ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          ${className || ""}
        `}
			>
				{/* Overlay */}
				<div
					className="absolute inset-0 bg-black/60"
					onClick={closeHandler}
				/>

				{/* Content wrapper with scroll */}
				<div
					className={`
            relative z-[10] 
            max-w-[60%] max-h-[90vh] overflow-y-auto
            p-5 rounded-lg
            bg-white
            transform transition-transform duration-300 ease-out
            ${isClosing ? "scale-[0.2]" : "scale-100"}
          `}
					onClick={onContentClick}
				>
					{children}
				</div>
			</div>
		</Portal>
	);
};
