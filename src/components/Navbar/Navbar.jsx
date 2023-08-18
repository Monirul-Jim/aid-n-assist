"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Navbar = () => {
	const { user, logout } = useAuth();
	const { displayName, photoURL } = user || {};

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};
	const [isOpen, setIsOpen] = useState(false);
	const [showSpinner, setShowSpinner] = useState(false);

	const toggleDropdown = () => {
		setShowSpinner(true);
		setTimeout(() => {
			setIsOpen(!isOpen);
			setShowSpinner(false);
		}, 2000);
	};

	useEffect(() => {
		if (!isOpen) {
			setShowSpinner(false);
		}
	}, [isOpen]);

	const handleLogOut = async () => {
		await logout();
		toast.success("Successfully Logout!");
	};
	return (
		<div>
			<nav className="p-4">
				<div className="container mx-auto flex justify-between items-center">
					<a
						href="/"
						className="flex items-center align-middle gap-2 mb-0 md:mb-3"
					>
						<Image
							src="/heart.png"
							alt="My Image"
							width={35}
							height={35}
							className="w-[25px] md:w-[35px]"
						/>
						<h1 className="text-emerald-600 font-extrabold text-sm md:text-xl dark:text-white">
							aid
							<span className="text-xl md:text-3xl">N</span>
							assist
						</h1>
					</a>
					<div className="hidden md:flex space-x-4">
						<a href="#">Home</a>
						<a href="/about">About</a>
						<Link href="/howwework">How we Work</Link>
						<a href="#">Portfolio</a>
						<Link href="/contactus">Contact Us</Link>
						<Link href="/login" className="font-bold text-base">
							Login
						</Link>
						<div className="flex items-center md:order-2">
							<div className="relative">
								<button
									type="button"
									className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
									id="user-menu-button"
									aria-expanded={isOpen}
									onClick={toggleDropdown}
								>
									<span className="sr-only">
										Open user menu
									</span>
									<Image
										width={30}
										height={30}
										className="rounded-full"
										title={displayName}
										src={
											photoURL ||
											"https://img.freepik.com/free-icon/user_318-159711.jpg"
										}
										alt="user photo"
									/>
								</button>
								<div
									className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
										isOpen
											? "opacity-100 visible"
											: "opacity-0 invisible"
									} transition-opacity duration-300`}
									id="user-dropdown"
								>
									{showSpinner && (
										<div className="flex justify-center p-4">
											return (
											<div>
												<nav className="p-4">
													<div className="container mx-auto flex justify-between items-center">
														<a
															href="/"
															className="flex items-center align-middle gap-2 mb-0 md:mb-3"
														>
															<Image
																src="/heart.png"
																alt="My Image"
																width={35}
																height={35}
																className="w-[25px] md:w-[35px]"
															/>
															<h1 className="text-emerald-600 font-extrabold text-sm md:text-xl dark:text-white">
																aid
																<span className="text-xl md:text-3xl">
																	N
																</span>
																assist
															</h1>
														</a>
														<div className="hidden md:flex space-x-4">
															<Link href="/">
																Home
															</Link>
															<Link href="/about">
																About
															</Link>
															<Link href="/howwework">
																How we Work
															</Link>
															<Link href="/portfolio">
																Portfolio
															</Link>
															<Link href="/contact">
																Contact
															</Link>

															<div className="flex items-center md:order-2">
																<div className="relative">
																	<button
																		type="button"
																		className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 dark:focus:ring-gray-600"
																		id="user-menu-button"
																		aria-expanded={
																			isOpen
																		}
																		onClick={
																			toggleDropdown
																		}
																	>
																		<span className="sr-only">
																			Open
																			user
																			menu
																		</span>
																		<Image
																			width={
																				30
																			}
																			height={
																				30
																			}
																			className="rounded-full"
																			src="/docs/images/people/profile-picture-3.jpg"
																			alt="user photo"
																		/>
																	</button>
																	<div
																		className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
																			isOpen
																				? "opacity-100 visible"
																				: "opacity-0 invisible"
																		} transition-opacity duration-300`}
																		id="user-dropdown"
																	>
																		{showSpinner && (
																			<div className="flex justify-center p-4">
																				<div role="status">
																					<svg
																						aria-hidden="true"
																						class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
																						viewBox="0 0 100 101"
																						fill="none"
																						xmlns="http://www.w3.org/2000/svg"
																					>
																						<path
																							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
																							fill="currentColor"
																						/>
																						<path
																							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
																							fill="currentFill"
																						/>
																					</svg>
																					<span class="sr-only">
																						Loading...
																					</span>
																				</div>
																			</div>
																		)}
																		{!showSpinner && (
																			<ul
																				className="py-2"
																				aria-labelledby="user-menu-button"
																			>
																				<li>
																					<a
																						href="/dashboard"
																						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
																					>
																						Dashboard
																					</a>
																				</li>
																				<li>
																					<a
																						href="#"
																						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
																					>
																						Settings
																					</a>
																				</li>
																				<li>
																					<a
																						href="#"
																						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
																					>
																						Earnings
																					</a>
																				</li>
																				<li>
																					<button
																						href="/"
																						onClick={
																							handleLogOut
																						}
																						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
																					>
																						Logout
																					</button>
																				</li>
																			</ul>
																		)}
																	</div>
																</div>
															</div>
														</div>
														<div className="md:hidden">
															<button
																onClick={
																	toggleMobileMenu
																}
															>
																{mobileMenuOpen ? (
																	<svg
																		className="w-6 h-6"
																		fill="none"
																		stroke="currentColor"
																		viewBox="0 0 24 24"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth="2"
																			d="M6 18L18 6M6 6l12 12"
																		></path>
																	</svg>
																) : (
																	<svg
																		className="w-6 h-6"
																		fill="none"
																		stroke="currentColor"
																		viewBox="0 0 24 24"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth="2"
																			d="M4 6h16M4 12h16M4 18h16"
																		></path>
																	</svg>
																)}
															</button>
														</div>
													</div>
													<div
														className={`md:hidden ${
															mobileMenuOpen
																? "translate-x-0"
																: "-translate-x-full"
														} transition-transform duration-300 ease-in-out fixed top-0 left-0 w-64 h-full bg-gray-800 overflow-y-auto z-10`}
													>
														<div className="p-4 space-y-2">
															<a
																href="#"
																className="block text-white"
															>
																Home
															</a>
															<a
																href="/about"
																className="block text-white"
															>
																About
															</a>
															<Link
																href="/howwework"
																className="block text-white"
															>
																How we Work
															</Link>
															<a
																href="#"
																className="block text-white"
															>
																Portfolio
															</a>
															<a
																href="#"
																className="block text-white"
															>
																Contact
															</a>
															<div className="relative">
																<button
																	type="button"
																	className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
																	id="user-menu-button"
																	aria-expanded={
																		isOpen
																	}
																	onClick={
																		toggleDropdown
																	}
																>
																	<span className="sr-only">
																		Open
																		user
																		menu
																	</span>
																	<Image
																		width={
																			30
																		}
																		height={
																			30
																		}
																		className="rounded-full"
																		src="/docs/images/people/profile-picture-3.jpg"
																		alt="user photo"
																	/>
																</button>
																<div
																	className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
																		isOpen
																			? "opacity-100 visible"
																			: "opacity-0 invisible"
																	} transition-opacity duration-300`}
																	id="user-dropdown"
																>
																	{showSpinner && (
																		<div className="flex justify-center p-4">
																			<div role="status">
																				<svg
																					aria-hidden="true"
																					class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
																					viewBox="0 0 100 101"
																					fill="none"
																					xmlns="http://www.w3.org/2000/svg"
																				>
																					<path
																						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
																						fill="currentColor"
																					/>
																					<path
																						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
																						fill="currentFill"
																					/>
																				</svg>
																				<span class="sr-only">
																					Loading...
																				</span>
																			</div>
																		</div>
																	)}
																	{!showSpinner && (
																		<ul
																			className="py-2 bg-gray-800"
																			aria-labelledby="user-menu-button"
																		>
																			<li>
																				<a
																					href="#"
																					className="block px-4 py-2 text-sm  text-white"
																				>
																					Dashboard
																				</a>
																			</li>
																			<li>
																				<a
																					href="#"
																					className="block px-4 py-2 text-sm text-white"
																				>
																					Settings
																				</a>
																			</li>
																			<li>
																				<a
																					href="#"
																					className="block px-4 py-2 text-sm text-white"
																				>
																					Earnings
																				</a>
																			</li>
																			<li>
																				<Link
																					onClick={
																						handleLogout
																					}
																					className="block px-4 py-2 text-sm text-white"
																				>
																					Logout
																				</Link>
																			</li>
																		</ul>
																	)}
																</div>
															</div>
														</div>
													</div>
												</nav>
											</div>
											);
										</div>
									)}
									{!showSpinner && (
										<ul
											className="py-2"
											aria-labelledby="user-menu-button"
										>
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
												>
													Dashboard
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
												>
													Settings
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
												>
													Earnings
												</a>
											</li>
											<li>
												<button
													onClick={handleLogOut}
													className="block px-4 py-2 text-base text-emerald-600 font-bold"
												>
													Log out
												</button>
											</li>
										</ul>
									)}
								</div>
							</div>
							{/* <div className="relative">
                                <button
                                    type="button"
                                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded={isOpen}
                                    onClick={toggleDropdown}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <Image width={30} height={30} className="rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                                </button>
                                <div
                                    className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300`}
                                    id="user-dropdown"
                                >
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div> */}
						</div>
					</div>
					<div className="md:hidden">
						<button onClick={toggleMobileMenu}>
							{mobileMenuOpen ? (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							) : (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`md:hidden ${
						mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-300 ease-in-out fixed top-0 left-0 w-64 h-full bg-gray-800 overflow-y-auto z-10`}
				>
					<div className="p-4 space-y-2">
						<a href="#" className="block text-white">
							Home
						</a>
						<a href="/about" className="block text-white">
							About
						</a>
						<Link href="/howwework" className="block text-white">
							How we Work
						</Link>
						<a href="#" className="block text-white">
							Portfolio
						</a>
						<Link href="/contactus" className="block text-white">
							Contact Us
						</Link>
						<div className="relative">
							<button
								type="button"
								className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
								id="user-menu-button"
								aria-expanded={isOpen}
								onClick={toggleDropdown}
							>
								<span className="sr-only">Open user menu</span>
								<Image
									width={30}
									height={30}
									className="rounded-full"
									src="/docs/images/people/profile-picture-3.jpg"
									alt="user photo"
								/>
							</button>
							<div
								className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
									isOpen
										? "opacity-100 visible"
										: "opacity-0 invisible"
								} transition-opacity duration-300`}
								id="user-dropdown"
							>
								{showSpinner && (
									<div className="flex justify-center p-4">
										<div role="status">
											<svg
												aria-hidden="true"
												class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="currentColor"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentFill"
												/>
											</svg>
											<span class="sr-only">
												Loading...
											</span>
										</div>
									</div>
								)}
								{!showSpinner && (
									<ul
										className="py-2 bg-gray-800"
										aria-labelledby="user-menu-button"
									>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm  text-white"
											>
												Dashboard
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-white"
											>
												Settings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-white"
											>
												Earnings
											</a>
										</li>
										<li>
											<button
												onClick={handleLogOut}
												className="block px-4 py-2 text-sm text-white"
											>
												Log out
											</button>
										</li>
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
