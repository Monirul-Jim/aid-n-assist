import Gallery from "@/components/Gallery/Gallery";
import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Volunteers from "@/components/Volunteers/Volunteers";

export default function Home() {
	return (
		<div>
			{/* here all function give here */}
			<Gallery></Gallery>
			<HomeSlider></HomeSlider>
			<BecomeVolunteer />
			<Volunteers />
		</div>
	);
}