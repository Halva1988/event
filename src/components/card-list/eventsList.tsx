import { TEvent } from "@prisma/client";
import EventCard from "./eventCard";
import { getAllEvents } from "@/lib/db";

type EventsListProps = {
	city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const events: TEvent[] = await getAllEvents();
	 
	return (
		<section className="max-w-[1200px] flex flex-wrap gap-10 mt-10 justify-center px-[20px]">
			{events.filter((event) => city === "All" || event.city === city).map((event) => (
				<EventCard event={event} key={event.id}/>
			))}
		</section>
	);
};

export default EventsList;
