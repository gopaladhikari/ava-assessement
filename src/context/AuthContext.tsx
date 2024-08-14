import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import cookie from "js-cookie";
import { getUser } from "../lib/query";
import { User } from "../types";

type AuthContextType = {
	user: null | User | undefined;
	isLoading: boolean;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const userId = cookie.get("userId");

	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const { data, isLoading: isQueryLoading } = useQuery({
		queryKey: ["user", userId],
		queryFn: () => (userId ? getUser(userId) : null),
	});

	useEffect(() => {
		if (data) setUser(data);
		else setUser(null);
		setIsLoading(isQueryLoading);
	}, [data, isQueryLoading]);

	const value = useMemo(
		() => ({ user, isLoading, setUser, setIsLoading }),
		[user, isLoading]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
