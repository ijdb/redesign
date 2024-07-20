import Link from "next/link";
import Image from "next/image";
import redarrow from "@/assets/redarrow.svg";

function KnowMore({ href }) {
	return (
		<Link href={href}>
			<div className="flex text-red-500 items-center justify-center gap-3">
				<div className="uppercase font-medium text-sm sm:text-base tracking-wide">
					know more
				</div>
				<div>
					<Image src={redarrow} alt="" />
				</div>
			</div>
		</Link>
	);
}

export default KnowMore;
