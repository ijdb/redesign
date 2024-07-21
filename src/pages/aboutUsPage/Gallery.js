import Image from "next/image";
import view1 from "@/assets/view1.png";
import view2 from "@/assets/view2.png";
import view3 from "@/assets/view3.png";

function Gallery() {
	return (
		<div className="hidden md:flex md:px-16 md:gap-5 md:mt-12">
			<div>
				<Image src={view1} />
			</div>
			<div>
				<Image src={view2} />
			</div>
			<div>
				<Image src={view3} />
			</div>
		</div>
	);
}

export default Gallery;
