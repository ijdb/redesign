"use client";
import Image from "next/image";
import atroxwhitelogo from "@/assets/atroxwhitelogo.svg";
import BurgerIcon from "@/components/BurgerIcon";
import Link from "next/link";
import Button from "@/components/Button";

function Navbar() {
	return (
		<div className="flex justify-between items-center px-5 sm:px-8 md:px-16 py-8 bg-purple-800">
			<Link href="/">
				<Image src={atroxwhitelogo} alt="company logo" />
			</Link>
			<Link href="/contactUs">
				<div className="flex items-center gap-2.5 md:hidden">
					<div className="text-white tracking-wide">Contact Us</div>
					<BurgerIcon />
				</div>
			</Link>
			<div className="hidden md:flex gap-9 items-center text-white text-sm">
				<Link href="/aboutUs">About</Link>
				<Link href="/services">Services</Link>
				<Link
					href="/contactUs"
					className="uppercase text-[11px] font-medium bg-red-500 px-3 py-3 
					rounded-lg tracking-wider"
				>
					contact us
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
