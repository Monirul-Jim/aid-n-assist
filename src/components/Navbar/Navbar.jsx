"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
	const router = useRouter(); // Initialize the router
	const { user, logout } = useAuth();
	const { displayName, photoURL } = user || {};

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const [isOpen, setIsOpen] = useState(false);
	const [showSpinner, setShowSpinner] = useState(false);
	const [navbarTransparent, setNavbarTransparent] = useState(true);

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

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setNavbarTransparent(false);
		} else {
			setNavbarTransparent(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="bg-blue-950 shadow-md text-white lg:h-[82px] flex align-middle fixed top-0 left-0 right-0 z-50">
			<nav className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/heart.png"
							alt="My Image"
							width={35}
							height={35}
							className="w-8 h-8"
						/>
						<h1 className="text-emerald-600 font-extrabold text-xl">
							aid<span className="text-3xl">N</span>assist
						</h1>
					</Link>
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
					className={`md:flex md:space-x-4 ${
						mobileMenuOpen ? "block" : "hidden"
					} ${user ? "bg-white" : "bg-opacity-90"}`} 
				>
					<Link
						href="/"
						className={`block mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/"
								? "text-emerald-500 font-bold"
								: "text-white"
						}`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`block mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/about"
								? "text-emerald-500 font-bold"
								: "text-white"
						}`}
					>
						About
					</Link>
					<Link
						href="/howwework"
						className="block mt-2 md:mt-0 md:inline-block"
					>
						How we Work
					</Link>

					<Link
						href="/contactus"
						className="block mt-2 md:mt-0 md:inline-block"
					>
						Contact Us
					</Link>
					<Link href="/login" className="font-bold text-base">
						Login
					</Link>
					<div className="relative mt-2 md:mt-0">
						<button
							type="button"
							className="flex items-center text-gray-700 md:order-2"
							id="user-menu-button"
							aria-expanded={isOpen}
							onClick={toggleDropdown}
						>
							<span className="sr-only">Open user menu</span>
							<Image
								width={30}
								height={30}
								className="rounded-full"
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
							{showSpinner ? (
								<div className="flex justify-center p-4">
									{/* Loading spinner */}
								</div>
							) : (
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
			</nav>
		</div>
	);
};

export default Navbar;
