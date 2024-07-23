import Link from "next/link";

function ServiceSubSection() {
	return (
		<div className="hidden md:flex md:px-16 bg-orange-100 md:gap-5 md:py-8 md:justify-center">
			<Card
				name="Product Discovery"
				text="We help you arrive at a solid understanding of your target market,
				target audience, project scope, needed resources, and the optimal
				business model."
				link="/productSt"
			/>
			<Card
				name="UI/UX design"
				text="Our UI/UX team helps you create well-designed, memorable interfaces based 
                on the real needs and behaviors of your target users."
				link="/services"
			/>
			<Card
				name="MVP app development"
				text="Develop a successful MVP with killer features to gain more traction from 
                early adopters and get your idea funded by investors."
				link="/mobileapp"
			/>
		</div>
	);
}

function Card({ name, text, link }) {
	return (
		<div className="grid w-96 border-2 border-gray-400 rounded-xl p-6 gap-5">
			<div className="text-2xl font-semibold">{name}</div>
			<div className="text-sm tracking-normal leading-relaxed text-gray-700">
				{text}
			</div>
			<Link href={link} className="text-sm font-semibold">
				Explore more
			</Link>
		</div>
	);
}

export default ServiceSubSection;
