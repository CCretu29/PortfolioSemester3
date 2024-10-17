import React, { useRef } from 'react';
// doc links
import AiResearchDoc from "../../assets/pdf/Client/AIResearchDoc.pdf";
import UserResearchQuestions from "../../assets/pdf/Client/UserResearchQuestions.pdf";

function ClientProject() {
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
                    Client <br />
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

            {/* Project introduction */}
            <div ref={aboutMeRef} className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Introduction</h3>
                <p className="text-lg text-darkBlack font-body">
                    The second project from this semester is a real client project. My team's client is Livewall.
                    The project that we are doing for this client is making use of the generative AI to come up with an interactive, interesting way to tell stories to children.
                    The stories in case are told in the Fairytale Forest in the park Efteling.
                    We had a meeting with the client in witch he said we have freedom in our choices as long as they are well augmented.
                </p>
            </div>

            {/* Additional Documents Section */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Documents and research</h3>
                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">AI research</h4>
                <p className="text-lg text-darkBlack font-body">
                    Our first steps were to do some general research before the client answered us. We are using the CMD research method and this the first phase, library research.
                    My part was to research about text and audio AI generator. I looked through a lot of websites and found useful answers.
                    I discovered a lot of free AI that we could use and compared witch one would be better to use, I learned a bit about how we would use them as well.
                    My findings and also the reference can be found in this <a href={AiResearchDoc} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">document</a>.
                </p>
                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Project plan</h4>
                <p className="text-lg text-darkBlack font-body">
                    All team membes worked at the project plan. My part from the project plan, together with a colleague was to write the scope, meaning,
                    the deliverables, non deliverables and the Moscow chart. We discussed with the team members and decided together what we want to deliver and not.
                    in this <a href={AiResearchDoc} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">document    </a>.
                </p>
            </div>

            {/* User research */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">User research</h3>
                <p className="text-lg text-darkBlack font-body">
                    Together, me and my team decided that our target audience will be children between six and ten years old.
                    To prepare for the the target audience user research each one came up with five questions that we can ask the children.
                    I wrote this questions based on my experience as a child with stories and information found from my peers research on this subject.
                    Here is the  <a href={UserResearchQuestions} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">document</a> with all of our questions.
                </p>
            </div>

            {/* Target audience */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Target audience</h3>
                <p className="text-lg text-darkBlack font-body">
                    To be added
                </p>
            </div>

        </div>
    );
}

export default ClientProject;
