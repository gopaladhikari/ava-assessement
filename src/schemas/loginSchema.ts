import z from "zod";

export const loginSchema = z.object({
	userId: z.string().min(1, { message: "User ID is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
