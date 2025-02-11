import About from "@/components/About";
import TechCard from "@/components/TechCard";
import Title from "@/components/Title";
import techRubik from "@/assets/techRubik.svg";
import Image from "next/image";

function Techsection() {
	return (
		<div className="grid gap-7 items-center text-center px-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 py-8 xl:py-16 2xl:py-20  mb-4 bg-purple-800">
			<div className="flex justify-between">
				<div className="flex flex-col md:justify-center gap-7 md:gap-3 md:text-left md:basis-2/5">
					<Title
						title="Offering you cutting-edge technologies"
						color="text-white"
						size="text-3xl md:text-2xl xl:text-3xl"
					/>
					<About
						title="We have worked with all the technology combinations so that you don't have to."
						color="text-white"
						size="sm:text-sm md:text-xs lg:text-sm"
					/>
				</div>
				<div className="hidden md:grid md:w-44 xl:mr-24">
					<Image src={techRubik} alt="" />
				</div>
			</div>

			<div className="flex text-purple-300 text-xs sm:text-sm gap-6 md:hidden">
				<span>Technologies</span>
				<span>Cloud services</span>
				<span>AI Integration</span>
			</div>
			<TechCard />
		</div>
	);
}

export default Techsection;
