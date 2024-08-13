import { Link } from "react-router-dom";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { useAuth } from "../../context/AuthContext";
import { BiArrowBack } from "react-icons/bi";

export default function Error() {
	const data = useAuth();
	return (
		<main>
			<section>
				<MaxWidthWrapper>
					<div className="mx-auto mt-32 max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
							500
						</h1>
						<p className="mb-4 text-3xl font-bold tracking-tight">
							Something went wrong
						</p>
						<p>Sorry, something went wrong. Please try again later.</p>

						<Link to={data?.user ? "/feed" : "/"} className="btn mt-8">
							<BiArrowBack size={18} /> Go back home
						</Link>
					</div>
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
