import Image from "next/image";
import phnset from "@/assets/phnset.svg";
import astro from "@/assets/astro.svg";
import fame from "@/assets/fame.svg";
import DemoBookingForm from "@/components/DemoForm";
import DemoFormTwo from "@/components/DemoFormTwo";
import DemoSteps from "@/components/DemoSteps";

function PhoneSectiontwo() {
	return (
		<div className="relative min-h-screen bg-purple-100 flex items-center justify-center p-4">
			{/* Background pattern */}
			<div className="absolute inset-0 overflow-hidden">
				<Image src={fame} alt="" layout="fill" objectFit="cover" />
			</div>

			{/* Main content */}
			<div className="relative bg-purple-50 rounded-3xl shadow-xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row">
				{/* Left section */}
				<div className="md:w-2/3 p-8 relative">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-purple-900 text-4xl font-medium leading-tight mr-4">
							Ready to turn your vision into reality?
						</h2>
						<Image src={phnset} alt="Phone set" width={100} height={100} />
					</div>
					<div className="mb-8">
						<h3 className="text-purple-900 font-medium mb-4">Contact us:</h3>
						<p className="text-purple-900">94612-19922</p>
						<p className="text-purple-900">hello@arrox.io</p>
						<p className="text-purple-900">
							JMD Megapolis, Sector 48, Gurgaon, Haryana
						</p>
					</div>
					<DemoSteps />
					{/* Folded corner effect */}
					<div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-t-purple-200 border-r-white"></div>
				</div>

				{/* Right section */}
				<div className="md:w-1/3 bg-white p-8">
					<DemoBookingForm />
				</div>
			</div>

			{/* Astronaut image */}
			<div className="absolute bottom-4 left-4 w-32 h-32">
				<Image src={astro} alt="Astronaut" layout="fill" objectFit="contain" />
			</div>
		</div>
	);
}

export default PhoneSectiontwo;
