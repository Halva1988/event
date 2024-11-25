import { TEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
	event: TEvent;
};

const EventCard = ({ event }: EventCardProps) => {
	const shortDescription = event.description.slice(0, 80) + "...";

	return (
    <Link className="flex-1 basis-80 h-[350px] max-w-[350px]" href={`/event/${event.slug}`}>
		<section className="relative w-full h-full bg-white/[3%] rounded-xl flex flex-col items-center justify-center overflow-hidden state-effects">
			<Image
				src={event.imageUrl}
				alt={event.name}
				width={350}
				height={250}
				className="h-[60%] object-cover"
			/>
			<div className="flex flex-col gap-y-2 justify-center items-center flex-1">
				<h2 className="text-lg font-semibold">{event.name}</h2>
				<p className="text-sm italic text-white/75">{event.location}</p>
				<p className="text-xs px-1 text-white/50 mt-4">{shortDescription}</p>
			</div>
			<section className="absolute flex flex-col items-center justify-center font-bold left-[12px] top-[12px] w-[45px] h-[45px] bg-black/70 rounded-md">
				<p className="text-xl -mb-[5px]">
					{new Date(event.date).toLocaleDateString("ru-RU", { day: "2-digit" })}
				</p>
				<p className="text-xs uppercase text-accent/70">
					{new Date(event.date).toLocaleDateString("ru-RU", { month: "short" })}
				</p>
			</section>
		</section>
    </Link>
	);
};

export default EventCard;
