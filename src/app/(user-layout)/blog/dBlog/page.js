import Image from "next/image";
import Link from "next/link";

async function getalluser (){
    let data = await fetch(`http://localhost:3000/api/dblogs`);
     data = await data.json();
    return data.result;
    
}


const DBLOGS =async () => {
    const users = await getalluser();
    // Check the structure of the users object
    console.log("users", users);
    
    return (
        <div>
             <h1 className="text-center text-3xl text-gray-500">Donator blogs</h1>
         <div className="lg:grid lg:grid-cols-3 lg:gap-5">
         {
                 users.map((blog) => (
        
                    <div key={blog._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                    <Image className="rounded-t-lg" width={300} height={350} src={blog.imageUrl} alt="Pic Nye" />
                    </a>
                    <div className="p-5">
                    <h1>Name:{blog.name}</h1>
                    <p className=" font-normal text-gray-700 dark:text-gray-400">Email:{blog.email}</p>
                    <h1>Designation:{blog.designation}</h1>
                    <h1>Blood:{blog.blood}</h1>
                    <h1>Contact:{blog.contact}</h1>
                    <h1>Location: {blog.location}</h1>
                    <Link href={`/blog/dBlog/${blog._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read Blog
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </Link>
                    </div>
                    </div>
                    
                        ))
           }
         </div>
        </div>
    );
};

export default DBLOGS;
