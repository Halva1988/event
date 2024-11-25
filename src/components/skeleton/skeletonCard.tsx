import Skeleton from "./skeleton";

const SkeletonCard = () => {
	return (
		<div className="flex flex-col gap-y-2 mt-4">
			<Skeleton className="h-24 w-40 rounded-2xl" />
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	);
};

export default SkeletonCard;
