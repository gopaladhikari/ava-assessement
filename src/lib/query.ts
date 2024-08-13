import type { Post } from "@/types";
import axios from "axios";

// Get all the posts from the API
export const getPosts = async () => {
	const { data } = await axios.get<Post>(
		"https://jsonplaceholder.typicode.com/posts"
	);

	return data;
};

// Get a single post from the API
export const getPost = async (id: number) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);

	return data;
};

// Get user data from the API
export const getUser = async (id: number) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);

	return data;
};

// Get all post of a user from the API
export const getPostsByUser = async (id: number) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts?userId=${id}`
	);

	return data;
};

// Get all comments of a post from the API
export const getComments = async (id: number) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/comments?postId=${id}`
	);

	return data;
};
