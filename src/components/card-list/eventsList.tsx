import { TEvent } from "@/lib/types";
import EventCard from "./eventCard";

type EventsListProps = {
	events: TEvent[];
	city: string;
};

const EventsList = ({ events, city }: EventsListProps) => {
	return (
		<section className="max-w-[1100px] flex flex-wrap gap-10 mt-5 justify-center px-[20px]">
			{events
				.filter((event) => event.city === city)
				.map((event) => (
					<EventCard event={event} key={event.id}/>
				))}
		</section>
	);
};

export default EventsList;
