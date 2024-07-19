import React from "react";

function DemoSteps() {
	const steps = [
		{
			title: "step 1",
			text: "You'll receive an email to acknowledge your inquiry and schedule a call.",
		},
		{
			title: "step 2",
			text: "You'll receive an email to acknowledge your inquiry and schedule a call.",
		},
		{
			title: "step 3",
			text: "You'll receive an email to acknowledge your inquiry and schedule a call.",
		},
	];

	return (
		<div className="text-purple-900 px-5 py-6">
			<h2 className="text-lg font-medium  mb-6">What to expect</h2>

			<div className="flex flex-col gap-3">
				{steps.map((step) => (
					<>
						<div className="uppercase font-bold tracking-wider">
							{step.title}
						</div>
						<div className="text-xs leading-6 w-60">{step.text}</div>
					</>
				))}
			</div>
		</div>
	);
}

export default DemoSteps;
