import { Link } from "react-router-dom";
import type { Post } from "../types";
import { RxAvatar } from "react-icons/rx";

export function PostCard({ title, body, id, userId }: Post) {
	return (
		<article>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title line-clamp-1">
						<Link to={`/post/${id}`}>{title}</Link>
					</h2>
					<p className="line-clamp-3 hover:opacity-85">
						<Link to={`/post/${id}`}>{body}</Link>
					</p>

					<div className="mt-3 flex justify-end">
						<Link to={`/profile/${userId}`} title="Visit Author">
							<RxAvatar size={24} className="avatar" />
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
