import About from "@/components/About";
import Heading from "@/components/Heading";
import KnowMore from "@/components/KnowMore";
import Title from "@/components/Title";
import React from "react";

function ServiceSection() {
	return (
		<div
			className="flex flex-col gap-7 md:flex md:flex-row md:justify-between items-center text-center px-5 md:px-16 
			lg:px-28 xl:px-44 2xl:px-80 py-12 bg-orange-100"
		>
			<div className="flex flex-col gap-7 md:gap-4 md:items-start md:basis-3/5 md:text-left">
				<Heading title="our services" />
				<Title
					title="Discover how we build revolutionary products"
					padding="px-5 md:pr-10"
					size="text-2xl"
				/>
			</div>
			<div className="flex flex-col gap-7 md:gap-4 md:items-start md:basis-2/5">
				<About
					title="Atrox helps enterprises and startups take their product ideas from 0 to 100. 
                Our team of ex-Silicon Valley experts help companies from at all stages build cutting edge 
                solutions through product strategy, design and revolutionary engineering."
					size="text-sm"
				/>
				<KnowMore href="/services" />
			</div>
		</div>
	);
}

export default ServiceSection;
