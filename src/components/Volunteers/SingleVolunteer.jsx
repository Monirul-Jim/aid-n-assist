'use client'

import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const SingleVolunteer = ({volunteer}) => {
    const {_id, name, email, designation, bloodGroup, phoneNumber, workPlace, imageURL} =volunteer 


    const handleDeleteVolunteer = async () => {
        console.log(_id);
        let response = await fetch(`/api/volunteers/${_id}`, {
            method: 'DELETE'
        });
        response = await response.json();
        if (response.success) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Deleted Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }



    return (

        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image className="rounded-t-lg" src={imageURL} width={500} height={500} alt="" ></Image>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name:{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {email}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Designation: {designation}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Blood: {bloodGroup}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contact: {phoneNumber}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {workPlace}</p>
                <Link href={`volunteers/${_id}`}>
                    <button className="rounded-xl bg-green-300 px-5 py-1">Edit</button>
                </Link>
                <button className="rounded-lg bg-red-400 px-5 py-2 mx-5" onClick={handleDeleteVolunteer}><FaTrashAlt/></button>
            </div>
        </div>

    );
};

export default SingleVolunteer;