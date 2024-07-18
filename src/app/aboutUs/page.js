import SectionFour from "@/pages/aboutUsPage/SectionFour";
import SectionOne from "@/pages/aboutUsPage/SectionOne";
import SectionThree from "@/pages/aboutUsPage/SectionThree";
import SectionTwo from "@/pages/aboutUsPage/SectionTwo";
import Footer from "@/sections/FooterSection";
import MsgSection from "@/sections/MsgSection";
import Techsection from "@/sections/TechSection";
import UniverseSection from "@/sections/UniverseSection";

import React from "react";

function aboutPage() {
	return (
		<div>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<Techsection />
			<MsgSection />
			<UniverseSection />
			<Footer />
		</div>
	);
}

export default aboutPage;
