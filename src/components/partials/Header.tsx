import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaRegUser } from "react-icons/fa";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { useAuth } from "../../context/AuthContext";

export function Header() {
	const user = useAuth();

	return (
		<header>
			<nav>
				<MaxWidthWrapper classNames="navbar bg-base-100">
					<div className="flex-1">
						<Link to="/" className="text-xl font-bold text-primary md:text-2xl">
							Ava Technology
						</Link>
					</div>
					<div className="flex-none items-center">
						{user?.id ? (
							<div className="dropdown dropdown-end">
								<div
									tabIndex={0}
									role="button"
									className="avatar btn btn-circle btn-ghost"
								>
									<FaRegUser size={24} />
								</div>
								<ul
									tabIndex={0}
									className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
								>
									<li>
										<a className="justify-between">
											Profile
											<span className="badge">New</span>
										</a>
									</li>
									<li>
										<a>Settings</a>
									</li>
									<li>
										<a>Logout</a>
									</li>
								</ul>
							</div>
						) : (
							<div className="flex items-center gap-8">
								<Link to="/login" className="btn btn-ghost">
									Login <FaLongArrowAltRight />
								</Link>
							</div>
						)}
					</div>
				</MaxWidthWrapper>
			</nav>
		</header>
	);
}
