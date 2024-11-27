"use client";

// import { TEvent } from "@/lib/types";
import { TEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
	event: TEvent;
};

const MotionLink = motion(Link);

const EventCard = ({ event }: EventCardProps) => {
	const linkRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: linkRef,
		offset: ["0 1", "1.5 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	const shortDescription = event.description.slice(0, 80) + "...";

	return (
		<MotionLink
			className="flex-1 basis-80 h-[350px] max-w-[350px]"
			ref={linkRef}
			href={`/event/${event.slug}`}
			style={{
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				scale: scaleProgress,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				opacity: opacityProgress,
			}}
			initial={{ opacity: 0, scale: 0.8 }}
		>
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
						{new Date(event.date).toLocaleDateString("ru-RU", {
							day: "2-digit",
						})}
					</p>
					<p className="text-xs uppercase text-accent/70">
						{new Date(event.date).toLocaleDateString("ru-RU", {
							month: "short",
						})}
					</p>
				</section>
			</section>
		</MotionLink>
	);
};

export default EventCard;
