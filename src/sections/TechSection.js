import About from "@/components/About";
import TechCard from "@/components/TechCard";
import Title from "@/components/Title";
import React from "react";

function Techsection() {
	return (
		<div className="flex flex-col gap-7 items-center text-center px-5 py-8  mb-4 bg-purple-800">
			<Title
				title="Offering you cutting-edge technologies"
				color="text-white"
			/>
			<About
				title="We have worked with all the technology combinations so that you don't have to."
				color="text-white"
			/>
			<div className="flex text-purple-300 text-xs gap-6">
				<span>Technologies</span>
				<span>Cloud services</span>
				<span>AI Integration</span>
			</div>
			<TechCard />
		</div>
	);
}

export default Techsection;
