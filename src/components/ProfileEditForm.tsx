import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type UserType } from "../schemas/userSchema";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../lib/mutation";

export function ProfileEditForm({
	setShowForm,
}: {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const data = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserType>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			id: data?.user?.id,
			name: data?.user?.name,
			email: data?.user?.email,
			username: data?.user?.username,
			website: data?.user?.website,
			phone: data?.user?.phone,
			address: {
				street: data?.user?.address.street,
				suite: data?.user?.address.suite,
				city: data?.user?.address.city,
				zipcode: data?.user?.address.zipcode,
			},
			company: {
				name: data?.user?.company.name,
				catchPhrase: data?.user?.company.catchPhrase,
				bs: data?.user?.company.bs,
			},
		},
	});

	const { mutate, isPending, isError, error } = useMutation({
		mutationKey: ["updateUser"],
		mutationFn: updateUser,
		onSuccess: (data) => {
			console.log(data);
			alert("Profile updated successfully");
			setShowForm(false);
		},
	});

	const onSubmit: SubmitHandler<UserType> = (data) => {
		mutate(data);
	};

	return (
		<section>
			<form
				className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="text-2xl font-semibold text-gray-800">Edit Profile</h1>

				<div className="form-group">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<input
						id="name"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your name"
						{...register("name")}
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
					)}
				</div>

				<div className="form-group">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						id="email"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your email"
						{...register("email")}
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
					)}
				</div>

				<div className="form-group">
					<label
						htmlFor="username"
						className="block text-sm font-medium text-gray-700"
					>
						Username
					</label>
					<input
						id="username"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your username"
						{...register("username")}
					/>
					{errors.username && (
						<p className="mt-1 text-sm text-red-500">
							{errors.username.message}
						</p>
					)}
				</div>

				<div className="form-group">
					<label
						htmlFor="street"
						className="block text-sm font-medium text-gray-700"
					>
						Street
					</label>
					<input
						id="street"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your Street"
						{...register("address.street")}
					/>
					{errors.address?.street && (
						<p className="mt-1 text-sm text-red-500">
							{errors.address.street.message}
						</p>
					)}
				</div>
				<div className="form-group">
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-gray-700"
					>
						Phone
					</label>
					<input
						id="phone"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your Phone"
						{...register("phone")}
					/>
					{errors.phone && (
						<p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
					)}
				</div>

				<div className="form-group">
					<label
						htmlFor="suite"
						className="block text-sm font-medium text-gray-700"
					>
						Suite
					</label>
					<input
						id="suite"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your Suite"
						{...register("address.suite")}
					/>
					{errors.address?.suite && (
						<p className="mt-1 text-sm text-red-500">
							{errors.address.suite.message}
						</p>
					)}
				</div>

				<div className="form-group">
					<label
						htmlFor="city"
						className="block text-sm font-medium text-gray-700"
					>
						City
					</label>
					<input
						id="city"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your City"
						{...register("address.city")}
					/>
					{errors.address?.city && (
						<p className="mt-1 text-sm text-red-500">
							{errors.address.city.message}
						</p>
					)}
				</div>

				<div className="form-group">
					<label
						htmlFor="zipcode"
						className="block text-sm font-medium text-gray-700"
					>
						Zipcode
					</label>
					<input
						id="zipcode"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your zipcode"
						{...register("address.zipcode")}
					/>
					{errors.address?.zipcode && (
						<p className="mt-1 text-sm text-red-500">
							{errors.address.zipcode.message}
						</p>
					)}
				</div>

				<div className="form-group">
					<label
						htmlFor="website"
						className="block text-sm font-medium text-gray-700"
					>
						Website
					</label>
					<input
						id="website"
						type="text"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2"
						placeholder="Your website"
						{...register("website")}
					/>
					{errors.website && (
						<p className="mt-1 text-sm text-red-500">
							{errors.website.message}
						</p>
					)}
				</div>

				{isError && (
					<p className="mt-1 text-sm text-red-500">{error?.message}</p>
				)}

				<button
					disabled={isPending}
					type="submit"
					className="w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					{isPending ? "Saving..." : "Save"}
				</button>
			</form>
		</section>
	);
}
