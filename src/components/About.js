function About({ title, color, size = "text-base" }) {
	return (
		<div
			className={`text-center leading-loose sm:px-6 ${size} font-light ${color}`}
		>
			{title}
		</div>
	);
}

export default About;
