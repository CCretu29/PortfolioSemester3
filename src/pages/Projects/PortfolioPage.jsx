import React, { useRef, useState } from 'react';
//doc links
import PortfolioSurvey from "../../assets/pdf/Personal/PortfolioSurvey.pdf";
// pics
import WireframeImage from "../../assets/photos/replacement_photo.jpg"; 
import DesignImage from "../../assets/photos/portfolioPhoto.png"; 

function PortfolioPage() {
    const aboutMeRef = useRef(null);
    const [showWireframe, setShowWireframe] = useState(false);
    const [showDesign, setShowDesign] = useState(false); 

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //toggle elements
    const toggleWireframe = () => {
        setShowWireframe(!showWireframe); 
    };

    const toggleDesign = () => {
        setShowDesign(!showDesign); 
    };

    return (
        <div className="w-full min-h-screen bg-whiteCream">
            {/* Main Section */}
            <div className="relative h-[80vh] flex flex-col justify-center">
                <h1 className="absolute top-1/6 left-40 text-6xl text-darkPurple md:text-8xl font-bold font-header italic">
                    Portfolio <br />
                </h1>

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
            <div ref={aboutMeRef} className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Introduction</h3> 
                <p className="text-lg text-darkBlack font-body">
                    In this place you will find information about my creating process of this portfolio. I build this portfolio as an website,
                    to practice more with my design skills and to learn new programming languages and frameworks.
                </p>
            </div>

            {/* Documents Section */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Research</h3> 
                <p className="text-lg text-darkBlack font-body">
                Before starting any design, I made a <a href={PortfolioSurvey} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">survey</a> and presented it to some teachers, to find out some
                structure information, since the teachers are my target audience for this
                project. I got useful information that I used later in my prototypes. I wanted to implement some comments and log in features for the reason to use back-end and database, but it would be useless features as I saw from the survey.
                I will use back-end to another project in order to aim for advanced. I saw that the color I should decide myself, and the teacher prefer a website, with visual representations and short relevant description.
                I received some good information from a presentation about the portfolio
                structure. I started prototyping.
                </p>
            </div>

            {/* Design process */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Design process</h3> 
                <p className="text-lg text-darkBlack font-body">
                    I created a <span className="text-xl font-header font-bold text-normalPurple underline cursor-pointer" onClick={toggleWireframe}>wireframe</span> as my first iteration, when I was just thinking about how I want to
                    structure my portfolio. Since everyone said I can choose any colors I want I searched some color
                    pallets on Pinterest. Found an interesting orange one and started
                    designing. Everything came out too simple and square looking. It was very
                    ugly. I discovered the gradients and abused them, wanting to change my
                    ugly, boring first version. To have less gradient and empty space I put
                    some autumn theme pictures on the background of the first section of the
                    pages. It was still too much gradient as I got feedback from the teachers,
                    and I was advised to think about my <span className="text-xl font-header font-bold text-normalPurple underline cursor-pointer" onClick={toggleDesign}>design</span> project page structure because I had
                    multiple versions for that, and it looked chaotic. This is my design.    
                </p>

                {/* Conditional rendering of the wireframe image */}
                {showWireframe && (
                    <div className="mt-6">
                        <img src={WireframeImage} alt="Wireframe of the portfolio" className="w-2/4 h-auto rounded-lg shadow-lg" />
                    </div>
                )}

                {/* Conditional rendering of the design image */}
                {showDesign && (
                    <div className="mt-6">
                        <img src={DesignImage} alt="Design of the project" className="w-2/4 h-auto rounded-lg shadow-lg" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default PortfolioPage;
