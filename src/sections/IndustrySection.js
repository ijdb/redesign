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
		<div className="flex flex-col items-center px-6 sm:px-8 md:px-16 lg:px-28 xl:px-44 my-16 text-center gap-7 md:gap-5">
			<div
				className="bg-red-200 flex flex-col sm:flex-row items-center text-center md:text-left gap-6 
			rounded-2xl p-4 md:p-14 xl:mx-16 py-8 mb-12 border-2 md:border-4 shadow-inner border-r-8 md:border-r-8 border-b-8 md:border-b-8 border-gray-800 "
			>
				<div className="flex flex-col gap-5 sm:basis-1/2 md:basis-2/5 md:mr-10">
					<div className="text-2xl xl:text-3xl font-semibold px-3 md:px-0">
						Industries that We Work with
					</div>
					<About
						title="Atrox helps enterprises and startups take their product ideas from 0
					to 100. Our team of ex-Silicon Valley experts help companies from at
					all stages build cutting edge solutions through product strategy,
					design and revolutionary engineering."
						size="text-xs xl:text-sm"
						leading="xl:leading-loose"
					/>
					<div className="sm:hidden">
						<KnowMore href="/services" />
					</div>
				</div>

				<div className="flex flex-wrap sm:basis-1/2 md:grid md:grid-cols-2 gap-6 justify-center">
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
			<div className="flex flex-col gap-7 md:gap-10 md:flex md:flex-row md:text-left xl:mx-16 ">
				<Title
					title="Converting your idea into a pillar of the startup community"
					size="text-2xl md:text-xl xl:text-2xl"
				/>
				<About
					title="At  Atrox, we build your digital product idea from the ground
			 	up and make it an investors' favourite. A journey that starts and is embedded 
				with emerging technologies."
					size="text-sm md:text-xs xl:text-sm"
					leading="lg:leading-loose xl:leading-loose"
				/>
			</div>

			<TechnologyStack />
		</div>
	);
};

export default IndustriesWeWorkWith;
