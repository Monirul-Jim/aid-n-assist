"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import contactimage from "../../../public/Gallery/contact-us-main.gif";
import Swal from "sweetalert2";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_qymata3",
				"template_l9b11q2",
				form.current,
				"27auYAxRn2wcbS3p9"
			)
			.then(
				(result) => {
					console.log(result.text);
					Swal.fire(
						"Sent your Message Successfully",
						"You clicked the button!",
						"success"
					);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className="my-10">
			<div>
				<h1 className="text-center font-bold mt-20 pb-10 text-5xl text-gray-600 mb-5">
					Contact Us
				</h1>
			</div>
			<div className="lg:flex gap-14 justify-center items-center max-w-7xl mx-auto">
				<div className="lg:w-[650px] w-96 h-96 lg:h-[500px] rounded-xl lg:mt-9">
					<Image width={650} height={550} src={contactimage} alt="" />
				</div>
				<div className="ms-10 lg:ms-0 w-[50%]">
					<div className="bg-gray-50 border-2 p-8 rounded-md shadow-md w-[90%] mx-auto">
						<form
							className="w-[100%] justify-center mt-3"
							ref={form}
							onSubmit={sendEmail}
						>
							<div className="font-bold mt-2">
								<label>Name</label>
							</div>
							<div>
								<input
									className="w-full border rounded-md border-emerald-500 p-2"
									type="text"
									name="user_name"
								/>
							</div>
							<div className="font-bold mt-3">
								<label>Email</label>
							</div>
							<div>
								<input
									className="w-full border rounded-md border-emerald-500 p-2 text-black"
									type="email"
									name="user_email"
								/>
							</div>
							<div className="font-bold mt-3">
								<label>Message</label>
							</div>
							<div>
								<textarea
									className="w-full h-48 border rounded-md border-emerald-500 p-2"
									name="message"
								/>
							</div>
							<div className="mt-3">
								<button
									type="submit"
									className="w-full bg-green-400 hover:bg-green-500 text-white rounded-md p-3 flex items-center justify-center"
								>
									<FaTelegramPlane className="mr-2" />
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
