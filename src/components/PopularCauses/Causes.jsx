"use client";
import React from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { HiOutlineHeart } from "react-icons/hi";
import Link from "next/link";

const Causes = () => {
	return (
		<section className="mx-auto">
			<h1 className="text-5xl font-bold text-center pt-16 pb-6">
				Recent Causes
			</h1>
			<p className="text-center lg:max-w-4xl mx-auto text-xl mb-16">
				Actively involved in a variety of causes that address pressing
				social and humanitarian issues
			</p>
			<div>
				<div className="flex justify-center items-center gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide mx-auto align-middle">
					<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<Image
								src="/causes/cause-2.jpg"
								alt="causeImg1"
								width={400}
								height={300}
								className="rounded-t-md"
							/>
						</a>
						<div className="p-5">
							<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
								GivingWave: Ride the Waves of Change
							</h5>
							<ProgressBar
								completed={40}
								bgColor="#10B981"
								width="100%"
								borderRadius="0"
								height="16px"
								className="mb-6"
								labelAlignment="center"
							/>
							<div className="flex justify-between mb-4">
								<div className="font-bold">
									Goal:
									<span className="text-emerald-500 font-bold">
										{" "}
										$800
									</span>
								</div>
								<div className="font-bold">
									Raised:
									<span className="text-emerald-500 font-bold">
										{" "}
										$2200
									</span>
								</div>
							</div>

							<Link
								href="#"
								className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
							>
								Donation
								<HiOutlineHeart className="text-xl" />
							</Link>
						</div>
					</div>

					<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<Image
								src="/causes/charity-2.jpg"
								alt="causeImg1"
								width={400}
								height={300}
								className="rounded-t-md"
							/>
						</a>
						<div className="p-5">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								GenerosityStream: Flowing Online Donations
							</h5>
							<ProgressBar
								completed={60}
								bgColor="#10B981"
								width="100%"
								borderRadius="0"
								height="16px"
								className="mb-6"
								labelAlignment="center"
							/>
							<div className="flex justify-between mb-4">
								<div className="font-bold">
									Goal:
									<span className="text-emerald-500 font-bold">
										$900
									</span>
								</div>
								<div className="font-bold">
									Raised:
									<span className="text-emerald-500 font-bold">
										$4200
									</span>
								</div>
							</div>

							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
							<Link
								href="#"
								className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500  hover:bg-emerald-600 gap-2"
							>
								Donation
								<HiOutlineHeart className="text-xl" />
							</Link>
						</div>
					</div>

					<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<Image
								src="/causes/charity.jpg"
								alt="causeImg3"
								width={450}
								height={300}
								className="rounded-t-md"
							/>
						</a>
						<div className="p-5 gap-3">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								DonateEase: Seamless Online Giving
							</h5>
							<ProgressBar
								completed={80}
								bgColor="#10B981"
								width="100%"
								borderRadius="0"
								height="16px"
								className="mb-6"
								labelAlignment="center"
							/>
							<div className="flex justify-between mb-4">
								<div className="font-bold">
									Goal:
									<span className="text-emerald-500 font-bold">
										{" "}
										$800
									</span>
								</div>
								<div className="font-bold">
									Raised:
									<span className="text-emerald-500 font-bold">
										{" "}
										$1500
									</span>
								</div>
							</div>

							<Link
								href="#"
								className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
							>
								Donation
								<HiOutlineHeart className="text-xl" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Causes;
