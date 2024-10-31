"use client";

import Logo from "../logo/logo";
import { usePathname } from "next/navigation";
import Navigate from "./navigate";

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "All Events",
		href: "/events/all",
	},
];

const Header = () => {
	const activePathname = usePathname();

	return (
		<header className="text-lg flex items-center justify-between px-3 md:px-5 h-14 border-b border-white/20 ">
			<Logo />
			<nav className="h-full">
				<ul className="flex gap-x-5 h-full text-sm">
					{links.map((link, index) => (
						<Navigate key={index} link={link} activePathname={activePathname} />
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
