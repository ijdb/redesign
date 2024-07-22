import About from "@/components/About";
import Title from "@/components/Title";
import Image from "next/image";
import ux1 from "@/assets/ux1.svg";
import ux2 from "@/assets/ux2.svg";
import ux3 from "@/assets/ux3.svg";
import ux4 from "@/assets/ux4.svg";
import ux5 from "@/assets/ux5.svg";
import ux6 from "@/assets/ux6.svg";

function ServiceSecTwo() {
	return (
		<div className="flex flex-col gap-5 sm:gap-6 items-center text-center p-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 2xl:px-80 pt-12">
			<Title
				title="Services that transform businesses through design innovation"
				size="text-2xl sm:text-3xl"
				padding="px-5"
			/>
			<About
				title="We are the UI UX design studio that excels at making human-centered 
            designs which convert browsers into buyers frictionlessly. From revamping legacy digital 
            products to creating new designs, we are capable of tackling every use case."
				size="text-sm font-medium"
			/>

			<div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-4 sm:mt-7 sm:mb-7">
				<UxCard icon={ux1} name="UX audit" />
				<UxCard icon={ux2} name="Brand storytelling" />
				<UxCard icon={ux3} name="Interface design" />
				<UxCard icon={ux4} name="Experience design" />
				<UxCard icon={ux5} name="Design revamp" />
				<UxCard icon={ux6} name="Design consulting" />
			</div>
		</div>
	);
}
function UxCard({ icon, name }) {
	return (
		<div className="flex flex-col justify-between items-start border-2 border-purple-700 bg-purple-50 rounded-2xl w-72 h-72 p-5">
			<Image src={icon} alt="" />
			<div className="uppercase text-purple-700 font-medium">{name}</div>
		</div>
	);
}

export default ServiceSecTwo;
