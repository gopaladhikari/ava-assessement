import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation } from "react-router-dom";
import { getPost } from "../../lib/query";

export default function PostDetail() {
	const { pathname } = useLocation();

	const id = pathname.split("/").pop();

	if (!id) return <Navigate to="/feed" />;

	const { data, isError } = useQuery({
		queryKey: ["post", id],
		queryFn: () => getPost(id),
	});

	return <div>PostDetail</div>;
}
