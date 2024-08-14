import { useQuery } from "@tanstack/react-query";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { Metadata } from "../partials/Metadata";
import { getPosts } from "../../lib/query";
import { Skeleton } from "../partials/Skeleton";
import { PostCard } from "../PostCard";
import { Navigate } from "react-router-dom";

export default function Feed() {
	const { data, isPending, isError } = useQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
	});

	if (isError) return <Navigate to="/error" />;

	return (
		<main>
			<Metadata title="Feed" description="Exlpore the latest posts" />

			<MaxWidthWrapper>
				<section>
					<h1> Explore the latest posts </h1>

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
		</main>
	);
}
