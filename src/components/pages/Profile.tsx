import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getUser } from "../../lib/query";
import { Metadata } from "../partials/Metadata";
import { Skeleton } from "../partials/Skeleton";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { ProfileEditForm } from "../ProfileEditForm";

export default function Profile() {
	const { userId } = useParams();
	const [showForm, setShowForm] = useState(false);

	const userData = useAuth();

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

			<MaxWidthWrapper className="space-y-3">
				{showForm ? (
					<ProfileEditForm setShowForm={setShowForm} />
				) : (
					<>
						<section className="space-y-1">
							<h1> Name : {data?.name}</h1>
							<p> Username : {data?.username}</p>
							<p> Email : {data?.email}</p>
							<p> Phone : {data?.phone}</p>
						</section>

						<address className="space-y-1">
							<p> Street : {data?.address.street}</p>
							<p> Suite : {data?.address.suite}</p>
							<p> City : {data?.address.city}</p>
							<p> Zip : {data?.address.zipcode}</p>
						</address>

						{userId === String(userData?.user?.id) && (
							<section>
								<button onClick={() => setShowForm(!showForm)} className="btn">
									Edit
								</button>
							</section>
						)}
					</>
				)}
			</MaxWidthWrapper>
		</main>
	);
}
