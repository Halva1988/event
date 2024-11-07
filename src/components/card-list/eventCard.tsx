import { TEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
	event: TEvent;
};

const EventCard = ({ event }: EventCardProps) => {
	return <section className="h-[350px] w-[450px]">
    <Image src={event.imageUrl} alt={event.name} width={450} height={350}/>
  </section>;
};

export default EventCard;
