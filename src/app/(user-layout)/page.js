import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Volunteers from "@/components/Volunteers/Volunteers";

export default function Home() {
	return (
		<div>
			<HomeSlider></HomeSlider>
		<BecomeVolunteer/>
		<Volunteers/>
		</div>
	);
}