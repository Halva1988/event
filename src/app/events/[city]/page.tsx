import EventsList from "@/components/card-list/eventsList";
import H1 from "@/components/h1";
import { TEvent } from "@/lib/types";

const API_KEY = process.env.API_KEY;
const BIN_ID = process.env.BIN_ID;

type EventsPageProps = {
	params: Promise<{ city: string }>;
};

const EventsPage = async ({ params }: EventsPageProps) => {
	const headers = new Headers({
		"X-Master-Key": API_KEY ?? "",
		"X-Bin-Meta": "false",
	});

	const response = await fetch(
		`https://api.jsonbin.io/v3/b/${BIN_ID}/latest/`,
		{
			method: "GET",
			headers,
		}
	);

	const data = await response.json();
	const events: TEvent[] = data.events;

	const resolvedParams = await params;
	let { city } = resolvedParams;

	city = decodeURIComponent(city);
	let newCity = city;

	if (city.charAt(city.length - 1) === "а") {
		newCity = newCity.slice(0, -1) + "е";
	} else if (city.charAt(city.length - 1) === "ь") {
		newCity = newCity.slice(0, -1) + "и";
	} else {
		newCity = newCity + "е";
	}

	return (
		<main className="flex flex-col items-center min-h-[110vh] px-5 py-24 text-center">
			<H1>
				{city === "all"
					? "All Events"
					: `Мероприятия в ${
							newCity.charAt(0).toUpperCase() + newCity.slice(1)
					  }`}
			</H1>

			<EventsList events={events} city={city} />
		</main>
	);
};

export default EventsPage;
