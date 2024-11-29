import EventCard from "./eventCard";
import { getAllEvents, getCityEvents } from "@/lib/db";
import Pagination from "../pagination/pagination";

type EventsListProps = {
	city: string;
	page: string;
};

const EventsList = async ({ city, page }: EventsListProps) => {
	const { events, totalCount } = await getAllEvents(page);
	const { cityEvents, totalCountCity } = await getCityEvents(city, page);

	return (
		<section className="max-w-[1200px] flex flex-wrap gap-10 mt-10 justify-center px-[20px]">
			{(city === "All" ? events : cityEvents).map((event) => (
				<EventCard event={event} key={event.id} />
			))}
			<Pagination
				page={page}
				totalCount={city === "All" ? totalCount : totalCountCity}
				city={city}
			/>
		</section>
	);
};

export default EventsList;
