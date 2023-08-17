import Image from "next/image";


const SingleVolunteer = ({volunteer}) => {
    const {_id, name, email, designation, bloodGroup, phoneNumber, workPlace, imageURL} =volunteer 
    return (

        <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image class="rounded-t-lg" src={imageURL} width={500} height={500} alt="" ></Image>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{email}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{designation}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{bloodGroup}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{phoneNumber}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{workPlace}</p>
            </div>
        </div>

    );
};

export default SingleVolunteer;