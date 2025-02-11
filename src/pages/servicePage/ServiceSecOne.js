import Heading from "@/components/Heading";
import Title from "@/components/Title";
import serviceux from "@/assets/serviceux.svg";
import Image from "next/image";
import Button from "@/components/Button";

function ServiceSecOne() {
	return (
		<div className="flex flex-col items-center bg-purple-50 sm:px-8 md:px-16 lg:px-28 xl:px-44">
			<div className="flex flex-col gap-5 items-center text-center px-5 pt-12">
				<Heading title="UI UX DESIGN COMPANY" />
				<Title
					title="Your UI UX design company for unforgettable experiences"
					size="text-2xl lg:text-3xl"
					padding="px-6"
				/>
				<div className="font-light text-sm leading-loose lg:px-10">
					We are the UI UX design agency that merges design capabilities with
					technical expertise to design immersive digital products.
				</div>

				<Button href="#StrategyWorkshop" text="LEARN MORE" />
			</div>
			<Image src={serviceux} alt="" />
		</div>
	);
}

export default ServiceSecOne;
