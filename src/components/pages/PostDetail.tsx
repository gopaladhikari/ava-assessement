import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getPost } from "../../lib/query";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";

type Params = {
	postId?: string;
};

export default function PostDetail() {
	const { postId } = useParams<Params>();

	if (!postId) return <Navigate to="/feed" />;

	const { data, isError } = useQuery({
		queryKey: ["post", postId],
		queryFn: () => getPost(postId),
	});

	if (isError) return <Navigate to="/error" />;

	return (
		<main>
			<section>
				<MaxWidthWrapper className="">
					<h1>{data?.title}</h1>
					<p>{data?.body}</p>
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
