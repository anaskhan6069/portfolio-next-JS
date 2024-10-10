// Services.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFilm } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section id="services" className="py-16 lg:px-[115px] md:px-[90px] sm:px-[90px] px-[20px] min-h-screen bg-primaryColor text-white">
      <h1 className="lg:text-[50px] md:text-[45px] text-[38px] font-bold md:mb-12 mb-8 text-center lg:text-left lg:mt-12 mt-5">
        My <span className="text-myCustomColor">Services</span>
      </h1>

      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-6 ">
        {/* Service 1 */}
        <div className="flex-1 min-w-[10rem] max-w-[98%] md:max-w-[70%] bg-secondaryColor p-4 lg:p-6 pb-8 rounded-2xl text-center hover:border-2 border-myCustomColor hover:shadow-[0_0_8px_var(--myCustomColor)] transition duration-300 ease-in-out hover:scale-[1.02]">
        <FontAwesomeIcon icon={faCode} className='text-myCustomColor md:text-7xl text-5xl'/>
          <h2 className="lg:text-[27px] text-[20px] mt-4 font-bold">Front-End Web Development</h2>
          <p className="mt-8 mb-8 text-[12px] md:text-[16px]">
            I am a dedicated junior front-end web developer focused on building engaging and user-friendly interfaces. Explore the projects section of my portfolio to see my work in Next.js.
          </p>
          <a href="#services" className="bg-myCustomColor text-primaryColor px-7 py-2 rounded-full font-medium transition duration-300 shadow-[0_0_6px_var(--myCustomColor)] hover:shadow-[0_0_12px_var(--myCustomColor)] text-xs md:text-lg">Read More</a>
        </div>

        {/* Service 2 */}
        <div className="flex-1 min-w-[10rem] max-w-[98%] md:max-w-[70%] bg-secondaryColor p-4 lg:p-6 pb-8 rounded-2xl text-center hover:border-2 border-myCustomColor hover:shadow-[0_0_8px_var(--myCustomColor)] transition duration-300 ease-in-out hover:scale-[1.02]">
        <FontAwesomeIcon icon={faFilm} className='text-myCustomColor md:text-7xl text-5xl'/>
          <h2 className="lg:text-[27px] text-[20px] mt-4 font-bold">Video Editing</h2>
          <p className="mt-8 mb-8 text-[12px] md:text-[16px]">
            I am a skilled video editor with two years of freelancing experience and i am specialized in Adobe Premiere Pro to create engaging, perfect and very high-quality content.
          </p>
          <a href="#services" className="bg-myCustomColor text-primaryColor px-7 py-2 rounded-full font-medium transition duration-300 shadow-[0_0_6px_var(--myCustomColor)] hover:shadow-[0_0_12px_var(--myCustomColor)] text-xs md:text-lg">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
