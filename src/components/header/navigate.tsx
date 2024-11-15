import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

type NavigateProps = {
	link: { name: string; href: string };
	activePathname: string;
};

const Navigate = ({ link, activePathname }: NavigateProps) => {	
	const isActive = activePathname === link.href;
	return (
		<li
			className={clsx(
				"hover:text-white flex items-center cursor-pointer relative transition",
				{
					"text-white": isActive,
					"text-white/50": !isActive,
				}
			)}
		>
			
			<Link href={link.href}>{link.name}</Link>

			{isActive && (
				<motion.div
					layoutId="underline"
					className="absolute bottom-0 h-1 w-full bg-accent"
				/>
			)}
		</li>
	);
};

export default Navigate;
