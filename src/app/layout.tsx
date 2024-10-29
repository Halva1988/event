import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Container from "@/components/container";

export const metadata: Metadata = {
	title: "Event Search",
	description: "Find the nearest event",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-zinc-900 text-white`}>
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}
