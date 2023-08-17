import getVolunteers from "@/util/getVolunteers";
import SingleVolunteer from "./SingleVolunteer";

const Volunteers = async () => {
    const volunteers = await getVolunteers();


    return (
        <div className="mt-16 font-serif">
            <h2 className="mb-5 text-3xl font-semibold text-center">Volunteers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                {
                    volunteers.map((volunteer) => (<SingleVolunteer key={volunteer._id} volunteer={volunteer}></SingleVolunteer>))
                }
            </div>
        </div>
    );
};

export default Volunteers;