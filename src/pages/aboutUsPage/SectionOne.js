import About from "@/components/About";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import React from "react";
import Vector from "@/assets/Vector.png";
import Image from "next/image";

function SectionOne() {
	return (
		<div className="flex flex-col gap-7 items-center text-center px-5 pt-12 ">
			<Heading title="About us" />
			<Title title="Turning potential into growth." />
			<About
				title="We understand that your business is dynamic and it 
            needs a whole new lens to be seen from. Together, we can make an impact."
				color="text-black"
			/>
			{/* <Button href="/" text="LEARN MORE" /> */}
			<Image src={Vector} alt="universe" />
		</div>
	);
}

export default SectionOne;
