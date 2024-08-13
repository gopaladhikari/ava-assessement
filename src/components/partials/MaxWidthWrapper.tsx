import { cn } from "../../lib/utils";

type Props = {
	children: React.ReactNode;
	classNames?: string;
};

export function MaxWidthWrapper({ children, classNames }: Props) {
	return (
		<div className={cn("mx-auto max-w-screen-xl p-4 md:px-8", classNames)}>
			{children}
		</div>
	);
}
