import ServiceSecOne from "@/pages/servicePage/ServiceSecOne";
import ServiceSecTwo from "@/pages/servicePage/ServiceSecTwo";
import StrategyWorkshop from "@/pages/servicePage/StrategySec";
import MsgSection from "@/sections/MsgSection";
import Techsection from "@/sections/TechSection";
import React from "react";

function servicePage() {
	return (
		<div>
			<ServiceSecOne />
			<ServiceSecTwo />
			<StrategyWorkshop />
			<Techsection />
			<MsgSection />
		</div>
	);
}

export default servicePage;
