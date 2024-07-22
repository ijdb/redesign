import Title from "@/components/Title";

const stages = [
	{
		number: "1",
		title: "Discovery Strategy",
		description:
			"We analyze your business from multiple angles, right from the business model, user persona to competition analysis and technological ecosystem.",
	},
	{
		number: "2",
		title: "Product design",
		description:
			"We put your users under the microscope to detail out the situation in which they would use your software and what they would expect.",
	},
	{
		number: "3",
		title: "Engineering",
		description:
			"Here, we make a connection between data and insights to create a menu structure and user journey - ones that are approved by every stakeholder.",
	},
	{
		number: "4",
		title: "Testing and quality assurance",
		description:
			"We blueprint your software's features, infrastructure, and hierarchy encompassing navigation, app behavior, content, and flow to give a bird's-eye view to the engineers.",
	},
	{
		number: "5",
		title: "Deployment and Launch",
		description:
			"We create prototypes integrating content, navigation, and user-journey for unique requirements. We seek stakeholder feedback to streamline the designs.",
	},
	{
		number: "6",
		title: "Post-launch maintenance",
		description:
			"Upon sketch approval, our UI UX designer create high-fidelity wireframes where screen is detailed in exact shape and style. A click-through prototype is built to map user journey and offer reference to our designers.",
	},
];

function MDthree() {
	return (
		<div
			id="StrategyWorkshop"
			className="bg-orange-50 p-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 py-14"
		>
			<div className="text-center mb-10">
				<Title title="From idea to mass success" size="text-2xl" />
			</div>
			<div className="">
				{stages.map((stage, index) => (
					<div key={index} className="relative mb-8 last:mb-0">
						<div className="flex items-start">
							<div className="relative mr-8">
								<div className="bg-orange-100 text-yellow-600 text-xs font-semibold py-4 px-4 tracking-wider rounded-lg">
									STAGE {stage.number}
								</div>
								{index < stages.length - 1 && (
									<div className="absolute left-1/2 top-full w-px h-28 bg-orange-300 -translate-x-1/2 "></div>
								)}
							</div>
							<div className="flex-1">
								<h2 className="font-semibold mb-2">{stage.title}</h2>
								<p className="text-sm text-gray-800 leading-relaxed">
									{stage.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MDthree;
