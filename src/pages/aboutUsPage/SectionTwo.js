import Card from "@/components/Card";
import Title from "@/components/Title";
import React from "react";
import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";

function SectionTwo() {
	return (
		<div className="flex flex-col gap-7 items-center text-center px-5 sm:px-8 pt-12 mt-4 mb-4">
			<Title title="Diversity, Equity, Inclusion" />
			<Card
				title="Embracing Innovation"
				text="We constantly push boundaries, think outside the box, 
                and explore new possibilities to deliver cutting-edge solutions for 
                our clients."
				bg="bg-purple-50"
				icon={icon1}
			/>
			<Card
				title="Collaborative Spirit"
				text="By working closely with our clients,embracing their vision, and 
                leveraging our collective expertise, we create meaningful partnerships"
				bg="bg-orange-100"
				icon={icon2}
			/>
			<Card
				title="Embracing Innovation"
				text="We constantly push boundaries, think outside the box, and explore 
                new possibilities to deliver cutting-edge solutions for our clients."
				bg="bg-purple-50"
				icon={icon3}
			/>
		</div>
	);
}

export default SectionTwo;
