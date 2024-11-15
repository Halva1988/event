import EventsList from "@/components/card-list/eventsList";
import H1 from "@/components/h1";
import { getCityInPrepositionalCase } from "@/helpers/getCityInPrepositionalCase";
import { getData } from "@/helpers/getData";

type EventsPageProps = {
	params: Promise<{ city: string }>;
};

const EventsPage = async ({ params }: EventsPageProps) => {
	const resolvedParams = await params;
	const { newCity, city } = getCityInPrepositionalCase(resolvedParams);	
	
	const data = await getData();

	return (
		<main className="flex flex-col items-center min-h-[110vh] px-5 py-24 text-center">
			<H1>
				{city === "all"
					? "Все мероприятия"
					: `Мероприятия в ${
							newCity.charAt(0).toUpperCase() + newCity.slice(1)
					  }`}
			</H1>

			<EventsList events={data} city={city} />
		</main>
	);
};

export default EventsPage;
