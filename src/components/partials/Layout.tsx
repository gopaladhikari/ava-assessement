import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { HelmetProvider } from "react-helmet-async";

export default function Layout() {
	return (
		<HelmetProvider>
			<Header />
			<Outlet />
		</HelmetProvider>
	);
}
