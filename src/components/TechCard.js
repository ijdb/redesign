import React from "react";
import tech1 from "@/assets/tech1.svg";
import tech2 from "@/assets/tech2.svg";
import tech3 from "@/assets/tech3.svg";
import tech4 from "@/assets/tech4.svg";
import tech5 from "@/assets/tech5.svg";
import tech6 from "@/assets/tech6.svg";
import tech7 from "@/assets/tech7.svg";
import tech8 from "@/assets/tech8.svg";
import tech9 from "@/assets/tech9.svg";
import tech10 from "@/assets/tech10.svg";
import tech11 from "@/assets/tech11.svg";
import tech12 from "@/assets/tech12.svg";
import tech13 from "@/assets/tech13.svg";
import tech14 from "@/assets/tech14.svg";
import tech15 from "@/assets/tech15.svg";
import tech16 from "@/assets/tech16.svg";
import tech17 from "@/assets/tech17.svg";
import tech18 from "@/assets/tech18.svg";
import tech19 from "@/assets/tech19.svg";
import Image from "next/image";

function TechCard() {
	const techIcons = [
		tech1,
		tech2,
		tech3,
		tech4,
		tech5,
		tech6,
		tech7,
		tech8,
		tech9,
		tech10,
		tech11,
		tech12,
		tech13,
		tech14,
		tech15,
		tech16,
		tech17,
		tech18,
		tech19,
	];
	return (
		<div className="flex flex-wrap gap-2 justify-center">
			{techIcons.map((icon) => (
				<div className="flex justify-center items-center bg-white w-24 h-10 sm:w-20 md:w-24 sm:h-9 md:h-10 rounded-lg border-none">
					<Image src={icon} alt="" />
				</div>
			))}
		</div>
	);
}

export default TechCard;
