import React from "react";

const BurgerIcon = () => {
	return (
		<button className="flex flex-col justify-center items-start w-8 h-8 space-y-1.5 focus:outline-none">
			<span className="w-6 h-0.5 bg-red-500"></span>
			<span className="w-4 h-0.5 bg-red-500"></span>
			<span className="w-6 h-0.5 bg-red-500"></span>
		</button>
	);
};

export default BurgerIcon;
