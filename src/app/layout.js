import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import UniverseSection from "@/sections/UniverseSection";
import Footer from "@/sections/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Atrox Website",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<UniverseSection />
				<Footer />
			</body>
		</html>
	);
}
