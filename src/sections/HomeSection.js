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
		<div className="bg-purple-800 pt-12">
			<div className="flex flex-col items-center text-center gap-7 px-5 sm:px-8">
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
					size="sm:text-lg"
				/>
				<Button href="/aboutUs" text="LEARN MORE" />
			</div>
			<div className="flex flex-col items-center sm:items-end">
				<Image src={banner1} object-fit="contain" alt="banner" />
			</div>
			{/* <Image src={banner2} alt="banner" /> */}
		</div>
	);
}

export default HomeSection;
