import About from "@/components/About";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import React from "react";

import Vector2 from "@/assets/Vector2.svg";
import Image from "next/image";

function SectionOne() {
	return (
		<div
			className="grid gap-7 md:grid md:grid-cols-2 items-center text-center md:text-left px-5 
		sm:px-8 md:px-16 lg:px-28 xl:px-44 2xl:px-80 pt-12 "
		>
			<div className="flex flex-col gap-7">
				<Heading title="About us" position="md:text-left" />
				<Title title="Turning potential into growth." />
				<About
					title="We understand that your business is dynamic and it 
            		needs a whole new lens to be seen from. Together, we can make an impact."
					color="text-black"
				/>
			</div>
			{/* <Button href="/" text="LEARN MORE" /> */}

			<div className="">
				<Image src={Vector2} alt="universe" />
			</div>
		</div>
	);
}

export default SectionOne;
