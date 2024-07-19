import React from "react";

const BurgerIcon = ({ isOpen, onClick }) => {
	return (
		<button
			className="flex flex-col justify-center items-start w-8 h-8 space-y-1.5 focus:outline-none"
			onClick={onClick}
			aria-label="Toggle menu"
		>
			<span
				className={`w-6 h-0.5 bg-red-500 transition-all duration-300 ease-out 
          ${isOpen ? "rotate-45 translate-y-2" : ""}`}
			></span>
			<span
				className={`w-4 h-0.5 bg-red-500 transition-all duration-300 ease-out
          ${isOpen ? "opacity-0" : ""}`}
			></span>
			<span
				className={`w-6 h-0.5 bg-red-500 transition-all duration-300 ease-out
          ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
			></span>
		</button>
	);
};

export default BurgerIcon;
