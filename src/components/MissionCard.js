import Image from "next/image";
import React from "react";
import arrow from "@/assets/arrow.svg";

function MissionCard({ title, text }) {
	return (
		<div className="flex flex-col gap-7 bg-purple-600 text-white text-left p-12 border-none rounded-xl ">
			<div className="uppercase text-xs font-semibold tracking-widest">
				{title}
			</div>
			<div className="text-2xl font-semibold tracking-wider w-60 leading-loose">
				{text}
			</div>
			<Image src={arrow} />
		</div>
	);
}

export default MissionCard;
