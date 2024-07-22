import React from "react";
import Image from "next/image";

function CardHome({ title, text, icon, bg }) {
	return (
		<div
			className={`flex flex-col md:grid md:auto-rows-auto items-center md:items-start gap-10 md:gap-2 ${bg} 
			rounded-xl px-12 md:p-4 xl:p-6 py-6 pb-7 md:text-left md:w-10/12 sm:py-8`}
		>
			<div className="md:w-28">
				<Image src={icon} alt="" />
			</div>
			<div className="flex flex-col gap-5">
				<div className="font-semibold text-lg sm:text-xl md:text-base ">
					{title}
				</div>
				<div
					className="text-gray-700 text-sm sm:text-base px-3 md:px-0 
					leading-loose md:leading-6 md:text-xs md:w-9/12 "
				>
					{text}
				</div>
			</div>
		</div>
	);
}

export default CardHome;
