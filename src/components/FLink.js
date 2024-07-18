import React from "react";
import Link from "next/link";

function FLink({ text, href }) {
	return (
		<>
			<Link href={href} className="uppercase text-xs hover:text-white">
				{text}
			</Link>
		</>
	);
}

export default FLink;
