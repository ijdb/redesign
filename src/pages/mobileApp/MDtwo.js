import About from "@/components/About";
import Title from "@/components/Title";
import Image from "next/image";
import mdone from "@/assets/mdone.svg";
import mdtwo from "@/assets/mdtwo.svg";
import mdthree from "@/assets/mdthree.svg";
import mdfour from "@/assets/mdfour.svg";
import mdfive from "@/assets/mdfive.svg";
import mdsix from "@/assets/mdsix.svg";

function MDtwo() {
	return (
		<div className="flex flex-col gap-5 sm:gap-6 items-center text-center p-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 pt-12">
			<div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:text-left">
				<Title
					title="Mobile app development services that build viral products"
					size="md:text-2xl"
					padding="md:pr-20"
				/>
				<About
					title="We are an innovation-first custom application development company with a dedicated focus on 
                    building software that aligns with your business goals."
					size="text-sm md:font-normal"
				/>
			</div>

			<div className="flex flex-col sm:flex-row md:grid md:grid-cols-3 gap-4 lg:gap-6 sm:mt-7 sm:mb-7 md:mb-10">
				<UxCard icon={mdone} name="Discovery workshop" />
				<UxCard icon={mdtwo} name="App UI/UX design" />
				<UxCard icon={mdthree} name="Android app development" />
				<UxCard icon={mdfour} name="ios app development" />
				<UxCard icon={mdfive} name="cross-platform app development" />
				<UxCard icon={mdsix} name="pwa development" />
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
			<div className="uppercase text-purple-700 text-sm font-medium text-left">
				{name}
			</div>
		</div>
	);
}

export default MDtwo;
