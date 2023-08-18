import React from 'react';
import './howwework.css'

const WorkBanner = () => {
    return (
        <div className='bannersetup bg-fixed font-serif flex items-center justify-center  lg:h-[600px] h-96 w-full'>
            {/* f */}
            <div className='content-center text-center relative w-full p-5'>
  <div className='absolute inset-0 bg-black opacity-40 '></div>
  <h2 className='lg:text-5xl text-green-400 font-extrabold relative z-10'>
    How we work for Humanity?
  </h2>
  <p className='lg:text-2xl mt-5 text-white font-extrabold relative z-10'>
    Be A Successful Human Being, <br />But First Be A Good Human <br /> Being!
  </p>
  <hr className="border-t-4 border-green-900 rounded-2xl mt-4 w-1/12 mx-auto" />
</div>

            {/* g */}
        </div>
    );
};

export default WorkBanner;