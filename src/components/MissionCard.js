import Image from "next/image";
import React from "react";
import arrow from "@/assets/arrow.svg";

function MissionCard({ title, text }) {
	return (
		<div
			className="flex flex-col gap-7 bg-purple-600 text-white text-left 
			p-10 ml-5 mr-5 sm:p-8 border-none rounded-xl xl:justify-self-end "
		>
			<div className="uppercase text-xs font-semibold tracking-widest">
				{title}
			</div>
			<div className="text-2xl md:text-3xl font-semibold tracking-wider w-60 md:w-72 leading-loose md:leading-10">
				{text}
			</div>
			<Image src={arrow} alt="" />
		</div>
	);
}

export default MissionCard;
