import { getSlugEvent } from "@/lib/db";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type EventsPageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: EventsPageProps): Promise<Metadata> {
	const { slug } = await params;
	const data = await getSlugEvent(slug);

	return {
		title: data?.name,
	};
}

const EventSlugPage = async ({ params }: EventsPageProps) => {
	const { slug } = await params;
	const eventsInCity = await getSlugEvent(slug);

	if (!eventsInCity) {
		return redirect("/not-found");
	}

	return (
		<main>
			<section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
				<Image
					src={eventsInCity.imageUrl}
					priority
					alt="bgImage"
					fill
					quality={1}
					sizes="(max-width: 1280px) 100vw, 1280px"
					className="object-cover blur-3xl z-0"
				/>

				<div className="z-1 relative flex flex-col lg:flex-row max-[400px]:px-10 gap-x-6">
					<Image
						src={eventsInCity.imageUrl}
						alt={eventsInCity.name}
						width={350}
						height={180}
						quality={100}
						className="rounded-xl border-2 border-white/30 object-cover"
					/>

					<div className="flex flex-col">
						<p className="text-md text-white/75 italic">
							{new Date(eventsInCity.date).toLocaleDateString("ru-RU", {
								weekday: "long",
								month: "long",
								day: "numeric",
							})}
						</p>
						<h1 className="text-2xl font-bold mb-2 mt-1 ">
							{eventsInCity.name}
						</h1>
						<span className="italic text-white/80">
							{eventsInCity.organizer}
						</span>
						<button className="bg-white/20 text-lg capitalize bg-blur rounded-md border-2 border-white/10 mt-5 lg:mt-auto w-[95w] py-2 max-[300px]:px-2 state-effects">
							Зарегистрироваться
						</button>
					</div>
				</div>
			</section>
			<section>
				<h2 className="text-center text-2xl font-bold mt-12">О мероприятии</h2>
				<p className="text-white/75 text-center italic mt-8">
					{eventsInCity.description}
				</p>
			</section>
			<section className="ml-12 mt-5">
				<h2 className="text-xl ">Место встречи:</h2>
				<p className="text-lg italic text-white/75">{eventsInCity.location}</p>
			</section>
		</main>
	);
};

export default EventSlugPage;
