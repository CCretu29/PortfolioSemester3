import React, { useRef } from 'react';

function Studio() {
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
                    Studio branding <br />
                </h1>

                <h2 className="absolute top-[60%] left-40 text-5xl text-darkPurple md:text-7xl font-bold font-header italic">
                    project
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

            {/* Project Introduction */}
            <div ref={aboutMeRef} className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold font-header italic mb-4">Introduction</h3>
                <p className="text-lg text-darkBlack font-body">
                    I created a team, from three formal
                    intro-week teams. The first thing that
                    we did was to get to know each other.
                    The studio project is about creating
                    our own studio that will represent us.
                </p>
            </div>

            {/* Documents */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold font-header italic mb-4">Documents and research</h3>
                <p className="text-lg text-darkBlack font-body">
                    I wrote a part of the Team Charter:
                    - Wrote my strengths and weaknesses
                    - Decided with the team our core values
                    - Wrote some of the rules
                    - Was part of the role’s discussion
                    - Wrote one of the goals
                    - Decided together with my team our products
                    We chose a name in a fun way. Everyone wrote ideas on my post its and
                    we chose the one we liked more. Doing this multiple times we decided
                    our name was Aurora Rise Studio. We asked feedback for the name.
                    Teacher suggested to remove the word “Rise” because Aurora is already a
                    strong name. We agreed.
                </p>
            </div>
        </div>
    );
}

export default Studio;
