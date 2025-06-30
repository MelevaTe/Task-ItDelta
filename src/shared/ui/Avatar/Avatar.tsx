import { memo } from "react";
import avatarImage from "@/shared/assets/images/Avatar.jpg";

const Avatar = memo(() => {
	return (
		<div className="min-w-[128px] min-h-[128px] w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md flex-shrink-0">
			<img
				src={avatarImage}
				alt="User avatar"
				className="w-full h-full object-cover"
			/>
		</div>
	);
});

export default Avatar;
