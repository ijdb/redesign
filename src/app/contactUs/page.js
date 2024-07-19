import PhoneSection from "@/pages/contactUsPage/PhoneSection";
import Footer from "@/sections/FooterSection";
import UniverseSection from "@/sections/UniverseSection";
import React from "react";

function contactPage() {
	return (
		<div className="bg-purple-50">
			<PhoneSection />
			<UniverseSection />
			<Footer />
		</div>
	);
}

export default contactPage;
