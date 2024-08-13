import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import cookie from "js-cookie";
import { getUser } from "../lib/query";
import { User } from "../types";

const AuthContext = createContext<null | User>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<null | User>(null);
	const userId = cookie.get("userId");

	const { data } = useQuery({
		queryKey: ["user"],
		queryFn: () => (userId ? getUser(userId) : null),
	});

	useEffect(() => {
		if (data) setUser(data);
	}, [data]);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
