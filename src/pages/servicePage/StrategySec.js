import Title from "@/components/Title";
import React from "react";

const stages = [
	{
		number: 1,
		title: "Strategy workshop",
		description:
			"Our UI UX consultants work with you to grasp an understanding of your business goals and your customers' pain points.",
	},
	{
		number: 2,
		title: "Defining user persona",
		description:
			"We put your users under the microscope to detail out the situation in which they would use your software and what they would expect.",
	},
	{
		number: 3,
		title: "Mind mapping",
		description:
			"Here, we make a connection between data and insights to create a menu structure and user journey - ones that are approved by every stakeholder.",
	},
	{
		number: 4,
		title: "Information architecture",
		description:
			"We blueprint your software's features, infrastructure, and hierarchy encompassing navigation, app behavior, content, and flow to give a bird's-eye view to the engineers.",
	},
	{
		number: "5",
		title: "Low-fidelity sketches",
		description:
			"We create prototypes integrating content, navigation, and user-journey for unique requirements. We seek stakeholder feedback to streamline the designs.",
	},
	{
		number: "6",
		title: "High-fidelity sketches",
		description:
			"Upon sketch approval, our UI UX designer create high-fidelity wireframes where screen is detailed in exact shape and style. A click-through prototype is built to map user journey and offer reference to our designers.",
	},
	{
		number: "7",
		title: "Defining UI guidelines",
		description:
			"We finalize typography, color palette, icons, CTA buttons, and UI components merging them with the user-journey into a custom user guide. This empowers developers to work autonomously.",
	},
];

const StrategyWorkshop = () => {
	return (
		<div
			id="StrategyWorkshop"
			className="bg-orange-50 p-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 2xl:px-80 py-14"
		>
			<div className="text-center mb-10">
				<Title
					title="The process merging business strategy & users needs"
					size="text-2xl"
				/>
			</div>
			<div className="sm:px-10">
				{stages.map((stage, index) => (
					<div key={index} className="relative mb-8 last:mb-0">
						<div className="flex items-start">
							<div className="relative mr-4 sm:mr-6">
								<div
									className="bg-orange-100 text-yellow-600 text-[10px] sm:text-xs font-semibold 
								py-3 sm:py-4 px-3 sm:px-4 tracking-wider rounded-lg"
								>
									STAGE {stage.number}
								</div>
								{index < stages.length - 1 && (
									<div className="absolute left-1/2 top-full w-px h-28 sm:h-24 bg-orange-300 -translate-x-1/2 "></div>
								)}
							</div>
							<div className="flex-1">
								<h2 className="font-semibold mb-2 text-sm sm:text-base">
									{stage.title}
								</h2>
								<p className="text-[11px] sm:text-xs text-gray-800 leading-relaxed">
									{stage.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StrategyWorkshop;
