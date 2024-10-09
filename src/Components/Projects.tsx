// Projects.tsx

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <section id="projects" className="bg-secondaryColor text-white py-16 lg:px-[115px] md:px-[90px] sm:px-[90px] px-[14px] min-h-screen">
            <h1 className="lg:text-[50px] md:text-[45px] text-[38px] font-bold md:mb-12 mb-8 text-center lg:text-left lg:mt-12">
                Latest <span className="text-myCustomColor">Projects</span>
            </h1>

            <div className="flex justify-center items-center flex-wrap md:gap-6 gap-8">
                {/* Project Box 1 */}
                <div className="relative md:w-[350px] md:h-[300px] w-[350px] h-[280px] rounded-2xl overflow-hidden shadow-[0_0_8px_rgba(0,0,33,0.8)] group">
                    <Image src="/images/figma-clone.jpg" alt="Figma Clone" className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70" width={350} height={300}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-myCustomColor z-10 flex flex-col justify-center items-center text-center p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 ">
                        <h4 className="md:md:text-3xl text-2xl font-bold">Figma Clone - Tere Web</h4>
                        <p className="text-base my-4">
                            Created a Figma clone website, &ldquo;Tere Web,&rdquo; using HTML, CSS, and JavaScript to boost my skills. It&#39;s fully responsive, with added animations for an enhanced user experience!
                        </p>
                        <a href="https://tereweb-anaskhan.netlify.app/" target="_blank" className="md:w-12 md:h-12 w-10 h-10 bg-white rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faUpRightFromSquare} className='text-secondaryColor md:md:text-xl text-base py-4'/>
                        </a>
                    </div>
                </div>


                {/* Project Box 2 */}
                <div className="relative md:w-[350px] md:h-[300px] w-[350px] h-[280px] rounded-2xl overflow-hidden shadow-[0_0_8px_rgba(0,0,33,0.8)] group">
                    <Image src="/images/image-gallery.jpg" alt="Figma Clone" className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70" width={350} height={300}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-myCustomColor z-10 flex flex-col justify-center items-center text-center p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <h4 className="md:text-3xl text-2xl font-bold">Image Gallery</h4>
                        <p className="text-base my-4">
                        Developed a fully responsive image gallery site using HTML, CSS, and JavaScript to enhance my skills. Browse through image categories and click any photo for a full-view experience!
                        </p>
                        <a href="https://imagegallery-anaskhan.netlify.app/" target="_blank" className="md:w-12 md:h-12 w-10 h-10 bg-white rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faUpRightFromSquare} className='text-secondaryColor md:text-xl text-base py-4'/>
                        </a>
                    </div>
                </div>

                {/* Project Box 3 */}
                <div className="relative md:w-[350px] md:h-[300px] w-[350px] h-[280px] rounded-2xl overflow-hidden shadow-[0_0_8px_rgba(0,0,33,0.8)] group">
                    <Image src="/images/todo-list.jpg" alt="Figma Clone" className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70" width={350} height={300}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-myCustomColor z-10 flex flex-col justify-center items-center text-center p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <h4 className="md:text-3xl text-2xl font-bold">Todo List</h4>
                        <p className="text-base my-4">
                        Developed a beautifully designed To-Do List app using Next.js, featuring task addition, deletion, and completion—all fully responsive!
                        </p>
                        <a href="https://todolist-anaskhan.vercel.app/" target="_blank" className="md:w-12 md:h-12 w-10 h-10 bg-white rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faUpRightFromSquare} className='text-secondaryColor md:text-xl text-base py-4'/>
                        </a>
                    </div>
                </div>

                {/* Project Box 4 */}
                <div className="relative md:w-[350px] md:h-[300px] w-[350px] h-[280px] rounded-2xl overflow-hidden shadow-[0_0_8px_rgba(0,0,33,0.8)] group">
                    <Image src="/images/quote-generator.jpg" alt="Figma Clone" className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70" width={350} height={300}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-myCustomColor z-10 flex flex-col justify-center items-center text-center p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <h4 className="md:text-3xl text-2xl font-bold">Quote Generator</h4>
                        <p className="text-base my-4">
                        Developed a Quotes Generator app using HTML, CSS, and JavaScript, with a Quote API fetching new quotes in your chosen category with every click. Features include saving favorite quotes that remain secure even after page reloads, plus much more!
                        </p>
                        <a href="https://quote-generator-anaskhan.netlify.app/" target="_blank" className="md:w-12 md:h-12 w-10 h-10 bg-white rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faUpRightFromSquare} className='text-secondaryColor md:text-xl text-base py-4'/>
                        </a>
                    </div>
                </div>

                {/* Project Box 5 */}
                <div className="relative md:w-[350px] md:h-[300px] w-[350px] h-[280px] rounded-2xl overflow-hidden shadow-[0_0_8px_rgba(0,0,33,0.8)] group">
                    <Image src="/images/cards-routing.jpg" alt="Figma Clone" className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70" width={350} height={300}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-myCustomColor z-10 flex flex-col justify-center items-center text-center p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <h4 className="md:text-3xl text-2xl font-bold">Cards Routing - Next.js</h4>
                        <p className="text-base my-4">
                        I developed a web page with professional user cards that feature hover effects and smooth transitions to user profiles. This project enhanced my Next.js skills, particularly in client-side routing for improved navigation.
                        </p>
                        <a href="https://cardrouting-by-anaskhan.vercel.app/" target="_blank" className="md:w-12 md:h-12 w-10 h-10 bg-white rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faUpRightFromSquare} className='text-secondaryColor md:text-xl text-base py-4'/>
                        </a>
                    </div>
                </div>

                {/* Project Box 6 */}
                <div className="relative md:w-[350px] md:h-[300px] w-[350px] h-[280px] rounded-2xl overflow-hidden shadow-[0_0_8px_rgba(0,0,33,0.8)] group">
                    <Image src="/images/calc.jpg" alt="Figma Clone" className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70" width={350} height={300}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-myCustomColor z-10 flex flex-col justify-center items-center text-center p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <h4 className="md:text-3xl text-2xl font-bold">Calculator</h4>
                        <p className="text-base my-4">
                        Thrilled to present my basic calculator crafted with HTML, CSS, and JavaScript! Perform essential arithmetic operations effortlessly with its simple yet functional design, ideal for beginners in web development.
                        </p>
                        <a href="https://anaskhan6069.github.io/Web-Based-Calculator/" target="_blank" className="md:w-12 md:h-12 w-10 h-10 bg-white rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faUpRightFromSquare} className='text-secondaryColor md:text-xl text-base py-4'/>
                        </a>
                    </div>
                </div>
                {/* Add more project boxes in the same format if needed */}
            </div>
        </section>
    );
};

export default Projects;
