import { useQueries } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getCommentsOfPost, getPost } from "../../lib/query";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { MdEdit } from "react-icons/md";
type Params = {
	postId?: string;
};

export default function PostDetail() {
	const { postId } = useParams<Params>();

	if (!postId) return <Navigate to="/feed" />;

	const [post, comments] = useQueries({
		queries: [
			{
				queryKey: ["post", postId],
				queryFn: () => getPost(postId),
			},
			{
				queryKey: ["comment", postId],
				queryFn: () => getCommentsOfPost(postId),
			},
		],
	});

	if (post.isError) return <Navigate to="/error" />;

	return (
		<main>
			<section>
				<MaxWidthWrapper className="">
					<h1>{post.data?.title} </h1>
					<p>{post.data?.body}</p>

					<div>
						<h2 className="mb-8">Comments</h2>
						{comments.isLoading ? (
							<div className="flex flex-col gap-8">
								<div className="flex flex-col gap-2">
									<div className="skeleton h-3 md:w-1/2"></div>
									<div className="skeleton h-3 md:w-1/2"></div>
								</div>

								<div className="flex flex-col gap-2">
									<div className="skeleton h-3 md:w-1/2"></div>
									<div className="skeleton h-3 md:w-1/2"></div>
								</div>

								<div className="flex flex-col gap-2">
									<div className="skeleton h-3 md:w-1/2"></div>
									<div className="skeleton h-3 md:w-1/2"></div>
								</div>
							</div>
						) : (
							<div className="mt-6 flex flex-col gap-3">
								{comments.data?.map((comment) => (
									<div key={comment.id} className="card">
										<div className="card-body flex-row items-start gap-16 p-0">
											<p>{comment.body}</p>
											{postId === String(comment.id) && (
												<button>
													<MdEdit size={20} />
												</button>
											)}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
