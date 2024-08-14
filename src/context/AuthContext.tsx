import { createContext, useContext, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import cookie from "js-cookie";
import { getUser } from "../lib/query";
import { User } from "../types";

type AuthContextType = {
	user: null | User | undefined;
	isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const userId = cookie.get("userId");

	const { data: user, isLoading } = useQuery({
		queryKey: ["user", userId],
		queryFn: () => (userId ? getUser(userId) : null),
	});

	const value = useMemo(() => ({ user, isLoading }), [user, isLoading]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
