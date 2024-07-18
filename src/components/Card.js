import Image from "next/image";
import React from "react";

function Card({ title, text, bg, icon }) {
	return (
		<div className={`flex flex-col gap-9 ${bg} p-9 rounded-xl`}>
			<Image src={icon} />
			<div className="text-left text-2xl font-semibold tracking-wide">
				{title}
			</div>
			<div className="text-left text-gray-600 leading-relaxed">{text}</div>
		</div>
	);
}

export default Card;
