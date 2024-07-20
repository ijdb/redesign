import React from "react";
import FLink from "@/components/FLink";
import atroxlogo from "@/assets/atroxlogo.svg";
import footerIcon from "@/assets/footerIcon.svg";
import Image from "next/image";

const Footer = () => {
	const impLinks = [
		{ name: "about", href: "/aboutUs" },
		{ name: "services", href: "/services" },
		{ name: "portfolio", href: "/" },
		{ name: "labs", href: "/" },
		{ name: "blogs", href: "/" },
		{ name: "private policy", href: "/" },
		{ name: "terms of service", href: "/" },
	];
	const socialLinks = [
		{ name: "linkedin", href: "/" },
		{ name: "youtube", href: "/" },
		{ name: "twitter", href: "/" },
	];

	return (
		<footer className="bg-purple-800 text-purple-200 px-5 sm:px-8 pt-12 pr-10">
			<div className="mb-10">
				<Image src={atroxlogo} alt="brand logo" />
			</div>
			<div className="flex flex-col">
				<div className="flex justify-between">
					<div>
						<div className="uppercase text-sm font-medium text-purple-500 mb-3">
							Important links
						</div>
						<ul className="space-y-1">
							{impLinks.map((item) => (
								<li>
									<FLink text={item.name} href={item.href} key={item.name} />
								</li>
							))}
						</ul>
					</div>
					<div className="sm:mr-48">
						<div className="uppercase text-sm font-medium text-purple-500 mb-3">
							Join Us
						</div>
						<FLink text="hello@atrox.io" href="/" />
						<div className="uppercase text-sm font-medium text-purple-500 mb-3 mt-3">
							Follow Us
						</div>
						<ul className="space-y-1">
							{socialLinks.map((item) => (
								<li>
									<FLink text={item.name} href={item.href} key={item.name} />
								</li>
							))}
						</ul>
					</div>
				</div>
				<div>
					<div className="uppercase text-sm font-medium text-purple-500 mb-3 mt-6">
						contact Us
					</div>
					<div className="flex flex-col gap-2 uppercase text-xs">
						<div>jmd tower, gurgaon 121005</div>
						<div>contactus@atrox.io</div>
						<div>+(91)8077525171</div>
					</div>
				</div>
			</div>
			<div className="relative w-full h-36 ">
				<Image
					src={footerIcon}
					alt="Footer decorative image"
					layout="fill"
					objectFit="contain"
				/>

				<div className="absolute bottom-0 left-0 right-0 text-center pb-2 text-white text-sm ">
					© 2024 Atrox. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
