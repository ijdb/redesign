function Title({ title, color }) {
	return (
		<div className={`text-3xl font-semibold  tracking-wide px-7 ${color}`}>
			{title}
		</div>
	);
}

export default Title;
