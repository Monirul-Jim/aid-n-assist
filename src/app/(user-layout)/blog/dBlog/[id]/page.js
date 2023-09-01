import Image from "next/image";

async function getvBlogs (id){
    let data = await fetch(`http://localhost:3000/api/dblogs/${id}`);
     data = await data.json();
    
    return data;
    
    
}

const singleDonators =async ({params}) => {
    console.log(params.id)
    const singleDonatorsdata =await getvBlogs(params.id)
    
   
    return (
        <div >
        <div  className="lg:flex gap-10">
          <Image
           className="rounded-xl"
            height={400}
            width={350}
            src={singleDonatorsdata.result.imageUrl}
            alt="Pic nye"
          />
          
          <div>
          <h1><span className="text-gray-400 font-extrabold">Name:</span> {singleDonatorsdata.result.name}</h1>
          <h1><spna className="text-gray-400 font-extrabold">Email:</spna> {singleDonatorsdata.result.email}</h1>
          <h1><span className="text-gray-400 font-extrabold"></span> {singleDonatorsdata.result.designation}</h1>
          <h1><span className="text-gray-400 font-extrabold">Blood:</span> {singleDonatorsdata.result.blood}</h1>
          <h1><span className="text-gray-400 font-extrabold">Contact:</span> {singleDonatorsdata.result.contact}</h1>
          <h1><span className="text-gray-400 font-extrabold">Location:</span> {singleDonatorsdata.result.location}</h1>
          </div>
          </div>
          <div className="mt-3">
          <h1><span className="text-gray-400 font-extrabold">Blog title:</span> {singleDonatorsdata.result.blog_title}</h1>
          <h1><span className="text-gray-400 font-extrabold">Blog content:</span> {singleDonatorsdata.result.blog_content}</h1>
          </div>
        
      </div>
      
    );
};

export default singleDonators;