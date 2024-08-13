import type { User, Post } from "../types";
import { axiosInstance } from "../config/axios";

// Update a user based on the id
export const updateUser = async (user: User) => {
	const { data } = await axiosInstance.put(`/users/${user.id}`, user);

	return data;
};

// Create a post
export const createPost = async (post: Omit<Post, "id">) => {
	const { data } = await axiosInstance.post(`/posts`, post);

	return data;
};

// Update a post based on the id
export const updatePost = async (post: Post) => {
	const { data } = await axiosInstance.put(`/posts/${post.id}`, post);

	return data;
};

// Delete a post based on the id
export const deletePost = async (id: number) => {
	const { data } = await axiosInstance.delete(`/posts/${id}`);

	return data;
};

// User can comment on a post
export const createCommentOnPost = async (comment: Comment) => {
	const { data } = await axiosInstance.post(`/comments`, comment);

	return data;
};
