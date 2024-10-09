"use client"

import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <>
            <section className="flex justify-center items-center bg-[#000021] text-white lg:px-[115px] md:px-[90px] sm:px-[90px] px-[20px]  min-h-screen" id="home">
                <div className="flex flex-col-reverse  lg:flex-row items-center justify-center lg:pt-16 lg:space-y-0 lg:space-x-8 pb-10">
                    <div className="lg:text-left lg:py-6 py-10 text-center leading-snug">
                        <h1 className="lg:text-[40px] md:text-[35px] text-[28px] font-bold">Hey, myself <span className="text-myCustomColor">Anas Khan</span></h1>
                        <h1 className="lg:text-[40px] md:text-[35px] text-[28px] font-bold">and I am a passionate</h1>
                        <h1 className="lg:text-[40px] md:text-[35px] text-[28px] font-bold"><span id="element" className="text-myCustomColor">Front-End Web Developer</span></h1>

                        <p className="text-[14px] my-4 lg:pr-20 md:text-[16px]">
                            A dedicated IT student skilled in Java, JavaScript, Python, C++, HTML5, CSS, and Bootstrap, specializing in front-end development.
                        </p>

                        <div className="flex justify-center lg:justify-start space-x-4 my-9">
                            <a href="#" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-myCustomColor rounded-full text-myCustomColor text-xl hover:bg-myCustomColor hover:text-primaryColor transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">
                            <FontAwesomeIcon icon={faFacebook} className="md:text-xl text-base"/>
                            </a>
                            <a href="#" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-myCustomColor rounded-full text-myCustomColor text-xl hover:bg-myCustomColor hover:text-primaryColor transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">
                            <FontAwesomeIcon icon={faTwitter} className="md:text-xl text-base"/>
                            </a>
                            <a href="https://www.instagram.com/anaskhan_21" target="_blank" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-myCustomColor rounded-full text-myCustomColor text-xl hover:bg-myCustomColor hover:text-primaryColor transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">
                            <FontAwesomeIcon icon={faInstagram} className="md:text-xl text-base"/>
                            </a>
                            <a href="https://www.linkedin.com/in/anas-khan-685007242/" target="_blank" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-myCustomColor rounded-full text-myCustomColor text-xl hover:bg-myCustomColor hover:text-primaryColor transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">
                            <FontAwesomeIcon icon={faLinkedinIn} className="md:text-xl text-base"/>
                            </a>
                            <a href="https://github.com/anaskhan6069" target="_blank" className="md:w-10 md:h-10 w-8 h-8 flex justify-center items-center border-2 border-myCustomColor rounded-full text-myCustomColor text-xl hover:bg-myCustomColor hover:text-primaryColor transition duration-300 hover:shadow-[0_0_12px_var(--myCustomColor)]">{/* // Using CSS variable */}
                            <FontAwesomeIcon icon={faGithub} className="md:text-xl text-base"/>
                            </a>
                        </div>

                        <div className="space-x-4 space-y-2 ">
                            <a href="#" className="inline-block px-7 py-2 bg-myCustomColor rounded-full text-primaryColor font-semibold text-xs md:text-lg transition duration-300 shadow-[0_0_6px_var(--myCustomColor)] hover:shadow-[0_0_12px_var(--myCustomColor)]" >Download CV</a>

                            <a href="https://github.com/anaskhan6069" target="_blank" className="inline-block px-7 py-2 bg-myCustomColor rounded-full text-primaryColor font-semibold text-xs md:text-lg transition duration-300 shadow-[0_0_6px_var(--myCustomColor)] hover:shadow-[0_0_12px_var(--myCustomColor)]">Visit Github</a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:mt-20 mt-20">
                        <div className="aspect-square lg:w-[20rem] w-[18rem] rounded-full bg-[url('/images/Photo.jpg')] bg-cover bg-no-repeat border-4 border-myCustomColor md:shadow-[0_0_22px_var(--myCustomColor)] shadow-[0_0_15px_var(--myCustomColor)]"></div>
                    </div>
                </div>

            </section>


        </>
    )
}

export default Home;