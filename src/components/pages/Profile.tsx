import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getUser } from "../../lib/query";
import { Metadata } from "../partials/Metadata";
import { Skeleton } from "../partials/Skeleton";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";

export default function Profile() {
	const { userId } = useParams();

	if (!userId) return <Navigate to="/not-found" />;

	const { data, isError, isLoading } = useQuery({
		queryKey: ["user", userId],
		queryFn: () => getUser(userId),
	});

	if (isError) return <Navigate to="/error" />;

	if (isLoading)
		return (
			<main>
				<MaxWidthWrapper>
					<Skeleton length={6} />
				</MaxWidthWrapper>
			</main>
		);

	return (
		<main>
			<Metadata title={data?.name} description="Profile of user" />

			<section>
				<MaxWidthWrapper className="space-y-3">
					<h1>{data?.name}</h1>
					<p>{data?.username}</p>
					<p>{data?.email}</p>
					<p>{data?.phone}</p>
					<address>
						<p>{data?.address.street}</p>
						<p>{data?.address.suite}</p>
						<p>{data?.address.city}</p>
						<p>{data?.address.zipcode}</p>
					</address>
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
