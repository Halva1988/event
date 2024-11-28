import Link from "next/link";

type PaginationProps = {
	page: string;
	totalCount: number;
};

const btnStyles =
	"text-white px-5 py-1 state-effects rounded-md opacity-75 bg-white/5 hover:opacity-100";

const Pagination = ({ page, totalCount }: PaginationProps): JSX.Element => {
	return (
		<section className="flex justify-between w-[100%]">
			{page <= "1" ? (
				<div />
			) : (
				<Link
					href={`/events/all?page=${Number(page) - 1}`}
					className={btnStyles}
				>
					Назад
				</Link>
			)}
			{totalCount > 6 * Number(page) ? (
				<Link
					href={`/events/all?page=${Number(page) + 1}`}
					className={btnStyles}
				>
					Вперёд
				</Link>
			) : 
				<div />
			}
		</section>
	);
};

export default Pagination;
