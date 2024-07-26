import Image from "next/image";
import phnset from "@/assets/phnset.svg";
import astro from "@/assets/astro.svg";
import fame from "@/assets/fame.svg";
import DemoBookingForm from "@/components/DemoForm";
import DemoFormTwo from "@/components/DemoFormTwo";
import DemoSteps from "@/components/DemoSteps";

function phoneSection() {
	return (
		<>
			<div className="hidden relative min-h-screen md:flex items-center justify-center pt-14">
				<div className="absolute inset-0 w-full overflow-hidden">
					<Image
						src={fame}
						alt=""
						width={100}
						height={100}
						layout="responsive"
					/>
				</div>
				<div className="hidden md:flex md:justify-center md:m-6 z-20 md:pb-20">
					<div className="bg-purple-100 pb-20 border md:border-2 border-purple-300 rounded-2xl basis-3/5">
						<div className="flex items-center pl-6 pr-32">
							<div className="text-purple-900 text-5xl m-2 pr-16 pt-5 font-semibold leading-normal">
								Ready to turn your vision into reality?
							</div>
							<Image src={phnset} alt="" width={200} />
						</div>
						<DemoFormTwo />
						<DemoSteps />
					</div>
					<div className="basis-1/4">
						<DemoBookingForm />
					</div>
				</div>
				<div className="absolute bottom-0 left-28 w-48 h-48 z-20">
					<Image
						src={astro}
						alt="Astronaut"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</div>

			{/* For mobile screens upto small screens */}
			<div className="md:hidden m-5 sm:m-8 border border-purple-800 rounded-2xl bg-purple-100 relative pb-14 mb-24 sm:mb-24">
				<div className="flex items-center px-5">
					<div
						className="text-purple-900 text-2xl sm:text-4xl m-2 sm:m-4 sm:mr-9 
					font-medium leading-normal sm:leading-relaxed"
					>
						Ready to turn your vision into reality?
					</div>
					<Image src={phnset} alt="" />
				</div>
				<DemoBookingForm />
				<DemoFormTwo />
				<DemoSteps />
				<div className="absolute -bottom-24 -left-4 w-40 h-40">
					<Image
						src={astro}
						alt="Astronaut"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</div>
		</>
	);
}

export default phoneSection;
