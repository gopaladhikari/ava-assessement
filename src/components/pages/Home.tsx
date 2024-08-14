import { useEffect } from "react";
import { site } from "../../config/constants";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { Metadata } from "../partials/Metadata";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth?.isLoading && auth?.user) navigate("/feed");
	}, [auth?.isLoading]);

	return (
		<main>
			<Metadata title={site.title} description={site.description} />

			<MaxWidthWrapper>
				<section>
					<h1>Welcome to Ava Technology</h1>
				</section>
			</MaxWidthWrapper>
		</main>
	);
}
