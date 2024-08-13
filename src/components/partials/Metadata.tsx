import { Helmet } from "react-helmet-async";
import { site } from "../../config/constants";

type Props = {
	title: string;
	description: string;
	image?: string;
};

export function Metadata({ title, description, image }: Props) {
	const newTitle = title === site.title ? title : `${title} | ${site.title}`;
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{newTitle}</title>
			<link rel="canonical" href={window.location.href} />
			<meta name="description" content={description} />

			{/* Open Graph tags (OG) */}
			<meta property="og:url" content={window.location.href} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />

			{/* Twitter tags */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />

			{/* Images */}
			{image && (
				<>
					<meta property="og:image" content={image} />
					<meta property="og:image:secure_url" content={image} />
					<meta name="twitter:image" content={image} />
				</>
			)}
		</Helmet>
	);
}
