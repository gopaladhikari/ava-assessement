import { Link } from "react-router-dom";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { useAuth } from "../../context/AuthContext";
import { BiArrowBack } from "react-icons/bi";

export default function NotFound() {
	const data = useAuth();
	return (
		<main>
			<section className="flex items-center justify-center">
				<MaxWidthWrapper>
					<div className="mx-auto mt-28 max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
							404
						</h1>
						<p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
							Something&apos;s missing.
						</p>
						<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
							Sorry, we can&apos;t find that page. You&apos;ll find lots to
							explore on the home page.{" "}
						</p>
						<Link to={data?.user ? "/feed" : "/"} className="btn">
							<BiArrowBack size={18} /> Go back home{" "}
						</Link>
					</div>
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
