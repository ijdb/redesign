"use client";
import Image from "next/image";
import atroxwhitelogo from "@/assets/atroxwhitelogo.svg";
import BurgerIcon from "@/components/BurgerIcon";
import React, { useState } from "react";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div className="flex justify-between items-center px-5 py-8 bg-purple-800">
			<div>
				<Image src={atroxwhitelogo} alt="company logo" />
			</div>
			<div className="flex items-center gap-2.5">
				<div className="text-white tracking-wide">Contact Us</div>
				<BurgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
			</div>
		</div>
	);
}

export default Navbar;
