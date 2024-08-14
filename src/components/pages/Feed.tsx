import { useQuery } from "@tanstack/react-query";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { Metadata } from "../partials/Metadata";
import { getPosts } from "../../lib/query";
import { Skeleton } from "../partials/Skeleton";
import { PostCard } from "../PostCard";
import { Navigate } from "react-router-dom";
import { useRef } from "react";
import { PostForm } from "../PostForm";

export default function Feed() {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const { data, isPending, isError } = useQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
	});

	const handleDialog = (open: boolean) => {
		if (dialogRef.current && open) dialogRef.current.showModal();
		else if (dialogRef.current) dialogRef.current.close();
	};

	if (isError) return <Navigate to="/error" />;

	return (
		<main>
			<Metadata title="Feed" description="Exlpore the latest posts" />

			<MaxWidthWrapper>
				<section>
					<div className="flex items-center justify-between gap-4">
						<h1> Explore the latest posts </h1>

						<button className="btn" onClick={() => handleDialog(true)}>
							Add New Post
						</button>
					</div>
					{isPending ? (
						<Skeleton
							length={6}
							className="mt-6 grid gap-8"
							isCard
							style={{
								gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							}}
						/>
					) : (
						<div
							className="mt-6 grid gap-8"
							style={{
								gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							}}
						>
							{data?.map((post) => <PostCard key={post.id} {...post} />)}
						</div>
					)}
				</section>
			</MaxWidthWrapper>

			<dialog
				ref={dialogRef}
				className="modal backdrop-blur-[3px] backdrop:bg-black/60 dark:backdrop:bg-slate-600/10"
			>
				<div className="modal-box">
					<h3 className="flex items-center gap-4 text-lg font-bold">
						Add New Post
					</h3>
					<PostForm handleDialog={handleDialog} />
				</div>
			</dialog>
		</main>
	);
}
