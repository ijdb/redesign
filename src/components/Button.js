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
				className={`${color} ${textColor} ${size} px-8 py-5 tracking-widest font-semibold rounded-md inline-flex items-center justify-center m-4`}
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
