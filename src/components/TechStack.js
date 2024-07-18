import React from "react";
import Image from "next/image";
import stack1 from "@/assets/stack1.svg";
import stack2 from "@/assets/stack2.svg";
import stack3 from "@/assets/stack3.svg";
import stack4 from "@/assets/stack4.svg";
import stack5 from "@/assets/stack5.svg";
import stack6 from "@/assets/stack6.svg";
import stack7 from "@/assets/stack7.svg";

const TechnologyStack = () => {
	const technologies = [
		{ name: "Artificial Intelligence", icon: stack1 },
		{ name: "AR/VR", icon: stack2 },
		{ name: "Internet of Things", icon: stack3 },
		{ name: "Hire Developers", icon: stack4 },
		{ name: "Robotic Process Automation", icon: stack5 },
		{ name: "Blockchain", icon: stack6 },
		{ name: "Machine Learning", icon: stack7 },
	];

	return (
		<div className="flex flex-wrap justify-center gap-5">
			{technologies.map((tech, index) => (
				<div
					key={index}
					className="flex items-center border border-purple-400 rounded-full px-3 py-5"
				>
					<div className="w-6 h-6 mr-2 relative">
						<Image src={tech.icon} alt="" layout="fill" objectFit="contain" />
					</div>
					<span className="text-xs tracking-wider">{tech.name}</span>
				</div>
			))}
		</div>
	);
};

export default TechnologyStack;
