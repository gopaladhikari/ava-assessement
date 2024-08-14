import z from "zod";

export const postSchema = z.object({
	title: z.string().min(1, { message: "Title is required" }),
	body: z.string().min(1, { message: "Body is required" }),
});

export type PostType = z.infer<typeof postSchema>;
