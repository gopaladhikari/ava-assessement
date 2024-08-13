import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export default function ProtectedRoute() {
	const data = useAuth();

	if (data?.isLoading) return null;

	if (!data?.user) return <Navigate to="/login" />;

	return <Outlet />;
}
