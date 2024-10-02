import React, { useRef } from 'react';

function Assignments() {
    const aboutMeRef = useRef(null);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full min-h-screen bg-whiteCream">
            {/* Main Section */}
            <div className="relative h-[80vh] flex flex-col justify-center">
                <h1 className="absolute top-1/6 left-40 text-6xl text-darkPurple md:text-8xl font-bold font-header italic">
                    My personal <br />
                </h1>

                <h2 className="absolute top-[60%] left-40 text-5xl text-darkPurple md:text-7xl font-bold font-header italic">
                    work
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
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => handleScroll(aboutMeRef)} 
                    className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
                >
                    Discover
                </button>
            </div>

            {/* Project introduction */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-darkPurple font-bold mb-4">Title Here</h3> 
                <p className="text-lg text-darkBlack">
                    This is the text that will start on the left and go all the way across the screen. You can add more content here as needed to fill the space and make it look visually appealing. Adjust the content as necessary.
                </p>
            </div>

            {/* Documents */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-darkPurple font-bold mb-4">Another Title Here</h3> 
                <p className="text-lg text-darkBlack">
                    This is the second text section, which will also start on the left and extend across the full width of the screen. Feel free to customize this content as needed.
                </p>
            </div>
        </div>
    );
}

export default Assignments;
