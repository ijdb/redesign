function Title({ title, color, padding = "px-7", size = "text-3xl" }) {
	return (
		<div className={`font-semibold  tracking-wide ${padding} ${color} ${size}`}>
			{title}
		</div>
	);
}

export default Title;
