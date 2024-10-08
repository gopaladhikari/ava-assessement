// All the types for the post
export type Post = {
	id: number;
	title: string;
	body: string;
	userId: number;
};

// Type of User address
type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: {
		lat: string;
		lng: string;
	};
};

// Type of User company
type Company = {
	name: string;
	catchPhrase: string;
	bs: string;
};

// Type of User
export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: Address;
	company: Company;
};

export type Comment = {
	id: number;
	name: string;
	email: string;
	body: string;
	postId: number;
};

export type Comment = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};
