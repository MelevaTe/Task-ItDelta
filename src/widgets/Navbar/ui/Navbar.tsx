import { memo } from "react";
import MailIcon from "@/shared/assets/icons/Mail.svg?react";
import PhoneIcon from "@/shared/assets/icons/Phone.svg?react";
import headerImage from "@/shared/assets/images/header.jpg";
import Avatar from "@/shared/ui/Avatar/Avatar.tsx";

export const Navbar = memo(() => {
	return (
		<header className="flex flex-col w-full items-center relative">
			<div className="w-full h-[192px] mb-7">
				<img
					src={headerImage}
					alt="Header image"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="flex items-end ml-25 min-w-0">
				<div className="flex flex-1 min-w-0 gap-2 md:gap-4 lg:gap-70">
					<h3 className="font-bold text-gray-900 text-xl md:text-2xl truncate min-w-0">
						Ricardo Cooper
					</h3>
					<div className="flex flex-shrink-0 gap-2 md:gap-4">
						<button className="flex items-center bg-white px-3 py-1 md:px-4 md:py-2 text-gray-700 text-sm rounded-md whitespace-nowrap">
							<MailIcon className="w-4 h-4 md:w-5 md:h-5" />
							<span>message</span>
						</button>
						<button className="flex items-center bg-white px-3 py-1 md:px-4 md:py-2 text-gray-700 text-sm rounded-md whitespace-nowrap">
							<PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
							<span>call</span>
						</button>
					</div>
				</div>
			</div>
			<Avatar className="absolute top-32 left-[10%] max-md:top-64 max-md:left-72 max-sm:left-48" />
		</header>
	);
});
