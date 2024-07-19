import AboutSection from "@/sections/AboutSection";
import Footer from "@/sections/FooterSection";
import HomeSection from "@/sections/HomeSection";
import IndustriesWeWorkWith from "@/sections/IndustrySection";
import MsgSection from "@/sections/MsgSection";
import Navbar from "@/sections/Navbar";
import ServiceSection from "@/sections/ServiceSection";
import Techsection from "@/sections/TechSection";
import UniverseSection from "@/sections/UniverseSection";

function page() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<HomeSection />
			<AboutSection />
			<ServiceSection />
			<IndustriesWeWorkWith />
			<Techsection />
			<MsgSection />
			<UniverseSection />
			<Footer />
		</div>
	);
}

export default page;
