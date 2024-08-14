import { useQueries } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getCommentsOfPost, getPost } from "../../lib/query";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { MdEdit } from "react-icons/md";
import { useRef } from "react";
import { Skeleton } from "../partials/Skeleton";

type Params = {
	postId?: string;
};

export default function PostDetail() {
	const { postId } = useParams<Params>();
	const dialogRef = useRef<HTMLDialogElement | null>(null);

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

	const handleDialog = () => {
		if (dialogRef.current) dialogRef.current.showModal();
	};

	if (post.isError) return <Navigate to="/error" />;

	return (
		<main>
			<section>
				<MaxWidthWrapper className="">
					{post?.isLoading ? (
						<Skeleton length={1} />
					) : (
						<>
							<h1>{post.data?.title} </h1>
							<p>{post.data?.body}</p>
						</>
					)}

					<div>
						<h2 className="mb-8">Comments</h2>
						{comments.isLoading ? (
							<Skeleton length={3} className="flex flex-col gap-8" />
						) : (
							<div className="mt-6 flex flex-col gap-3">
								{comments.data?.map((comment) => (
									<div key={comment.id} className="card">
										<div className="card-body flex-row items-start gap-16 p-0">
											<p>{comment.body}</p>
											{postId === String(comment.id) && (
												<button onClick={handleDialog}>
													<MdEdit />
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

			<dialog
				ref={dialogRef}
				className="modal backdrop-blur-[3px] backdrop:bg-black/60 dark:backdrop:bg-slate-600/10"
			>
				<div className="modal-box">
					<h3 className="flex items-center gap-4 text-lg font-bold">
						Edit <MdEdit />
					</h3>
					<p className="py-4">
						Press ESC key or click the button below to close
					</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</main>
	);
}
