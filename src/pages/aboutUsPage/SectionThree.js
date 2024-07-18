import Heading from "@/components/Heading";
import MissionCard from "@/components/MissionCard";
import Title from "@/components/Title";
import React from "react";

function SectionThree() {
	return (
		<div className="flex flex-col gap-7 items-center text-center px-5 pt-12 mt-4 mb-4">
			<Heading title="How it started" />
			<Title title="How it all started" />
			<div className="px-3">
				Akshay and Dipanshu, both with a passion for coding and a thirst for
				entrepreneurship, had been friends since their college days. Their paths
				often crossed in hackathons and coding competitions, where they
				impressed everyone with their complementary skillsets. Akshay, the
				brilliant strategist and problem-solver, could architect complex systems
				with elegance. Dipanshu, the creative coder and interface whiz, brought
				those systems to life with intuitive and user-friendly interfaces.
			</div>
			<MissionCard
				title="Our Mission"
				text="To power the world's most important workflows."
			/>
		</div>
	);
}

export default SectionThree;
