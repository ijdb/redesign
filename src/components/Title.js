function Title({ title, color, padding = "px-7", size = "text-3xl" }) {
	return (
		<div
			className={`font-semibold tracking-wide sm:tracking-wider sm:px-8 md:px-0 ${padding} ${color} ${size}`}
		>
			{title}
		</div>
	);
}

export default Title;
