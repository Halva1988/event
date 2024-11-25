import { TEvent } from "@/lib/types";
import EventCard from "./eventCard";
import { getData } from "@/helpers/getData";

type EventsListProps = {
	city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const events: TEvent[] = await getData();
	return (
		<section className="max-w-[1200px] flex flex-wrap gap-10 mt-10 justify-center px-[20px]">
			{events.filter((event) => city === "All" || event.city === city).map((event) => (
				<EventCard event={event} key={event.id}/>
			))}
		</section>
	);
};

export default EventsList;
