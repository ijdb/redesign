import ContactForm from "@/components/Form";
import HowItWorks from "@/components/Work";
import React from "react";

function MsgSection() {
	return (
		<div className="px-5 sm:px-8 py-12">
			<HowItWorks />
			<ContactForm />
		</div>
	);
}

export default MsgSection;
