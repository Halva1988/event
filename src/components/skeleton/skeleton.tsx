type TSkeletonProps = {
	className?: string;
};

const Skeleton = ({ className }: TSkeletonProps) => {
	return <div className={`animate-pulse rounded-md bg-white/5 ${className}`} />;
};

export default Skeleton;
