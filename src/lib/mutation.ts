import type { Post, User, Comment } from "@/types";
import axios from "axios";

// Update a user based on the id
export const updateUser = async (user: User) => {
	const { data } = await axios.put(
		`https://jsonplaceholder.typicode.com/users/${user.id}`,
		user
	);

	return data;
};

// Create a post
export const createPost = async (post: Omit<Post, "id">) => {
	const { data } = await axios.post(
		`https://jsonplaceholder.typicode.com/posts`,
		post
	);

	return data;
};

// Update a post based on the id
export const updatePost = async (post: Post) => {
	const { data } = await axios.put(
		`https://jsonplaceholder.typicode.com/posts/${post.id}`,
		post
	);

	return data;
};

// Delete a post based on the id
export const deletePost = async (id: number) => {
	const { data } = await axios.delete(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);

	return data;
};

// User can comment on a post
export const createCommentOnPost = async (comment: Comment) => {
	const { data } = await axios.post(
		`https://jsonplaceholder.typicode.com/comments`,
		comment
	);

	return data;
};
