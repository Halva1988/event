import SearchForm from "@/components/form/searchForm";
import H1 from "@/components/h1";
import Link from "next/link";

const popular: string[] = ["Санкт-Петербург", "Москва"];

export default function Home() {
	return (
		<main className="flex flex-col items-center px-3 pt-36 text-center">
			<H1>Find events around you</H1>
			<p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
				Browse more than{" "}
				<span className="text-accent font-bold italic underline">
					10,000 events
				</span>{" "}
				around you
			</p>

			<SearchForm />

			<section className="mt-4 flex gap-x-4 opacity-50">
				<p>Popular:</p>
				<div className="space-x-2 font-semibold">
					{popular.map((city) => (
						<Link key={city} href={`/events/${decodeURIComponent(city)}`}>
							{city}
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
