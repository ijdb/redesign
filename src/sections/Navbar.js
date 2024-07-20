"use client";
import Image from "next/image";
import atroxwhitelogo from "@/assets/atroxwhitelogo.svg";
import BurgerIcon from "@/components/BurgerIcon";
import Link from "next/link";

function Navbar() {
	return (
		<div className="flex justify-between items-center px-5 sm:px-8 py-8 bg-purple-800">
			<Link href="/">
				<Image src={atroxwhitelogo} alt="company logo" />
			</Link>
			<Link href="/contactUs">
				<div className="flex items-center gap-2.5">
					<div className="text-white tracking-wide">Contact Us</div>
					<BurgerIcon />
				</div>
			</Link>
		</div>
	);
}

export default Navbar;
