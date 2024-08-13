import type { Post } from "../types";
import { axiosInstance } from "../config/axios";

// Get all the posts from the API
export const getPosts = async () => {
	const { data } = await axiosInstance.get<Post>("/posts");

	return data;
};

// Get a single post from the API
export const getPost = async (id: number) => {
	const { data } = await axiosInstance.get(`/posts/${id}`);

	return data;
};

// Get user data from the API
export const getUser = async (id: number) => {
	const { data } = await axiosInstance.get(`/users/${id}`);

	return data;
};

// Get all post of a user from the API
export const getPostsByUser = async (id: number) => {
	const { data } = await axiosInstance.get(`/posts?userId=${id}`);

	return data;
};

// Get all comments of a post from the API
export const getComments = async (id: number) => {
	const { data } = await axiosInstance.get(`/comments?postId=${id}`);

	return data;
};
