import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../../schemas/loginSchema";
import { MaxWidthWrapper } from "../partials/MaxWidthWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../lib/mutation";
import { useNavigate } from "react-router-dom";
import { Metadata } from "../partials/Metadata";
import cookie from "js-cookie";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function Login() {
	const auth = useAuth();
	const navigate = useNavigate();

	const { mutate, error, isPending } = useMutation({
		mutationFn: loginUser,
		onSuccess: (user) => {
			auth?.setIsLoading(false);
			auth?.setUser(user);

			cookie.set("userId", String(user.id), {
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
			});

			navigate("/feed");
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	useEffect(() => {
		if (auth?.user) navigate("/feed");
	}, [auth?.isLoading]);

	const onSubmit: SubmitHandler<LoginSchema> = async ({ userId }) => {
		auth?.setIsLoading(true);
		mutate(userId);
	};

	return (
		<main>
			<Metadata title="Login" description="Login to your account" />
			<MaxWidthWrapper className="flex flex-col gap-4">
				<h1 className="text-center">Login</h1>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mx-auto flex w-full max-w-2xl flex-col gap-4"
				>
					<label
						htmlFor="userId"
						className={errors?.userId?.message && "text-error"}
					>
						User ID
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
						{...register("userId")}
					/>

					{errors.userId && (
						<p className="text-error">{errors.userId.message}</p>
					)}

					{error && <p className="text-error">{error.message}</p>}

					<button className="btn btn-primary w-fit" disabled={isPending}>
						{isPending ? (
							<>
								<span className="loading loading-spinner"></span>
								loading
							</>
						) : (
							"Login"
						)}
					</button>
				</form>
			</MaxWidthWrapper>
		</main>
	);
}
