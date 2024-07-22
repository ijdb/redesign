import Heading from "@/components/Heading";
import Title from "@/components/Title";
import mdbanner from "@/assets/mdbanner.svg";
import Image from "next/image";
import Button from "@/components/Button";

function MDone() {
	return (
		<div className="flex flex-col items-center gap-7 bg-orange-50 px-16 lg:px-28 xl:px-44">
			<div className="flex flex-col gap-10 items-center text-center px-14 pt-12">
				<Heading title="MOBILE APP DEVELOPMENT" />
				<Title
					title="The mobile app development company that builds innovative solutions"
					size="text-2xl lg:text-3xl"
					padding="md:px-44"
				/>
				<div className="font-light text-sm leading-loose px-32">
					Taking your ideas to the global smartphone market with an intuitive,
					user-first mobile application.
				</div>

				<Button href="#" text="START TODAY" />
			</div>
			<div className="flex justify-center w-2/3">
				<Image src={mdbanner} alt="" />
			</div>
		</div>
	);
}

export default MDone;
