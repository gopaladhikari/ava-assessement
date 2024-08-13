import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Layout from "./partials/Layout";
import ProtectedRoute from "./partials/ProtectedRoute";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},

			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/error",
				element: <Error />,
			},
			{
				path: "/not-found",
				element: <NotFound />,
			},
			{
				element: <ProtectedRoute />,
				children: [
					{
						path: "/profile/:userId",
						element: <Profile />,
					},
					{
						path: "/feed",
						element: <Feed />,
					},

					{
						path: "/post/:postId",
						element: <PostDetail />,
					},
				],
			},
		],
	},
]);
