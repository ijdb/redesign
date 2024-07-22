import ContactForm from "@/components/Form";
import HowItWorks from "@/components/Work";
import React from "react";

function MsgSection() {
	return (
		<div className="grid md:flex px-5 sm:px-8 md:px-16 lg:px-28 md:gap-24 py-12">
			<HowItWorks />
			<ContactForm />
		</div>
	);
}

export default MsgSection;
