import Gallery from "@/components/Gallery/Gallery";
import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Volunteers from "@/components/Volunteers/Volunteers";
import OurTeam from "@/components/OurTeam/OurTeam";
import Causes from "@/components/PopularCauses/Causes";
import Partner from "@/components/Partner/Partner";
import DonateNow from "@/components/DonateNow/DonateNow";

export default function Home() {
	return (
		<div>
			{/* here all function give here */}
			<HomeSlider></HomeSlider>
			<DonateNow/>
			<Gallery></Gallery>
			<BecomeVolunteer />
			<Volunteers />
			<OurTeam />
			<Causes />
			<Partner />

		</div>
	);
}
