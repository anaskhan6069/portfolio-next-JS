"use client";

const About = () => {
  return (
    <section id="about" className="bg-secondaryColor flex flex-col lg:flex-row justify-center items-center md:gap-24 gap-20 py-16 lg:px-[115px] md:px-[90px] sm:px-[90px] px-[20px] min-h-screen">
      <div className="img-div flex justify-center lg:justify-end lg:pt-16 mt-12">
        <div className="aspect-square lg:w-[20rem] w-[18rem] transform -scale-x-100 rounded-3xl bg-[url('/images/Photo.jpg')] bg-cover bg-no-repeat border-4 border-myCustomColor md:shadow-[0_0_22px_var(--myCustomColor)] shadow-[0_0_15px_var(--myCustomColor)]"></div>
      </div>

      <div className="about-section text-white px-6 lg:pt-16 text-center lg:text-left">
        <h1 className="lg:text-[40px] md:text-[35px] text-[34px] font-bold text-center lg:text-left leading-6">
          ABOUT <span className="text-myCustomColor">ME</span>
        </h1>
        <h2 className="lg:text-[26px] md:text-[22px] text-[19px] font-bold md:mt-4 mt-2">Front-end Developer</h2>
        <p className="md:text[16px] text-[15px] mt-6 mb-8">
          | A dedicated and skilled student of Information Technology, proficient in a variety of programming languages
          including Java, JavaScript, Python, C++, HTML5, CSS, and Bootstrap. Specializing in front-end development, I
          confidently embrace the role of a junior developer. Eager to utilize these skills to contribute effectively to
          projects and aim for continuous growth in the dynamic field of technology. |
        </p>
        <a href="#about" className="bg-myCustomColor text-primaryColor text-sm md:text-lg px-7 py-2 rounded-full font-medium transition duration-300 shadow-[0_0_6px_var(--myCustomColor)] hover:shadow-[0_0_12px_var(--myCustomColor)]">
          Read More
        </a>
      </div>
    </section>
  );
};


export default About;
