import H1 from "@/components/h1";

type EventsPageProps = {
	params: Promise<{ city: string }>;
};

const EventsPage = async ({ params }: EventsPageProps) => {
	const resolvedParams = await params;
	const { city } = resolvedParams;

	return (
		<main className="flex flex-col items-center min-h-[110vh] px-5 py-24 text-center">
			<H1>
				{city === "all"
					? "All Events"
					: `Events In ${city.charAt(0).toUpperCase() + city.slice(1)}`}
			</H1>
		</main>
	);
};

export default EventsPage;
