import EventCard from "./eventCard";
import { getAllEvents } from "@/lib/db";
import Pagination from "../pagination/pagination";

type EventsListProps = {
	city: string;
	page: string;
};

const EventsList = async ({ city, page }: EventsListProps) => {
	const {events, totalCount} = await getAllEvents(page);

	return (
		<section className="max-w-[1200px] flex flex-wrap gap-10 mt-10 justify-center px-[20px]">
			{events
				.filter((event) => city === "All" || event.city === city)
				.map((event) => (
					<EventCard event={event} key={event.id} />
				))}

			<Pagination page={page} totalCount={totalCount} />
		</section>
	);
};

export default EventsList;
