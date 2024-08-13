import { Navigate } from "react-router-dom";
import { site } from "../../config/constants";
import { useAuth } from "../../context/AuthContext";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { Metadata } from "../partials/Metadata";

export default function Home() {
	const user = useAuth();

	if (user) return <Navigate to="/feed" />;

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
