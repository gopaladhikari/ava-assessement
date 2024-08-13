import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function ProtectedRoute() {
	const data = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!data?.isLoading && !data?.user) navigate("/login");
	}, [data?.isLoading]);

	return <Outlet />;
}
