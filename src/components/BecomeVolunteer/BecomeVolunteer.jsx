import Link from "next/link";
import React from "react";
import "./BecomeVolunteer.css";

const BecomeVolunteer = () => {
	return (
		<div className="volunteerBackground bg-fixed my-20 relative">
			<div className="absolute inset-0 bg-green-500 opacity-40"></div>
			<div className="lg:pt-14 lg:pb-5 lg:px-14 pb-2 mt-8 relative z-10">
				<h2 className="text-center lg:text-5xl font-extrabold text-white leading-6">
					Ready to Change Lives?{" "}
					<p className="mt-3">Become a Volunteer With Us!</p>
				</h2>
				<p className="text-center lg:text-xl mt-6 text-white">
					Start one of our programme today and help people in need
				</p>
				<hr className="border-t-4 border-green-300 rounded-2xl mt-4 w-1/12 mx-auto" />
			</div>
			<div className="flex justify-center pb-5 relative z-10">
				<Link href="volunteers">
					<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4">
						<span class="relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
							Become a Volunteer
						</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BecomeVolunteer;
