import { TEvent } from "@/lib/types";
import EventCard from "./eventCard";

type EventsListProps = {
	events: TEvent[];
	city: string;
};

const EventsList = ({ events, city }: EventsListProps) => {
	return (
		<section>
			{events
				.filter((event) => event.city === city)
				.map((event) => (
					<EventCard event={event} key={event.id}/>
				))}
		</section>
	);
};

export default EventsList;
