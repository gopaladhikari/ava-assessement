import { cn } from "../../lib/utils";

type Props = {
	length?: number;
	className?: string;
};

export function Skeleton({ length = 3, className }: Props) {
	const skeletons = Array.from({ length }, (_, i) => (
		<div className="flex flex-col gap-4" key={i}>
			<div className="skeleton h-32 w-full"></div>
			<div className="skeleton h-4 w-28"></div>
			<div className="skeleton h-4 w-full"></div>
			<div className="skeleton h-4 w-full"></div>
		</div>
	));

	return (
		<div
			className={cn("grid gap-12", className)}
			style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
		>
			{skeletons}
		</div>
	);
}
