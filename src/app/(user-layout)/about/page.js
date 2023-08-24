import Image from 'next/image';
import React from 'react';
import Overlay from '../../../../public/overlay.png'
import AboutImage from '../../../../public/Gallery/gallery-3.jpg'

const About = () => {
    return (
        <div className='p-2 md:p-0'>
        {/* banner section start */}
            <div className='banner_section relative bg-green-300'>
                <div className='container mx-auto text-center py-40 '>
                    <h1 className='text-white text-3xl md:text-5xl font-semibold uppercase'>A few words about <br/> our charity</h1>
                    <p className='text-white mt-4 w-full lg:w-3/4 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utommodo consequat.</p>
                </div>
                <div className='style_image'>
                    <Image className='absolute top-0 right-0 rotate-180 w-1/3 md:w-[170px] lg:w-[300px]' width="300" height="300" src={Overlay} alt='overlay image'/>
                </div>
                <div className='style_image'>
                    <Image className='absolute bottom-0 left-0 w-1/3 md:w-[170px] lg:w-[300px]' width="300" height="300" src={Overlay} alt='overlay image'/>
                </div>
            </div>
            {/* banner section end */}

        {/* our about text section start */}
            <div className='my-16'>
                <div className='container mx-auto '>
                    <div className='md:flex gap-10 items-center border-b-2 pb-14'>
                        <div className='w-full md:w-1/2'>
                            <Image width="400" height="400" className='w-full rounded-lg' src={AboutImage} alt='image' />
                        </div>
                        <div className='w-full md:w-1/2 pl-0 md:pl-6 mt-10 md:mt-0'>
                            <h1 className='text-black text-2xl md:text-3xl lg:text-5xl  font-semibold uppercase'>At Holity, we manage global charitable projects</h1>
                            <p className='text-slate-600 mt-4 w-full lg:w-3/4'>Vivamus rhoncus odio ut ultrices efficitur. Suspendisse potenti. Donec congue aliquam elit, non fringilla enim.Duis aute irure dolor. Vivamus rhoncus odio ut ultrices efficitur. </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* our about text section end */}
            {/* our mission vision and goal section start  */}
            <div className='my-16 '>
                <div className='container mx-auto '>
                    <div className='md:flex gap-10 justify-between'>
                        <div className=''>
                            <h1 className='text-slate-900 text-2xl md:text-3xl font-semibold '>Our Vision</h1>
                            <p className='text-slate-600 mt-4'>Adipiscing aliquam orci sed suspendisse convallis venenatis congue. Facilisi scelerisque donec in libero et hendrerit. At nulla lorem a non maecenas.</p>
                            <p className='text-slate-600 mt-4'>Ipsum interdum tristique ac risus in libero. Odio id commodo cursus etiam. Ultricies sed eget mauris, nisl. Amet.</p>
                        </div>
                        <div className='mt-10 md:mt-0'>
                            <h1 className='text-slate-900 text-2xl md:text-3xl font-semibold '>Our Mission</h1>
                            <p className='text-slate-600 mt-4'>Adipiscing aliquam orci sed suspendisse convallis venenatis congue. Facilisi scelerisque donec in libero et hendrerit. At nulla lorem a non maecenas.</p>
                            <p className='text-slate-600 mt-4'>Ipsum interdum tristique ac risus in libero. Odio id commodo cursus etiam. Ultricies sed eget mauris, nisl. Amet.</p>
                        </div>
                        <div className='mt-10 md:mt-0'>
                            <h1 className='text-slate-900 text-2xl md:text-3xl font-semibold '>Our Goal</h1>
                            <p className='text-slate-600 mt-4'>Adipiscing aliquam orci sed suspendisse convallis venenatis congue. Facilisi scelerisque donec in libero et hendrerit. At nulla lorem a non maecenas.</p>
                            <p className='text-slate-600 mt-4'>Ipsum interdum tristique ac risus in libero. Odio id commodo cursus etiam. Ultricies sed eget mauris, nisl. Amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* our mission vision and goal section end  */}

        </div>
    );
};

export default About;