function Heading({ title, position = "text-center" }) {
	return (
		<div
			className={`text-red-500 uppercase font-medium ${position} 
			 text-sm sm:text-base md:text-sm tracking-widest`}
		>
			{title}
		</div>
	);
}

export default Heading;
