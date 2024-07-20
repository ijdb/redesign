import About from "@/components/About";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import CardHome from "@/components/CardHome";
import cardicon1 from "@/assets/cardicon1.svg";
import cardicon2 from "@/assets/cardicon2.svg";
import cardicon3 from "@/assets/cardicon3.svg";
import KnowMore from "@/components/KnowMore";

function AboutSection() {
	return (
		<div className="flex flex-col gap-7 items-center text-center px-5 sm:px-8 py-12">
			<Heading title="who are we" />
			<Title
				title="Building digital products from scratch"
				color="text-black"
				padding="px-5"
			/>
			<About
				title="We're a team of product managers, engineers and designers 
            passionate about helping companies create products that bring joy, scale and succeed. 
            It's simple- our goal is to create revolutionary products, together."
			/>
			<KnowMore href="/aboutUs" />
			<CardHome
				title="Assured proficiency"
				text="Our interdisciplinary team brings Silicon Valley design and
					development practices to the rest of the world."
				icon={cardicon1}
				bg="bg-purple-50"
			/>
			<CardHome
				title="Swift rollout"
				text="We ship on time, without compromising on user- experience, quality or the budget."
				icon={cardicon2}
				bg="bg-red-100"
			/>
			<CardHome
				title="You-focused"
				text="You are a partner, not a client. We work together to build revolutionary products and everything."
				icon={cardicon3}
				bg="bg-purple-50"
			/>
		</div>
	);
}

export default AboutSection;
