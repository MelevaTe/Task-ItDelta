import { memo } from "react";
import headerImage from "@/shared/assets/images/header.jpg";
import Avatar from "@/shared/ui/Avatar/Avatar.tsx";

export const Navbar = memo(() => {
	return (
		<header className="w-full relative mb-30">
			<div className="w-full h-[192px]">
				<img
					src={headerImage}
					alt="Header image"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center gap-4 md:gap-10 ">
				<Avatar />
				<h3 className="font-bold text-black text-lg md:text-xl">
					Ricardo Cooper
				</h3>
			</div>
		</header>
	);
});
