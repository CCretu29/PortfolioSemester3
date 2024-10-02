import React, { useRef } from 'react';
import selfPhoto from "../assets/photos/me.jpg";

function AboutMe() {
    const aboutMeRef = useRef(null);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full min-h-screen bg-whiteCream">
            {/* About Section */}
            <div className="relative h-[80vh] flex flex-col justify-center">
                <h1 className="absolute top-1/6 left-40 text-6xl text-darkPurple md:text-8xl font-bold font-header italic">
                    About  <br />
                </h1>

                <h2 className="absolute top-[60%] left-40 text-5xl text-darkPurple md:text-7xl font-bold font-header italic">
                    Me
                </h2>

                {/* Bubbles */}
                <div className="absolute top-1/4 right-16 flex flex-col space-y-[-20px]">
                    {/* First Bubble */}
                    <div className="w-56 h-56 md:w-64 md:h-64 bg-normalPurple rounded-full opacity-80"></div>
                    {/* Second Bubble */}
                    <div className="w-48 h-48 md:w-56 md:h-56 bg-lightPurple rounded-full opacity-70 relative right-28 -top-12"></div>
                </div>
            </div>

            {/* Discover Button */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => handleScroll(aboutMeRef)} //  scroll to "About Me" section
                    className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
                >
                    Discover
                </button>
            </div>

            {/* About Me Section */}
            <div ref={aboutMeRef} className="w-6/8 min-h-screen flex flex-col md:flex-row items-center justify-around py-6">

                <div className="md:w-1/2 px-28">
                    <h2 className="text-4xl font-bold italic font-header text-normalPurple mb-4">Hello, I am Cretu Claudia,</h2>
                    <p className="text-md text-darkBlack font-body">
                        Semester 3 ICT & Media design student.
                        I am 22 years old, I come from Bucharest,
                        Romania. After I finish this study program my
                        dream is to become a front-end developer.
                        I love programming, I consider myself a little
                        creative. I love rainy days, coffee and
                        photography.
                    </p>
                </div>


                <div className="md:w-1/3 p-8">
                    <img
                        src={selfPhoto}
                        alt="Cretu Claudia"
                        className="w-4/6 rounded-lg border-8 border-lightPurple" />
                </div>
            </div>

                        {/* Discover me */}
                        <div className="flex justify-center -mt-24">
                <button
                    className="px-8 py-2 font-header text-lightPurple font-semibold text-4xl rounded-full">
                    Discover me
                </button>
            </div>

            {/* Talents Section */}
            <div className="flex flex-col items-start px-40 py-8">
                <h2 className="text-3xl font-bold font-heaader italic text-darkPurple mb-4">Talents</h2>
                <ul className="list-disc list-inside text-md text-darkBlack font-body">
                    <li>Programming</li>
                    <li>Organizing</li>
                    <li>Photography</li>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Presenting</li>
                </ul>
            </div>

            {/* Goals */}
            <div className="flex flex-col items-start px-40 py-16">
                <h2 className="text-3xl font-bold font-header italic text-darkPurple mb-4">My goals</h2>
                <p className="text-md text-darkBlack font-body">
                I would like to become the best version of me in programming, to learn as
many programming languages and frameworks as possible, both back-end
and front-end, and to learn how to create and work with database. I
would like to also practice my radiology nurse diploma in combination
with ICT practice.

                </p>
            </div>
        </div>
    );
}

export default AboutMe;
