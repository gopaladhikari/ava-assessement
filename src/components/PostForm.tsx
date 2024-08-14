import { useForm, SubmitHandler } from "react-hook-form";
import { postSchema, type PostType } from "../schemas/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../lib/mutation";
import { useAuth } from "../context/AuthContext";

export function PostForm({
	handleDialog,
}: {
	handleDialog: (open: boolean) => void;
}) {
	const userData = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<PostType>({
		resolver: zodResolver(postSchema),
	});

	const { mutate, isPending, isError, error } = useMutation({
		mutationKey: ["createPost"],
		mutationFn: createPost,
		onSuccess: (data) => {
			console.log("Created post", data);
			alert("Post created successfully");
			handleDialog(false);
			reset();
		},
	});

	const onSubmit: SubmitHandler<PostType> = (data) => {
		mutate({
			...data,
			userId: userData?.user?.id as number,
		});
	};

	return (
		<form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-2">
				<label htmlFor="title" className="block text-sm font-medium">
					Title
				</label>

				<input
					type="text"
					className="input input-bordered w-full"
					{...register("title")}
				/>

				{errors.title && <p className="text-error">{errors.title.message}</p>}
			</div>

			<div className="space-y-2">
				<label htmlFor="body" className="block text-sm font-medium">
					Body
				</label>

				<textarea
					rows={4}
					className="textarea textarea-bordered w-full"
					{...register("body")}
				/>
				{errors.body && <p className="text-error">{errors.body.message}</p>}
			</div>

			{isError && <p className="text-error">{error.message}</p>}

			<div className="flex justify-end gap-6">
				<button
					type="button"
					className="btn btn-ghost"
					onClick={() => handleDialog(false)}
				>
					Cancel
				</button>
				<button className="btn" disabled={isPending}>
					{isPending ? "Creating..." : "Create"}
				</button>
			</div>
		</form>
	);
}
