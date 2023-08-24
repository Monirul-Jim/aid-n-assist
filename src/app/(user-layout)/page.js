import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Misson from "@/components/Mission/Misson";
import OurMission from "@/components/OurMission/OurMission";
import OurTeam from "@/components/OurTeam/OurTeam";
import Partner from "@/components/Partner/Partner";
import DonateNow from "@/components/DonateNow/DonateNow";
import Causes from "@/components/PopularCauses/Causes";
import { Volunteers } from "@/lib/model/volunteers";

export default function Home() {
	return (
		<div>
			{/* here all function give here */}
			<HomeSlider></HomeSlider>
			<DonateNow/>
			<Gallery></Gallery>
			<BecomeVolunteer />
			<Volunteers />
			<BecomeVolunteer />
			{/* <Contact /> */}
			<Causes />
			<Gallery />
			<Partner />
			{/* <BecomeVolunteer /> */}
		</div>
	);
}
