import Link from "next/link";

const Button = ({
	href,
	text = "Explore more",
	color = "bg-red-500",
	textColor = "text-white",
	size = "text-sm",
}) => {
	return (
		<Link href={href}>
			<div
				className={`${color} ${textColor} ${size} cursor-pointer px-8 md:px-5 py-5 md:py-3 tracking-widest 
				font-semibold rounded-md inline-flex items-center justify-center m-4 md:m-0`}
			>
				{text}
				<svg
					className="w-4 h-4 ml-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={3}
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			</div>
		</Link>
	);
};

export default Button;
