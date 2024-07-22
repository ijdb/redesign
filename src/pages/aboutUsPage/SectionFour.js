import CardTwo from "@/components/CardTwo";
import Title from "@/components/Title";
import React from "react";
import icon4 from "@/assets/icon4.svg";
import icon5 from "@/assets/icon5.svg";
import icon6 from "@/assets/icon6.svg";

function SectionFour() {
	return (
		<div
			className="flex flex-col gap-7 items-center text-center px-5 sm:px-8 md:px-16 lg:px-28 xl:px-44 2xl:px-80
			pb-8 pt-12 mt-14 bg-orange-100"
		>
			<Title title="Diversity, Equity, Inclusion" size="md:text-2xl" />
			<div className="flex flex-col gap-7 md:flex md:flex-row">
				<CardTwo
					title="Simplicity"
					text="We strive for our product, processes, and customer interactions to be as simple, 
                straightforward, and understandable as possible. In everything we do, we try to remove the unnecessary 
                barriers andfriction, focusing on the most important and impactful work."
					icon={icon4}
					color="text-purple-900"
				/>
				<CardTwo
					title="Speed"
					text="We are quick to ship, to respond, and to act. Speed is critical, however, it's irrelevant if applied 
                in a haphazard way. We must take ownership, execute with purpose, collect feedback, and iterate. In this way, 
                speed becomes velocity and momentum."
					icon={icon5}
					color="text-orange-600"
				/>
				<CardTwo
					title="Soundness"
					text="We're determined to achieve our mission and goals, but we want to be proud of HOW we achieve them. Doing 
                the right thing for our customers and teammates is what truly sets Tines apart. We believe in giving people the 
                benefit of the doubt. We demonstrate transparency."
					icon={icon6}
					color="text-purple-900"
				/>
			</div>
		</div>
	);
}

export default SectionFour;
