import About from "@/components/About";
import Heading from "@/components/Heading";
import KnowMore from "@/components/KnowMore";
import Title from "@/components/Title";
import React from "react";

function ServiceSection() {
	return (
		<div className="flex flex-col gap-7 items-center text-center px-5 md:px-16 lg:px-28 xl:px-44 2xl:px-80 py-12 bg-orange-100">
			<Heading title="our services" />
			<Title
				title="Discover how we build revolutionary products"
				padding="px-5"
				size="text-2xl"
			/>
			<About
				title="Atrox helps enterprises and startups take their product ideas from 0 to 100. 
                Our team of ex-Silicon Valley experts help companies from at all stages build cutting edge 
                solutions through product strategy, design and revolutionary engineering."
				size="text-sm"
			/>
			<KnowMore href="/services" />
		</div>
	);
}

export default ServiceSection;
