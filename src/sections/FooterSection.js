import React from "react";
import FLink from "@/components/FLink";

const Footer = () => {
	const impLinks = [
		{ name: "about", href: "/" },
		{ name: "services", href: "/" },
		{ name: "portfolio", href: "/" },
		{ name: "labs", href: "/" },
		{ name: "blogs", href: "/" },
		{ name: "private policy", href: "/" },
		{ name: "terms of service", href: "/" },
	];

	return (
		<footer className="bg-purple-800 text-purple-200 p-8">
			<div></div>
			<div>
				<div>
					<div>
						<div className="uppercase text-sm font-medium text-purple-500 mb-3">
							Important links
						</div>
						<ul className="space-y-2">
							<li>
								{impLinks.map((item) => (
									<FLink text={item.name} href={item.href} key={item.name} />
								))}
							</li>
						</ul>
					</div>
					<div></div>
				</div>
				<div></div>
			</div>
		</footer>
	);
};

export default Footer;
