import About from "@/components/About";
import KnowMore from "@/components/KnowMore";
import Image from "next/image";
import industry1 from "@/assets/industry1.svg";
import industry2 from "@/assets/industry2.svg";
import industry3 from "@/assets/industry3.svg";
import industry4 from "@/assets/industry4.svg";
import industry5 from "@/assets/industry5.svg";
import industry6 from "@/assets/industry6.svg";
import industry7 from "@/assets/industry7.svg";
import industry8 from "@/assets/industry8.svg";
import Title from "@/components/Title";
import TechnologyStack from "@/components/TechStack";

const IndustriesWeWorkWith = () => {
	const industries = [
		{ name: "Healthcare", icon: industry1 },
		{ name: "Insurance", icon: industry2 },
		{ name: "Enterprise", icon: industry3 },
		{ name: "Financial", icon: industry4 },
		{ name: "Non-profit", icon: industry5 },
		{ name: "Technology", icon: industry6 },
		{ name: "Marketing", icon: industry7 },
		{ name: "Pharma", icon: industry8 },
	];

	return (
		<div className="flex flex-col items-center px-6 my-16 text-center gap-5">
			<div className="bg-red-200 flex flex-col items-center text-center gap-5 rounded-2xl p-4 py-8 mb-12 border-2 shadow-inner border-r-8 border-b-8 border-gray-800 ">
				<div className="text-2xl font-semibold px-3">
					Industries that We Work with
				</div>
				<About
					title="Atrox helps enterprises and startups take their product ideas from 0
					to 100. Our team of ex-Silicon Valley experts help companies from at
					all stages build cutting edge solutions through product strategy,
					design and revolutionary engineering."
					size="text-xs"
				/>

				<KnowMore />
				<div className="flex flex-wrap gap-6 justify-center">
					{industries.map((industry, index) => (
						<div key={index} className="flex flex-col items-center">
							<div className="w-8 h-8 mb-2 relative">
								<Image
									src={industry.icon}
									alt={`${industry.name} icon`}
									layout="fill"
									objectFit="contain"
								/>
							</div>
							<span className="text-sm text-center font-medium">
								{industry.name}
							</span>
						</div>
					))}
				</div>
			</div>
			<Title
				title="Converting your idea into a pillar of the startup community"
				size="text-2xl"
			/>
			<About
				title="At  Atrox, we build your digital product idea from the ground
			 	up and make it an investors' favourite. A journey that starts and is embedded 
				with emerging technologies."
				size="text-sm"
			/>
			<TechnologyStack />
		</div>
	);
};

export default IndustriesWeWorkWith;
