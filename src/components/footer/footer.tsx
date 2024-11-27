import Link from "next/link";

const links = [
	{
		name: "Terms & Conditions",
		href: "/terms",
	},
	{
		name: "Privacy Policy",
		href: "/privacy",
	},
];

const Footer = () => {
	return (
		<footer className="mt-auto text-sm flex items-center justify-between px-3 md:px-5 h-16 border-t border-white/20 opacity-75">
			<small className="">
				&copy; The copyright belongs to{" "}
				<a
					className="underline"
					target="_blank"
					href="https://halva1988.github.io/myPortfolio/"
				>
					Halva.
				</a>{" "}
				All rights reserved.
			</small>
			<nav>
				<ul className="flex gap-x-5 sm:gap-x-8">
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
