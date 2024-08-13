import { cn } from "../../lib/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function MaxWidthWrapper({ children, className }: Props) {
	return (
		<div
			className={cn("mx-auto max-w-screen-xl space-y-6 p-4 md:px-8", className)}
		>
			{children}
		</div>
	);
}
