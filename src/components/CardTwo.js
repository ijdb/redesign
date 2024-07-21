import Image from "next/image";
import React from "react";

function CardTwo({ title, text, icon, color }) {
	return (
		<div className="bg-white rounded-2xl p-7 flex flex-col gap-9 md:gap-4">
			<div className="text-xs text-left leading-7">{text}</div>
			<div className="flex justify-between items-end">
				<div className={`text-2xl font-semibold ${color}`}>{title}</div>
				<Image src={icon} alt="" />
			</div>
		</div>
	);
}

export default CardTwo;
