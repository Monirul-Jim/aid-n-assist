import Gallery from "@/components/Gallery/Gallery";
import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Volunteers from "@/components/Volunteers/Volunteers";
import OurTeam from "@/components/OurTeam/OurTeam";
import Causes from "@/components/PopularCauses/Causes";
import Partner from "@/components/Partner/Partner";
<<<<<<< HEAD
import DonateNow from "@/components/DonateNow/DonateNow";
=======
import Testimonial from "@/components/testimonial/Testimonial";
>>>>>>> 8fbb33436e153e58b42825831f40a744b3c796b2

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
			<Testimonial></Testimonial>
			<Partner />

		</div>
	);
}
