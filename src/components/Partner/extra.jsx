"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "./style.css";
import "swiper/css";
import Image from "next/image";

const Partner = () => {
	return (
		<>
			<h2 className="text-4xl font-bold text-center pt-16 pb-6">
				Charity Organization Worked In The Fundraising
			</h2>
			<p className="text-center lg:max-w-4xl mx-auto text-xl mb-12">
				We believe in the power of collective effort and community
				involvement.
			</p>

			<Swiper
				slidesPerView={1}
				loop
				spaceBetween={20}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination, Autoplay]}
				className="mySwiper mb-12"
				autoplay
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
				}}
			>
				<SwiperSlide>
					<Image
						width={60}
						height={60}
						src="/partner/1.png"
						alt="img1"
						style={{ background: "transparent" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						width={60}
						height={60}
						src="/partner/2.png"
						alt="img2"
						style={{ background: "transparent" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						width={60}
						height={60}
						src="/partner/3.png"
						alt="img3"
						style={{ background: "transparent" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						width={60}
						height={60}
						src="/partner/4.png"
						alt="img4"
						style={{ background: "transparent" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						width={60}
						height={60}
						src="/partner/1.png"
						alt="img5"
						style={{ background: "transparent" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						width={60}
						height={60}
						src="/partner/2.png"
						alt="img6"
						style={{ background: "transparent" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						width={60}
						height={60}
						src="/partner/3.png"
						alt="img7"
						style={{ background: "transparent" }}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Partner;
