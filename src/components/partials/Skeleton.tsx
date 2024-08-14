import type { HTMLAttributes } from "react";

type Props = {
	length?: number;
	className?: string;
	isCard?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function Skeleton({ length = 3, className, isCard, ...props }: Props) {
	const skeletons = Array.from({ length }, (_, i) => (
		<div className="my-2 flex flex-col gap-5" key={i}>
			{isCard && <div className="skeleton h-32 w-full"></div>}
			<div className="skeleton h-4 w-28"></div>
			<div className="skeleton h-4 w-full"></div>
			<div className="skeleton h-4 w-full"></div>
		</div>
	));

	return (
		<div className={className} {...props}>
			{skeletons}
		</div>
	);
}
