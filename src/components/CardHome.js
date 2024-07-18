import React from "react";
import Image from "next/image";

function CardHome({ title, text, icon, bg }) {
	return (
		<div
			className={`flex flex-col items-center gap-10 ${bg} rounded-xl px-12 py-6 pb-7`}
		>
			<div>
				<Image src={icon} />
			</div>
			<div className="flex flex-col gap-5">
				<div className="font-semibold text-lg">{title}</div>
				<div className="text-gray-700 text-sm px-3 leading-loose">{text}</div>
			</div>
		</div>
	);
}

export default CardHome;
