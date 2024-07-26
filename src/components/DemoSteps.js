import React from "react";

function DemoSteps() {
	const steps = [
		{
			title: "step 1",
			text: "You'll receive an email to acknowledge your inquiry and schedule a call.",
		},
		{
			title: "step 2",
			text: "We will discuss your project requirements and gather necessary details.",
		},
		{
			title: "step 3",
			text: "You'll receive a tailored proposal with our approach, timeline, and costs.",
		},
	];

	return (
		<div className="text-purple-900 px-5 sm:px-9 py-6 ">
			<h2 className="text-lg sm:text-2xl font-semibold mb-10 border-t-2 border-purple-300 pt-5 mr-20">
				What to expect
			</h2>

			<div className="flex flex-col sm:flex-row gap-3 md:gap-10">
				{steps.map((step) => (
					<div key={step.title} className="flex flex-col gap-5 md:gap-7">
						<div className="uppercase font-bold tracking-wider">
							{step.title}
						</div>
						<div className="text-sm leading-6 w-60 sm:w-40 md:w-36">
							{step.text}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default DemoSteps;
