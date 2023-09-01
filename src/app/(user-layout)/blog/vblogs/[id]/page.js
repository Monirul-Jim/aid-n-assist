import Image from "next/image";


async function getvBlogs (id){
    let data = await fetch(`http://localhost:3000/api/vblogs/${id}`);
     data = await data.json();
  
    return data;
    
}

const singleVolateersBlog =async ({params}) => {
    console.log(params.id)
    const singleBlogdata =await getvBlogs(params.id)
  
 
    return (
        <div >
        <div  className="lg:flex gap-10">
          <Image
            className="rounded-xl"
            height={400}
            width={350}
            src={singleBlogdata.result.imageUrl}
            alt="Pic nye"
          />
          
          <div>
          <h1><span className="text-gray-400 font-extrabold">Name:</span> {singleBlogdata.result.name}</h1>
          <h1><spna className="text-gray-400 font-extrabold">Email:</spna> {singleBlogdata.result.email}</h1>
          <h1><span className="text-gray-400 font-extrabold"></span> {singleBlogdata.result.designation}</h1>
          <h1><span className="text-gray-400 font-extrabold">Blood:</span> {singleBlogdata.result.blood}</h1>
          <h1><span className="text-gray-400 font-extrabold">Contact:</span> {singleBlogdata.result.contact}</h1>
          <h1><span className="text-gray-400 font-extrabold">Location:</span> {singleBlogdata.result.location}</h1>
          </div>
          </div>
          <div className="mt-3">
          <h1><span className="text-gray-400 font-extrabold">Blog title:</span> {singleBlogdata.result.blog_title}</h1>
          <h1><span className="text-gray-400 font-extrabold">Blog content:</span> {singleBlogdata.result.blog_content}</h1>
          </div>
        
      </div>
    );
};

export default singleVolateersBlog;