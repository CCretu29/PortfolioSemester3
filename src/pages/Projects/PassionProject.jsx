import React, { useRef } from 'react';
// doc links
import ProjectPlanPassionProject from "../../assets/pdf/Passion/ProjectPlanPassionProject.pdf";
import ProjectPlanPassionProjectAfterFeedback from "../../assets/pdf/Passion/ProjectPlanPassionProjectAfterFeedback.pdf";
import SurveyResult from "../../assets/pdf/Passion/SurveyStatisticsResult.pdf";
import TargetAudienceResearch from "../../assets/pdf/Passion/TargetAudienceResearchDocument.pdf";
// pic links
import planning from "../../assets/photos/planning.jpg";

function PassionProject() {
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
                    Passion <br />
                </h1>

                <h2 className="absolute top-[60%] left-40 text-5xl text-darkPurple md:text-7xl font-bold font-header italic">
                    Project
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
                    For the Passion project I want to include all the learning outcome. I thought of an idea that is also connected to my passions, and includes the learning outcomes.
                    After discussing some ideas with my ICT friends and asking the teachers some questions I made my decision.
                    I will build a blog where I can sell my pictures that I take with my own camera. 
                    With this project I am covering all the learning outcomes:
                    Learning outcome one and three - I am doing target audience research to find my target audience. By that I will design multiple prototypes that will be testes on users.
                    Learning outcome two - I am coding the website using backend, frontend and database.
                    Learning outcome four - I am doing research about competition websites, about using the right design principles, I am following a methodology and I created a good planning.
                    Learning outcome five - I believe just by learning new things, and get more proficient in things I already know a bit, I am growing.
                    Making decisions, planning and dealing with a project like this proof my personal leadership skills.
                    So for this project, technically I am the stakeholder, building a website for myself, where I can connect with my target audience, but also provide quality pictures that can be used for anything.
                    I already started working on this project, in week eleven because I am confident that I can manage this project and the client project in the same time for now, and I will have more time for the development part. 
                </p>
            </div>

            {/* Planning */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Planning</h3> 
                <p className="text-lg text-darkBlack font-body">
                    I created a planning in three sprints, and wrote the tasks that I want to do, at first generally and then getting into more details. 
                    After finishing a task, it goes in the "Done" section. Here I also put the feedback that I want to ask for my tasks. 
                    At feedback a teachers said this is a very strong and good planning, something that not many students do this well. 
                </p>
                <div className="flex justify-center mt-4">
                    <img src={planning} alt="AppSite" className="w-4/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                </div>
            </div>

            {/* Additional Documents Section */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Documents and research</h3> 
                <p className="text-lg text-darkBlack font-body">
                    The first thing that I did is to make research about other existing websites like mine. 
                    After my research was done I started creating a project plan.
                    I wrote about the project context and goal, made a planning, wrote about the methodology I will use, the research methods I will follow and the risks.
                    I left the team and communication sections empty because I do not know who my coach is for now.  
                    This is the <a href={ProjectPlanPassionProject} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Project plan</a>.  
                     </p>
                     <p className="text-lg text-darkBlack font-body">
                    I asked for feedback for my project plan from two teachers. The first feedback was positive and the teacher said it is a very good build document that does not need improvement.
                    To be sure of that I asked a second opinion witch came with some improvement points needed. The non-deliverables that I put I should actually show to the teachers, so I just moved them.
                    The Moscow can have more details of what my application will and will not have as features, so I added more details. 
                    The planning was a bit confusing having three sprints but four phases, so I made it more clear that there are actually three phases and the forth one is actually just presenting and wrapping up the portfolio.
                    This is the <a href={ProjectPlanPassionProjectAfterFeedback} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Project plan after feedback</a>.  
                     </p>
            </div>

            {/* Target audience */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Target audience</h3> 
                <p className="text-lg text-darkBlack font-body">
                    In order to start creating any design for my application I had to find my target audience. I was expecting this task to take some time and to be complicated because I thought not that many people would want to buy photos.
                    I created a survey and shared it with international people that I know. In the survey I am asking about the age, if people would buy photos and what categories, what price would they prefer. 
                    I got 22 answers from this survey and went for feedback. I was told that only a survey would not be enough to find a certain target audience and that it would be better to also search for some statistics online.
                    I searched and found some statistics that helped me establish a target audience.
                    I created two documents to display all the information that I found, and then created two personas and one contra-persona based on my findings.
                    The target audience that came from my research are people interested in buying between 18 and 49 years old. 
                    A prince rage that I decided to implement will be between 5 and 25 euros, but not because of the survey answers, but because people pay less for medium quality, and as a beginner photographer I still do not provide high quality in pictures.
                    This is the document with the <a href={SurveyResult} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Survey results</a>.  
                    This is the document with the <a href={TargetAudienceResearch} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Target audience research results</a>.  
                     </p>
            </div>

            {/* Research */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Research</h3> 
                <p className="text-lg text-darkBlack font-body">
                    This is the text to be added.
                </p>
            </div>

            {/* Design and user testing */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Design and user testing</h3> 
                <p className="text-lg text-darkBlack font-body">
                    I decided to take a minimum of four user tests per prototype and also have one or two new people every time, to try to reach a bigger mass of people.
                    This is because my target audience is very vast and this method was approved and validated by a teacher.
                </p>
            </div>

            {/* Development and deploy */}
            <div className="px-40 py-24"> 
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Development and deploy</h3> 
                <p className="text-lg text-darkBlack font-body">
                    This is the text to be added.
                </p>
            </div>


        </div>
    );
}

export default PassionProject;
