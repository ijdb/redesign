import About from "@/components/About";
import Title from "@/components/Title";
import Image from "next/image";
import design1 from "@/assets/design1.svg";
import design2 from "@/assets/design2.svg";
import design3 from "@/assets/design3.svg";
import design4 from "@/assets/design4.svg";
import design5 from "@/assets/design5.svg";
import design6 from "@/assets/design6.svg";

function PStwo() {
	return (
		<div className="flex flex-col gap-5 sm:gap-6 items-center text-center p-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 pt-12">
			<div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:text-left">
				<Title
					title="Digital product strategy services that make your software fail-proof"
					size="md:text-2xl"
					padding="md:pr-20"
				/>
				<About
					title="We treat your digital strategy as a mandate that you would need to invent, reimagine, and innovate 
                    your digital dream. Atrox is the digital product strategy development company that you can trust for 
                    delivering a framework which creates new revenue streams and makes you a pioneer in unique digital offerings."
					size="text-sm md:font-normal"
				/>
			</div>

			<div className="flex flex-col sm:flex-row md:grid md:grid-cols-3 gap-4 lg:gap-6 sm:mt-7 sm:mb-7 md:mb-10">
				<UxCard icon={design1} name="Innovation & strategy" />
				<UxCard icon={design2} name="Business roadmap" />
				<UxCard icon={design3} name="Technical strategy" />
				<UxCard icon={design4} name="Business mapping" />
				<UxCard icon={design5} name="Design revamp" />
				<UxCard icon={design6} name="Design consulting" />
			</div>
		</div>
	);
}
function UxCard({ icon, name }) {
	return (
		<div
			className="flex flex-col justify-between items-start border-2 border-purple-700 bg-purple-50 tracking-widest 
		rounded-2xl w-72 h-72 md:w-64 md:h-64 lg:w-72 lg:h-72 p-5"
		>
			<Image src={icon} alt="" />
			<div className="uppercase text-purple-700 text-sm font-medium">
				{name}
			</div>
		</div>
	);
}

export default PStwo;
