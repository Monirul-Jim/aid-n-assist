"use client";

import ImageOne from "../../../public/Gallery/gallery-1.jpg";
import ImageTwo from "../../../public/Gallery/gallery-2.jpg";
import ImageThree from "../../../public/Gallery/gallery-3.jpg";
import ImageFour from "../../../public/Gallery/gallery-4.jpg";
import ImageFive from "../../../public/Gallery/gallery-5.jpg";
import ImageSix from "../../../public/Gallery/gallery-6.jpg";
import ImageSeven from "../../../public/Gallery/gallery-7.jpg";
import ImageEight from "../../../public/Gallery/gallery-8.jpg";
import Image from "next/image";

const Gallery = () => {
    return (
        <>
            <section className="bg-green-100 py-12">
            <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">Our Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <Image width="500" height={300} src={ImageOne} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                        <Image width="500" height={300} src={ImageTwo} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                        <Image width="500" height={300} src={ImageThree} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                        <Image width="500" height={300} src={ImageFour} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                        <Image width="500" height={300} src={ImageFive} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                        <Image width="500" height={300} src={ImageSix} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                        <Image width="500" height={300} src={ImageSeven} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                        <Image width="500" height={300} src={ImageEight} alt="gallery-image" className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-green-500 hover:border-b-green-500 duration-300"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;