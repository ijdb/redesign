import Heading from "@/components/Heading";
import Title from "@/components/Title";
import psone from "@/assets/psone.svg";
import astronaut from "@/assets/astronaut.svg";
import Image from "next/image";
import Button from "@/components/Button";

function PSone() {
	return (
		<div className="flex flex-col items-center gap-7 bg-orange-50 px-16 lg:px-28 xl:px-44">
			<div className="flex flex-col gap-10 items-center text-center px-14 pt-12">
				<Heading title="PRODUCT STRATEGY" />
				<Title
					title="Digital product strategy helping you reach full digital potential"
					size="text-2xl lg:text-3xl"
					padding="md:px-44"
				/>
				<div className="font-light text-sm leading-loose px-32">
					We are the digital strategy experts that assist you in building a
					digital roadmap that transforms your business and answer key questions
					around continued innovation.
				</div>

				<Button href="#" text="START TODAY" />
			</div>
			<div className="flex">
				<div>
					<Image src={psone} alt="" />
				</div>
				<div>
					<Image src={astronaut} alt="" />
				</div>
			</div>
		</div>
	);
}

export default PSone;
