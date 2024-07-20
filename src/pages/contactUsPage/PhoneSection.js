import Image from "next/image";
import phnset from "@/assets/phnset.svg";
import astro from "@/assets/astro.svg";
import DemoBookingForm from "@/components/DemoForm";
import DemoFormTwo from "@/components/DemoFormTwo";
import DemoSteps from "@/components/DemoSteps";

function phoneSection() {
	return (
		<div className="m-5 sm:m-8 border border-purple-800 rounded-2xl bg-purple-100 relative pb-14 mb-24 sm:mb-24">
			<div className="flex items-center px-5">
				<div
					className="text-purple-900 text-2xl sm:text-4xl m-2 sm:m-4 sm:mr-9 
					font-medium leading-normal sm:leading-relaxed"
				>
					Ready to turn your vision into reality?
				</div>
				<Image src={phnset} />
			</div>
			<DemoBookingForm />
			<DemoFormTwo />
			<DemoSteps />
			<div className="absolute -bottom-24 -left-4 w-40 h-40">
				<Image src={astro} alt="Astronaut" layout="fill" objectFit="contain" />
			</div>
		</div>
	);
}

export default phoneSection;
