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
		// send the data to your backend
	};

	return (
		<div className=" bg-purple-100 rounded-2xl border md:border-4 border-purple-800 m-5 md:-m-10 md:mt-16 sm:m-10">
			<form className="" onSubmit={handleSubmit}>
				<div>
					<input
						type="email"
						name="businessEmail"
						value={formData.businessEmail}
						onChange={handleChange}
						placeholder="Business email *"
						className="w-full px-4 sm:px-6 py-3 sm:py-4 border-b rounded-t-2xl border-purple-600 bg-white 
						placeholder-gray-400 text-xs sm:text-sm"
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
						className="w-full px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-600 bg-white 
						placeholder-gray-400 text-xs sm:text-sm"
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
						className="w-full px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-600 bg-white 
						placeholder-gray-400 text-xs sm:text-sm"
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
						className="w-full px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-600 bg-white 
						placeholder-gray-400 text-xs sm:text-sm"
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
						className="w-full px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-600 bg-white 
						placeholder-gray-400 text-xs sm:text-sm"
						required
					/>
				</div>
				<div
					className="px-4 py-3 sm:px-6 sm:py-4 bg-white border-b border-purple-600 
				text-gray-400"
				>
					<select
						name="country"
						value={formData.country}
						onChange={handleChange}
						className="w-full text-xs sm:text-sm"
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
						className="w-full px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-600 bg-white 
						placeholder-gray-400 text-xs sm:text-sm"
						required
					/>
				</div>
				<div className="flex flex-col sm:flex-row sm:gap-7 md:gap-5 px-8 py-6 md:px-4 border-b rounded-b-2xl bg-white">
					<button
						type="submit"
						className=" bg-purple-400 text-white px-3 py-2 sm:px-2 md:px-1 sm:py-4 text-sm 
						rounded-lg font-medium sm:text-sm hover:bg-purple-600 transition duration-300 sm:w-40 md:w-44"
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
