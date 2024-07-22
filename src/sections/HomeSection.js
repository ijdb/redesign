import About from "@/components/About";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.svg";

function HomeSection() {
	return (
		<div className="flex flex-col sm:flex-row bg-purple-800 pt-12 ">
			<div
				className="flex flex-col items-center md:items-start 
				text-center md:text-left gap-7 xl:gap-10 px-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 md:mb-14"
			>
				<Heading title="product, design and engineering" />
				<Title
					title="Your product partner for tackling 
                	the digital frontier"
					color="text-white"
					size="md:text-3xl xl:text-4xl"
				/>
				<About
					title="Atrox combines strategy, product, design and engineering to build revolutionary 
					digital products and experiences."
					color="text-white"
					size="sm:text-lg md:text-sm xl:text-base"
				/>
				<Button href="/aboutUs" text="LEARN MORE" size="md:text-xs" />
			</div>
			<div className="flex flex-col md:hidden items-center sm:items-end">
				<Image src={banner1} object-fit="contain" alt="banner" />
			</div>
			<div className="hidden md:flex items-end">
				<Image src={banner2} alt="banner" />
			</div>
		</div>
	);
}

export default HomeSection;
