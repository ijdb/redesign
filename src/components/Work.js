const HowItWorks = () => {
	const steps = [
		{
			title: "1. Intro call",
			description:
				"During a 30-minute meeting, our domain expert dives into your business and describes the steps for future collaboration.",
		},
		{
			title: "2. Free discovery workshop",
			description:
				"Together with you, our technical team defines the user flow, feature list, and project risks.",
		},
		{
			title: "3. Project planning",
			description:
				"We provide the implementation plan, timelines and estimations for your project.",
		},
	];

	return (
		<div className="max-w-2xl p-6 md:p-0 md:basis-1/3">
			<h2 className="text-2xl font-bold mb-8 tracking-wider">
				How does it work?
			</h2>
			<div className="space-y-2">
				{steps.map((step, index) => (
					<div key={index} className="flex items-start">
						<div className="flex flex-col items-center mr-5 pt-1">
							<div className="relative w-7 h-7">
								<div className="w-7 h-7 bg-gray-100 rounded-full"></div>
								<div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
							</div>
							{index < steps.length - 1 && (
								<div className="w-0.5 bg-gray-200 h-32 md:h-24 "></div>
							)}
						</div>
						<div>
							<h3 className="text-lg font-semibold">{step.title}</h3>
							<p className="mt-1 text-gray-600 text-sm md:text-xs leading-relaxed md:leading-loose">
								{step.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HowItWorks;
