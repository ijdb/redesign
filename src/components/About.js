function About({ title, color, size = "text-base" }) {
	return (
		<div
			className={`text-center md:text-left leading-loose sm:px-6 md:px-0 ${size} font-light ${color}`}
		>
			{title}
		</div>
	);
}

export default About;
