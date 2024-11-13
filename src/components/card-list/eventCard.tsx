import { TEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
	event: TEvent;
};

const EventCard = ({ event }: EventCardProps) => {
	return <section className="h-[350px] max-w-[350px] bg-white/[3%] rounded-xl flex flex-col flex-1 basis-80 items-center justify-center overflow-hidden">
    <Image src={event.imageUrl} alt={event.name} width={350} height={250} className="h-[60%] object-fit"/>
    <div className="flex flex-col gap-y-2 justify-center items-center flex-1">
      <h2 className="text-2xl font-semibold">{event.name}</h2>
      <p className="italic text-white/75">{event.location}</p>
      <p className="text-sm text-white/50 mt-4">{event.description}</p>
    </div>
  </section>;
};

export default EventCard;
