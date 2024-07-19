"use client";
import React, { useState } from "react";

const DemoBookingForm = () => {
	const countries = [
		"India",
		"United States",
		"United Kingdom",
		"Canada",
		"Australia",
	];
	const [formData, setFormData] = useState({
		businessEmail: "",
		firstName: "",
		lastName: "",
		phone: "",
		companyName: "",
		country: "",
		zipCode: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Here you would typically send the data to your backend
	};

	return (
		<div className=" bg-purple-100 rounded-2xl border border-purple-600 m-5 ">
			<form className="" onSubmit={handleSubmit}>
				<div>
					<input
						type="email"
						name="businessEmail"
						value={formData.businessEmail}
						onChange={handleChange}
						placeholder="Business email *"
						className="w-full px-4 py-3  border-b rounded-t-2xl border-purple-600 bg-white placeholder-gray-400 text-xs"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						placeholder="First name *"
						className="w-full px-4 py-3  border-b border-purple-600 bg-white placeholder-gray-400 text-xs"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
						placeholder="Last name *"
						className="w-full px-4 py-3  border-b border-purple-600 bg-white placeholder-gray-400 text-xs"
						required
					/>
				</div>
				<div>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Phone *"
						className="w-full px-4 py-3  border-b border-purple-600 bg-white placeholder-gray-400 text-xs"
						required
					/>
				</div>
				<div>
					<input
						type="text"
						name="companyName"
						value={formData.companyName}
						onChange={handleChange}
						placeholder="Company Name *"
						className="w-full px-4 py-3  border-b border-purple-600 bg-white placeholder-gray-400 text-xs"
						required
					/>
				</div>
				<div className="px-4 py-3 bg-white border-b border-purple-600 text-gray-400">
					<select
						name="country"
						value={formData.country}
						onChange={handleChange}
						className="w-full text-xs"
					>
						<option value="">Select a country</option>
						{countries.map((country, index) => (
							<option key={index} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>
				<div>
					<input
						type="text"
						name="zipCode"
						value={formData.zipCode}
						onChange={handleChange}
						placeholder="ZIP code *"
						className="w-full px-4 py-3  border-b border-purple-600 bg-white placeholder-gray-400 text-xs"
						required
					/>
				</div>
				<div className="flex flex-col px-8 py-6 border-b rounded-b-2xl bg-white">
					<button
						type="submit"
						className=" bg-purple-400 text-white px-3 py-2 text-sm rounded-lg font-medium hover:bg-purple-600 transition duration-300"
					>
						Book a demo
					</button>
					<div className="text-[10px] text-gray-500 text-center pt-4">
						By filling out this form you agree to our privacy notice.
					</div>
				</div>
			</form>
		</div>
	);
};

export default DemoBookingForm;
