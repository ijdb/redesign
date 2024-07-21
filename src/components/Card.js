import Image from "next/image";
import React from "react";

function Card({ title, text, bg, icon, self }) {
	return (
		<div
			className={`flex flex-col gap-9 md:gap-5 ${bg} ${self} p-9 md:p-6 rounded-xl`}
		>
			<Image src={icon} />
			<div className="text-left text-2xl md:text-lg font-semibold tracking-wide">
				{title}
			</div>
			<div className="text-left text-gray-600 leading-relaxed md:text-sm md:leading-loose">
				{text}
			</div>
		</div>
	);
}

export default Card;
