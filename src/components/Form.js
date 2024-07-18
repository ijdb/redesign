"use client";
import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		company: "",
		email: "",
		phoneNumber: "",
		message: "",
		sendNDA: false,
		receiveNewsletter: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
			<div className="mb-6">
				<label
					htmlFor="fullName"
					className="block text-sm font-semibold text-black mb-1"
				>
					Your name
				</label>
				<input
					type="text"
					id="fullName"
					name="fullName"
					placeholder="Full name"
					value={formData.fullName}
					onChange={handleChange}
					className="w-full px-3 py-3.5 border border-gray-300 rounded-lg text-sm"
					required
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="company"
					className="block text-sm font-semibold text-black mb-1"
				>
					Company <span className="text-gray-400">(optional)</span>
				</label>
				<input
					type="text"
					id="company"
					name="company"
					placeholder="Your company name"
					value={formData.company}
					onChange={handleChange}
					className="w-full px-3 py-3.5 border border-gray-300 rounded-lg text-sm"
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="email"
					className="block text-sm font-semibold text-black mb-1"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					className="w-full px-3 py-3.5 border border-gray-300 rounded-lg text-sm"
					required
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="phoneNumber"
					className="block text-sm font-semibold text-black mb-1"
				>
					Phone number <span className="text-gray-400">(optional)</span>
				</label>
				<div className="flex">
					<div className="flex-shrink-0 z-10 inline-flex items-center py-3.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg">
						🇮🇳 IN +91
					</div>
					<input
						type="tel"
						id="phoneNumber"
						name="phoneNumber"
						placeholder="Phone number"
						value={formData.phoneNumber}
						onChange={handleChange}
						className="rounded-none rounded-r-lg border text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 border-gray-300"
					/>
				</div>
			</div>

			<div className="mb-6">
				<label
					htmlFor="message"
					className="block text-sm font-semibold text-black mb-1"
				>
					How can we help you?
				</label>
				<textarea
					id="message"
					name="message"
					rows="5"
					placeholder="Your message"
					value={formData.message}
					onChange={handleChange}
					className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg"
					required
				></textarea>
			</div>

			<div className="mb-6">
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						name="sendNDA"
						checked={formData.sendNDA}
						onChange={handleChange}
						className="form-checkbox h-5 w-5 accent-slate-50 "
					/>
					<span className="ml-2 text-xs text-black font-medium">
						Send me NDA
					</span>
				</label>
			</div>

			<div className="mb-6">
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						name="receiveNewsletter"
						checked={formData.receiveNewsletter}
						onChange={handleChange}
						className="form-checkbox h-5 w-5 accent-slate-50"
					/>
					<span className="ml-2 text-xs text-black font-medium">
						I want to receive a monthly tech newsletter
					</span>
				</label>
			</div>

			<button
				type="submit"
				className=" bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
			>
				Send message
			</button>

			<p className="mt-3 text-xs text-gray-500">
				By clicking the button, I agree with the collection and processing of my
				personal data as described in the Privacy Policy.
			</p>
		</form>
	);
};

export default ContactForm;
