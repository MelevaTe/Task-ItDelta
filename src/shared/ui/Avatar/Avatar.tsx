import { memo } from "react";
import avatarImage from "@/shared/assets/images/Avatar.jpg";

interface AvatarProps {
	className?: string;
}

const Avatar = memo(({ className }: AvatarProps) => {
	return (
		<div
			className={`min-w-32 min-h-32 w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md flex-shrink-0 ${className || ""}`}
		>
			<img
				src={avatarImage}
				alt="User avatar"
				className="w-full h-full object-cover"
			/>
		</div>
	);
});

export default Avatar;
