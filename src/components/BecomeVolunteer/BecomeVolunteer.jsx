import Link from 'next/link';
import './BecomeVolunteer.css'

const BecomeVolunteer = () => {
    return (
        <div className='volunteerBackground bg-fixed font-serif mb-16'>
            <div className='lg:pt-20 lg:pb-20 lg:px-14 pt-5 pb-2 '>
                <h2 className='text-center lg:text-5xl text-green-500'>Are You Ready to Volunteer?</h2>
                <p className='text-center lg:text-2xl mt-5 text-emerald-500'>start one of our programme today and help people in need</p>
                <hr className="border-t-4 border-green-300 rounded-2xl mt-4 w-1/12 mx-auto" />
            <div className='flex justify-center mt-8 pb-5'>
                <Link href="volunteers">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Become a Volunteer
                    </span>
                </button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default BecomeVolunteer;