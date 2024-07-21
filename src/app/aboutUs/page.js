import Gallery from "@/pages/aboutUsPage/Gallery";
import SectionFour from "@/pages/aboutUsPage/SectionFour";
import SectionOne from "@/pages/aboutUsPage/SectionOne";
import SectionThree from "@/pages/aboutUsPage/SectionThree";
import SectionTwo from "@/pages/aboutUsPage/SectionTwo";
import Footer from "@/sections/FooterSection";
import MsgSection from "@/sections/MsgSection";
import Techsection from "@/sections/TechSection";
import React from "react";

function aboutPage() {
	return (
		<div>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<Gallery />
			<SectionFour />
			<Techsection />
			<MsgSection />
		</div>
	);
}

export default aboutPage;
