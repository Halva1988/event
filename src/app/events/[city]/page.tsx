import EventsList from "@/components/card-list/eventsList";
import H1 from "@/components/h1";
import { getCityInPrepositionalCase } from "@/helpers/getCityInPrepositionalCase";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type EventsPageProps = {
	params: Promise<{ city: string }>;
	searchParams: { page: string };
};

export async function generateMetadata({ params }: EventsPageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const { newCity, city } = getCityInPrepositionalCase(resolvedParams);

	return {
		title: `${city === "All" ? "Все мероприятия" : `Мероприятия в ${newCity}`}`,
	};
}

const EventsPage = async ({ params, searchParams: searchParamsPromise }: EventsPageProps) => {
	const searchParams = await searchParamsPromise;
	const resolvedParams = await params;
	const { newCity, city } = getCityInPrepositionalCase(resolvedParams);
	const page = searchParams.page ?? "1";
	
	
	if (!newCity && city !== "All") {
		return notFound();
	};
	
	return (
		<main className="flex flex-col items-center min-h-[110vh] px-5 py-24 text-center">
			<H1>{city === "All" ? "Все мероприятия" : `Мероприятия в ${newCity}`}</H1>

			<Suspense fallback={<Loading />}>
				<EventsList city={city} page={page} />
			</Suspense>
		</main>
	);
};

export default EventsPage;