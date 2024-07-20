import phone from "@/assets/phone.svg";
import mail from "@/assets/mail.svg";
import gps from "@/assets/gps.svg";
import Image from "next/image";

function DemoFormTwo() {
	return (
		<div className="px-5 sm:px-9 py-7">
			<h2 className="text-lg sm:text-xl font-medium text-purple-900 mb-4">
				Contact us:
			</h2>
			<div className="flex flex-col gap-3">
				<ContactComp text="94612-19922" icon={phone} />
				<ContactComp text="hello@atrox.io" icon={mail} />
				<ContactComp
					text="JMD Megapolis, Sector 48, Gurgaon, Haryana"
					icon={gps}
				/>
			</div>
		</div>
	);
}
function ContactComp({ text, icon }) {
	return (
		<div className="flex items-start">
			<div className="w-6 h-6 mr-3 relative">
				<Image src={icon} alt="Phone icon" layout="fill" objectFit="contain" />
			</div>
			<span className="text-purple-900 text-sm w-36">{text}</span>
		</div>
	);
}

export default DemoFormTwo;
