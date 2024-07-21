import About from "@/components/About";
import Title from "@/components/Title";
import React from "react";
import universe from "@/assets/universe.svg";
import Image from "next/image";
import Button from "@/components/Button";

function UniverseSection() {
	return (
		<div className="flex flex-col gap-7 items-center text-center px-5 sm:px-8 md:px-16 py-8  bg-purple-950">
			<Title title="Open the door to a new universe" color="text-white" />
			<div className="text-white">
				Atrox combines strategy, product, design and engineering to build
				revolutionary digital products and experiences.
			</div>
			<Button href="/aboutUs" text="LEARN MORE" />
			<Image src={universe} className="mt-12" />
		</div>
	);
}

export default UniverseSection;
