import { Link } from "react-router-dom";

export function Header() {
	return (
		<header>
			<nav className="navbar bg-base-100">
				<div className="flex-1">
					<Link to="/" className="btn btn-ghost text-xl">
						Ava Technology
					</Link>
				</div>
				<div className="flex-none gap-2">
					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered w-24 md:w-auto"
						/>
					</div>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="avatar btn btn-circle btn-ghost"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
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
				</div>
			</nav>
		</header>
	);
}
