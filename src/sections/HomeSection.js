import About from "@/components/About";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import banner1 from "@/assets/banner1.png";

function HomeSection() {
	return (
		<div className="bg-purple-800 flex flex-col gap-7 items-center text-center px-5 pt-12">
			<Heading title="product, design and engineering" />
			<Title
				title="Your product partner for tackling 
                the digital frontier"
				color="text-white"
			/>
			<About
				title="Atrox combines strategy, 
            product, design and engineering to build 
            revolutionary digital products and experiences."
				color="text-white"
			/>
			<Button href="/" text="LEARN MORE" />
			<Image src={banner1} alt="banner" />
		</div>
	);
}

export default HomeSection;
