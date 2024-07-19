import ServiceSecOne from "@/pages/servicePage/ServiceSecOne";
import ServiceSecTwo from "@/pages/servicePage/ServiceSecTwo";
import StrategyWorkshop from "@/pages/servicePage/StrategySec";
import Footer from "@/sections/FooterSection";
import MsgSection from "@/sections/MsgSection";
import Techsection from "@/sections/TechSection";
import UniverseSection from "@/sections/UniverseSection";
import React from "react";

function servicePage() {
	return (
		<div>
			<ServiceSecOne />
			<ServiceSecTwo />
			<StrategyWorkshop />
			<Techsection />
			<MsgSection />
			<UniverseSection />
			<Footer />
		</div>
	);
}

export default servicePage;
