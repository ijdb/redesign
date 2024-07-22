import Heading from "@/components/Heading";
import MissionCard from "@/components/MissionCard";
import Title from "@/components/Title";
import React from "react";

function SectionThree() {
	return (
		<div
			className="flex flex-col gap-7 md:grid md:grid-cols-2 items-center 
			text-center px-5 sm:px-8 md:px-16 lg:px-28 pt-12 mt-4 mb-4 md:mb-0"
		>
			<div className="flex flex-col gap-7 md:gap-4 md:text-left">
				<Heading title="How it started" position="md:text-left" />
				<Title title="How it all started" />
				<div className="px-4 sm:px-5 md:px-0 text-gray-700 md:text-sm md:leading-loose">
					Akshay and Dipanshu, both with a passion for coding and a thirst for
					entrepreneurship, had been friends since their college days. Their
					paths often crossed in hackathons and coding competitions, where they
					impressed everyone with their complementary skillsets. Akshay, the
					brilliant strategist and problem-solver, could architect complex
					systems with elegance. Dipanshu, the creative coder and interface
					whiz, brought those systems to life with intuitive and user-friendly
					interfaces.
				</div>
			</div>

			<MissionCard
				title="Our Mission"
				text="To power the world's most important workflows."
			/>
		</div>
	);
}

export default SectionThree;
