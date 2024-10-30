import React, { useRef, useState } from 'react';
// doc links
import AiResearchDoc from "../../assets/pdf/Client/AIResearchDoc.pdf";
import ProjectPlan from "../../assets/pdf/Client/projectPlanAI.pdf";
import UserResearchQuestions from "../../assets/pdf/Client/UserResearchQuestions.pdf";
import InterviewOne from "../../assets/pdf/Client/InterviewOne.pdf";
import InterviewTwo from "../../assets/pdf/Client/InterviewTwo.pdf";
// pic links
import ConceptImage from "../../assets/photos/conceptPicture.jpg"; 

function ClientProject() {
    const aboutMeRef = useRef(null);
    const [isImageVisible, setIsImageVisible] = useState(false);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleImageVisibility = () => {
        setIsImageVisible((prev) => !prev);
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
                    <div className="w-56 h-56 md:w-64 md:h-64 bg-normalPurple rounded-full opacity-80"></div>
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
                    We had a meeting with the client in which he said we have freedom in our choices as long as they are well documented.
                </p>
            </div>

            {/* Additional Documents Section */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Documents and research</h3>
                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">AI research</h4>
                <p className="text-lg text-darkBlack font-body">
                    Our first steps were to do some general research before the client answered us. We are using the CMD research method, and this is the first phase, library research.
                    My part was to research text and audio AI generators. I looked through many websites and found useful answers.
                    I discovered a lot of free AI tools that we could use and compared which one would be better to use, and I learned a bit about how to use them as well.
                    My findings and references can be found in this <a href={AiResearchDoc} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">document</a>.
                </p>
                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Project plan</h4>
                <p className="text-lg text-darkBlack font-body">
                    All team members worked on the project plan. My role, together with a colleague, was to write the scope, deliverables, non-deliverables, and the MoSCoW chart. We discussed and decided as a team what we want to deliver and what we do not.
                    This is the <a href={ProjectPlan} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Project plan</a>.
                </p>
            </div>

            {/* User research */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">User research</h3>
                <p className="text-lg text-darkBlack font-body">
                    Together, my team and I decided that our target audience would be children between six and ten years old.
                    To prepare for our target audience user research, each of us came up with five questions to ask the children.
                    I wrote these questions based on my experience as a child with stories and information gathered from peer research on this subject.
                    Here is the <a href={UserResearchQuestions} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">document</a> with all our questions.
                </p>
            </div>

            {/* Target audience */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Target audience</h3>
                <p className="text-lg text-darkBlack font-body">
                    After deciding on our target audience, we proceeded with interviews. First, we reached out to schools, but we faced several rejections.
                    Eventually, I interviewed my landlord’s children, with the landlord helping translate the younger child’s responses. It was a rewarding experience talking to the children about stories.
                    Here are the interview documents:
                    <br />
                    <a href={InterviewOne} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Interview with the girl</a>
                    <br />
                    <a href={InterviewTwo} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Interview with the boy</a>
                </p>
                <p className="text-lg text-darkBlack font-body">
                    Following additional interviews conducted by my peers, we collectively concluded that our target audience age range should be younger, between 4 and 6 years old.
                </p>
            </div>

            {/* Concept */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Concept for the project</h3>
                <p className="text-lg text-darkBlack font-body">
                After we established a target audience and summarize the interviews we created a concept. I helped with some ideas and I was present in the discussion even tho I did not did the sketch.
                    My ideas: to have the main application in dutch but have "change language" option in case international children visit the park, to add music to the stories to make them more attractive, to have multiple characters options for the kids and to set a time limit for the stories session per kid.
                    With the rest of ideas even if I did not created them, I shared my opinion and was involved in deciding what we need and do not need. 
                    View our concept sketch <span className="text-xl font-header font-bold text-normalPurple underline cursor-pointer" onClick={toggleImageVisibility}>here</span>.
                </p>
                {isImageVisible && (
                    <div className="mt-4">
                        <img src={ConceptImage} alt="Concept Sketch" className="w-[500px] h-auto mt-4 rounded-lg" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ClientProject;
