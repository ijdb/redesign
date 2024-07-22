import PSone from "@/pages/productStrategy/PSone";
import PSthree from "@/pages/productStrategy/PSthree";
import PStwo from "@/pages/productStrategy/PStwo";
import MsgSection from "@/sections/MsgSection";
import Techsection from "@/sections/TechSection";
import React from "react";

function productStrategyPage() {
	return (
		<div>
			<PSone />
			<PStwo />
			<PSthree />
			<Techsection />
			<MsgSection />
		</div>
	);
}

export default productStrategyPage;
