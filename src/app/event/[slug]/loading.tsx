import Skeleton from "@/components/skeleton/skeleton";

const Loading = () => {
	return (
		<div className="flex flex-col items-center gap-y-4 pt-28">
			<Skeleton className="h-6 w-[550px]" />
			<Skeleton className="h-6 w-[400px]"/>
			<Skeleton className="h-6 w-[450px]"/>
		</div>
	);
};

export default Loading;
