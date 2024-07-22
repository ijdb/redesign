import MDone from "@/pages/mobileApp/MDone";
import MDthree from "@/pages/mobileApp/MDthree";
import MDtwo from "@/pages/mobileApp/MDtwo";
import MsgSection from "@/sections/MsgSection";
import Techsection from "@/sections/TechSection";
import React from "react";

function page() {
	return (
		<div>
			<MDone />
			<MDtwo />
			<MDthree />
			<Techsection />
			<MsgSection />
		</div>
	);
}

export default page;
