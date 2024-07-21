import AboutSection from "@/sections/AboutSection";
import HomeSection from "@/sections/HomeSection";
import IndustriesWeWorkWith from "@/sections/IndustrySection";
import MsgSection from "@/sections/MsgSection";
import ServiceSection from "@/sections/ServiceSection";
import Techsection from "@/sections/TechSection";

function page() {
	return (
		<div>
			<HomeSection />
			<AboutSection />
			<ServiceSection />
			<IndustriesWeWorkWith />
			<Techsection />
			<MsgSection />
		</div>
	);
}

export default page;
