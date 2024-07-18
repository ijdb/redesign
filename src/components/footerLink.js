import React from "react";
import Link from "next/link";

function footerLink({ text, href }) {
	return (
		<>
			<Link href={href} className="hover:text-white">
				{text}
			</Link>
		</>
	);
}

export default footerLink;
