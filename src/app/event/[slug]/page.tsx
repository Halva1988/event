import { getData } from "@/helpers/getData";
import Image from "next/image";

type EventsPageProps = {
	params: Promise<{ slug: string }>;
};

const EventSlugPage = async ({ params }: EventsPageProps) => {
	const { slug } = await params;

	const data = await getData();

	const eventsInCity = data.filter((event) => event.slug === slug);
	console.log(eventsInCity);

	return (
		<main>
			<section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
				<Image
					src={eventsInCity[0].imageUrl}
					alt="bgImage"
					fill
					quality={20}
					sizes="(max-width: 1280px) 100vw, 1280px"
					className="object-cover blur-3xl z-0"
					priority
				/>

				<div className="z-1 relative flex flex-col lg:flex-row gap-x-6">
					<Image
						src={eventsInCity[0].imageUrl}
						alt={eventsInCity[0].name}
						width={350}
						height={180}
            className="rounded-xl border-2 border-white/30 object-cover"
					/>

					<div className="flex flex-col">
						<p className="text-md text-white/75 italic">
							{new Date(eventsInCity[0].date).toLocaleDateString("ru-RU", {
								weekday: "long",
								month: "long",
								day: "numeric",
							})}
						</p>
						<h1 className="text-2xl font-bold mb-2 mt-1 ">{eventsInCity[0].name}</h1>
						<p className=" text-xl text-white/75">{eventsInCity[0].location}</p>
						<button className="bg-white/20 text-lg capitalize bg-blur rounded-md border-2 border-white/10 mt-5 lg:mt-auto w-[95w] py-2 hover:scale-105 focus:scale-105 active:scale-[1.02] transition">Зарегистрироваться</button>
					</div>
				</div>
			</section>
			<div></div>
		</main>
	);
};

export default EventSlugPage;
