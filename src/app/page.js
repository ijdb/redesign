import AboutSection from "@/sections/AboutSection";
import HomeSection from "@/sections/HomeSection";
import IndustriesWeWorkWith from "@/sections/IndustrySection";
import MsgSection from "@/sections/MsgSection";
import ServiceSection from "@/sections/ServiceSection";
import ServiceSubSection from "@/sections/ServiceSubSection";
import Techsection from "@/sections/TechSection";

function page() {
	return (
		<div>
			<HomeSection />
			<AboutSection />
			<ServiceSection />
			<ServiceSubSection />
			<IndustriesWeWorkWith />
			<Techsection />
			<MsgSection />
		</div>
	);
}

export default page;
