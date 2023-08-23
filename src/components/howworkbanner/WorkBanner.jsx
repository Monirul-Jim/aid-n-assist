import React from "react";
import "./howwework.css";

const WorkBanner = () => {
	return (
		<section className="bannersetup bg-fixed flex items-center justify-center lg:w-full lg:h-[400px] h-96 w-fit">
			<div className="content-center text-center relative w-full p-5">
				<div className="absolute inset-0 bg-black opacity-40"></div>
				<h2 className="lg:text-5xl text-green-400 font-bold relative z-10">
					How we work for Humanity?
				</h2>

				<hr className="border-t-4 border-emerald-600 rounded-2xl mt-4 w-1/12 mx-auto" />
			</div>
		</section>
	);
};

export default WorkBanner;
