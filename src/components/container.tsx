const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex flex-col max-w-7xl mx-auto min-h-screen bg-white/[3%]">{children}</div>;
};

export default Container;
