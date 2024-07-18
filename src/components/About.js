function About({ title, color }) {
	return (
		<div className={`text-center leading-loose text-base font-light ${color}`}>
			{title}
		</div>
	);
}

export default About;
