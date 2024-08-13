import type { Post } from "../types";

export function PostCard({ title, body }: Post) {
	return (
		<article>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title line-clamp-1">{title}</h2>
					<p className="line-clamp-3"> {body}</p>
				</div>
			</div>
		</article>
	);
}
