function About({
	title,
	color,
	size = "text-base",
	leading = "leading-loose",
}) {
	return (
		<div
			className={`text-center md:text-left ${leading} sm:px-6 md:px-0 ${size} font-light ${color}`}
		>
			{title}
		</div>
	);
}

export default About;
