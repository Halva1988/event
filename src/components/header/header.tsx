import Link from "next/link";
import Logo from "../logo/logo";

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "All Events",
		href: "/events",
	},
];

const Header = () => {
	return (
		<header className="text-lg flex items-center justify-between px-3 md:px-5 h-14 border-b border-white/20 ">
			<Logo />
			<nav>
				<ul className="flex gap-x-5 text-sm">
					{links.map((link, index) => (
						<li
							key={index}
							className="text-white/50 hover:text-white cursor-pointer transition"
						>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
