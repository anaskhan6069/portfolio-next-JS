"use client"

import React from 'react';

const Contact = () => {
    return (
        <section className="contact py-12 bg-primaryColor text-white" id="contact">
            <h1 className="heading lg:text-[50px] md:text-[45px] text-[35px] font-bold md:mb-12 mb-8 text-center lg:mt-14 mt-10">
                Contact<span className="text-myCustomColor"> Me</span>
            </h1>

            <form className="md:max-w-[50%] max-w-[88%] mx-auto text-center mb-12 ">
                <div className="input-box flex justify-between flex-wrap">
                    <input
                        id="fName"
                        type="text"
                        placeholder="Full Name"
                        className="lg:w-[49%] w-full md:p-4 p-3 md:text-base text-sm placeholder:text-gray-500 bg-secondaryColor rounded-lg mb-4"
                        required
                    />
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        className="lg:w-[49%] w-full md:p-4 p-3 md:text-base text-sm placeholder:text-gray-500 bg-secondaryColor rounded-lg mb-4"
                        required
                    />
                </div>

                <div className="input-box flex justify-between flex-wrap">
                    <input
                        id="mobileNumber"
                        type="number"
                        placeholder="Mobile Number"
                        className="appearance-none custom-number-input lg:w-[49%] w-full md:p-4 p-3 md:text-base text-sm placeholder:text-gray-500 bg-secondaryColor rounded-lg mb-4"
                        required
                    />
                    <input
                        id="cityCountry"
                        type="text"
                        placeholder="City, Country"
                        className="lg:w-[49%] w-full md:p-4 p-3 md:text-base text-sm placeholder:text-gray-500 bg-secondaryColor rounded-lg mb-4"
                        required
                    />
                </div>

                <textarea
                    id="msg"
                    cols={30}
                    rows={7}
                    placeholder="Your Message"
                    className="w-full md:p-4 p-3 md:text-base text-sm placeholder:text-gray-500 bg-secondaryColor rounded-lg mb-3 resize-none"
                    required
                ></textarea>

                <input
                    type="submit"
                    value="Send Message"
                    className="inline-block px-7 py-2 mt-3 bg-myCustomColor rounded-full text-primaryColor font-semibold text-sm md:text-lg transition duration-300 shadow-[0_0_6px_var(--myCustomColor)] hover:shadow-[0_0_12px_var(--myCustomColor)] hover:cursor-pointer"
                    id="submit-btn"
                    onClick={() => {
                        const fName = document.getElementById("fName") as HTMLInputElement;
                        const email = document.getElementById("email") as HTMLInputElement;
                        const mobileNumber = document.getElementById("mobileNumber") as HTMLInputElement;
                        const cityCountry = document.getElementById("cityCountry") as HTMLInputElement;
                        const msg = document.getElementById("msg") as HTMLTextAreaElement;

                        if (fName.value && email.value && mobileNumber.value && cityCountry.value && msg.value) {
                            alert("Thank you for contacting me!");
                        }
                    }}
                />
            </form>
        </section>
    );
};

export default Contact;
