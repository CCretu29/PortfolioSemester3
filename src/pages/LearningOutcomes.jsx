import React, { useRef } from 'react';
//doc links
import { Link } from 'react-router-dom';
import StudioDesign from "../assets/pdf/Studio/StudioDesign.pdf";
import StudioContract from "../assets/pdf/Studio/StudioContract.pdf";
import TeamCharter from "../assets/pdf/Studio/TeamCharter.pdf";
import ReadingGuide from "../assets/pdf/Personal/ReadingGuide.pdf"; //reading guide1
import InterviewOne from "../../src/assets/pdf/Client/InterviewOne.pdf";
import InterviewTwo from "../../src/assets/pdf/Client/InterviewTwo.pdf";   
import AiResearchDoc from "../../src/assets/pdf/Client/AIResearchDoc.pdf";
import ProjectPlan from "../../src/assets/pdf/Client/projectPlanAI.pdf"; 
import DesignDocClient from "../../src/assets/pdf/Client/DesignDocumentClientProject.pdf"; 
import UserDoc from "../../src/assets/pdf/Client/UserResearch&TargetAudience.pdf"; 
import UserResearchQuestions from "../../src/assets/pdf/Client/UserResearchQuestions.pdf";
import ReadingGuideTwo from "../assets/pdf/Personal/ReadingGuide2.0.pdf";  //reading guide2
import ProjectPlanPassionProjectAfterFeedback from "../../src/assets/pdf/Passion/ProjectPlanPassionProjectAfterFeedback.pdf";
import SurveyResult from "../../src/assets/pdf/Passion/SurveyStatisticsResult.pdf";
import TargetAudienceResearch from "../../src/assets/pdf/Passion/TargetAudienceResearchDocument.pdf";
import ReadingGuideThree from "../assets/pdf/Personal/ReadingGuide3.0.pdf";  //reading guide3
import ProjectReport from "../../src/assets/pdf/Client/ProjectReport.pdf";
import AdviceReport from "../../src/assets/pdf/Client/AdvisoryReportAfterFeedback.pdf";
import CompeteAI from "../../src/assets/pdf/Passion/CompetingWithAIResearchDocument.pdf";
import Personas from "../../src/assets/pdf/Passion/Personas.pdf";
import UserTestAgreed from "../../src/assets/pdf/Passion/UserTestAgreements.pdf";
import UserTest from "../../src/assets/pdf/Passion/UserTestScripts.pdf";
import ReadingGuideFour from "../assets/pdf/Personal/ReadingGuide4.0.pdf";  //reading guide4
import ReadingGuideFive from "../assets/pdf/Personal/ReadingGuide5.0.pdf";  //reading guide5
import ProjectPReport from "../../src/assets/pdf/Passion/ProjectReport.pdf";
import AdvicePReport from "../../src/assets/pdf/Passion/AdvisoryReport.pdf";



function LearningOutcomesPage() {
    // Create a reference to the purple box element in the DOM.
    const purpleBoxRef = useRef(null);

    // Function to scroll smoothly to the referenced purple box.
    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="w-full min-h-screen bg-whiteCream">
            {/* Learning Outcomes Section */}
            <div className="relative h-[80vh] flex flex-col justify-center">
                <h1 className="absolute top-1/6 left-40 text-6xl text-darkPurple md:text-8xl font-bold font-header italic">
                    Learning Outcomes<br />
                </h1>
                <h2 className="absolute top-[60%] left-40 text-5xl text-normalPurple md:text-6xl font-header italic">
                    Burden of proof
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
            <div className="flex justify-center mb-16">
                <button
                    onClick={() => handleScroll(purpleBoxRef)}
                    className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
                >
                    Discover
                </button>
            </div>

            {/* Centered Purple Boxes */}
            <div ref={purpleBoxRef} className="space-y-24">
                {/* Box */}
                <div className="flex justify-center items-center min-h-[40vh] mt-24">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">Reading Guide versions</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href={ReadingGuide} target="_blank" rel="noopener noreferrer" className="underline">ReadingGuide version1</a></li>
                                <li><a href={ReadingGuideTwo} target="_blank" rel="noopener noreferrer" className="underline">ReadingGuide version2</a></li>
                                <li><a href={ReadingGuideThree} target="_blank" rel="noopener noreferrer" className="underline">ReadingGuide version3</a></li>
                                <li><a href={ReadingGuideFour} target="_blank" rel="noopener noreferrer" className="underline">ReadingGuide version4</a></li>
                                <li><a href={ReadingGuideFive} target="_blank" rel="noopener noreferrer" className="underline">ReadingGuide version5</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* First Box */}
                <div className="flex justify-center items-center min-h-[40vh] mt-24">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO1 - Conceptualize, design, and develop interactive media products</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><Link to="https://portfoliosemester3.netlify.app/" className="underline">Portfolio page</Link></li>
                                <li><a href={StudioDesign} target="_blank" rel="noopener noreferrer" className="underline">StudioDesign</a></li>
                                <li><a href={InterviewOne} target="_blank" rel="noopener noreferrer" className="underline">Interview with the girl - Group project</a></li>
                                <li><a href={InterviewTwo} target="_blank" rel="noopener noreferrer" className="underline">Interview with the boy - Group project</a></li>
                                <li><a href={UserDoc} target="_blank" rel="noopener noreferrer" className="underline">User research & Target audience - Group project</a></li>
                                <li><a href={UserResearchQuestions} target="_blank" rel="noopener noreferrer" className="underline">User research questions - Group project</a></li>
                                <li><a href={SurveyResult} target="_blank" rel="noopener noreferrer" className="underline">Survey Result - Passion project</a></li>
                                <li><a href={TargetAudienceResearch} target="_blank" rel="noopener noreferrer" className="underline">Target Audience Research - Passion project</a></li>
                                <li><a href={Personas} target="_blank" rel="noopener noreferrer" className="underline">Personas - Passion project</a></li>
                                <li><a href={UserTestAgreed} target="_blank" rel="noopener noreferrer" className="underline">User test agreements - Passion project</a></li>
                                <li><a href={UserTest} target="_blank" rel="noopener noreferrer" className="underline">User tests - Passion project</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Grade:</h3>
                            <p className="text-md mb-2">Advanced</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Reflection:</h3>
                            <p className="text-md mb-2">I believe that I proved my grade because I completed a lot of target research, learned what a Customer journey is and designed by the needs of the users.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Box */}
                <div className="flex justify-center items-center min-h-[40vh]">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO2 - Transferable production</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="https://git.fhict.nl/I523382/my-work-semester-3-orange" target="_blank" rel="noopener noreferrer" className="underline">My GitLab</a></li>
                                <li><a href="https://github.com/CCretu29" target="_blank" rel="noopener noreferrer" className="underline">MY personal GitHub</a></li>
                                <li><a href="https://git.fhict.nl/I509068/efteling-mijn-sprookje" target="_blank" rel="noopener noreferrer" className="underline">Group Git 1</a></li>
                                <li><a href="https://git.fhict.nl/I353593/mijnsprookje-pwa" target="_blank" rel="noopener noreferrer" className="underline">Group Git 2</a></li>
                                <li><a href="https://github.com/CCretu29/Photography-Blog-Backend" target="_blank" rel="noopener noreferrer" className="underline">Passion project Git</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Grade:</h3>
                            <p className="text-md mb-2">Advanced</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Reflection:</h3>
                            <p className="text-md mb-2">I believe that I proved my grade because I completed a lot of coding tasks, learned about Progressive web app, remembered some basic JavaScript, deployed my portfolio and learned a lot more about GIT.
                                I also remembered how to connect front end to back end and connect to a database, learned how to work with AI and integrate it in code and how to built a basic back end application.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third Box */}
                <div className="flex justify-center items-center min-h-[40vh]">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO3 - Creative iterations</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="https://www.figma.com/design/dtoTd0hTmDW7OoXVZ4oM5L/sem3?node-id=0-1&node-type=canvas&t=PHsTj2p6rDpklHJJ-0" target="_blank" rel="noopener noreferrer" className="underline">PortfolioDesign</a></li>
                                <li><a href={StudioDesign} target="_blank" rel="noopener noreferrer" className="underline">StudioDesign</a></li>
                                <li><a href={DesignDocClient} target="_blank" rel="noopener noreferrer" className="underline">Design Document Client Project</a></li>
                                <li><a href="https://www.figma.com/design/dtoTd0hTmDW7OoXVZ4oM5L/sem3?node-id=207-4&t=eZM1NyG2dTdNshOh-1" target="_blank" rel="noopener noreferrer" className="underline">Passion project website design</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Grade:</h3>
                            <p className="text-md mb-2">Proficient</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Reflection:</h3>
                            <p className="text-md mb-2">I believe that I proved my grade because I completed multiple designs based on the users needs, respected design principles, brainstormed design concepts and user tested everything.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fourth Box */}
                <div className="flex justify-center items-center min-h-[40vh]">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO4 - Professional standards</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href={StudioContract} target="_blank" rel="noopener noreferrer" className="underline">StudioContract</a></li>
                                <li><a href={TeamCharter} target="_blank" rel="noopener noreferrer" className="underline">TeamCharter - Group project</a></li>
                                <li><a href={AiResearchDoc} target="_blank" rel="noopener noreferrer" className="underline">AiResearchDoc - Group project</a></li>
                                <li><a href={ProjectPlan} target="_blank" rel="noopener noreferrer" className="underline">ProjectPlan - Group project</a></li>
                                <li><a href={ProjectReport} target="_blank" rel="noopener noreferrer" className="underline">ProjectReport - Group project</a></li>
                                <li><a href={AdviceReport} target="_blank" rel="noopener noreferrer" className="underline">AdviseReport - Group project</a></li>
                                <li><a href={ProjectPlanPassionProjectAfterFeedback} target="_blank" rel="noopener noreferrer" className="underline">ProjectPlan - Passion Project</a></li>
                                <li><a href={CompeteAI} target="_blank" rel="noopener noreferrer" className="underline">Competing with AI research document - Passion Project</a></li>
                                <li><a href={ProjectPReport} target="_blank" rel="noopener noreferrer" className="underline">ProjectReport - Passion project</a></li>
                                <li><a href={AdvicePReport} target="_blank" rel="noopener noreferrer" className="underline">AdviseReport - Passion project</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Grade:</h3>
                            <p className="text-md mb-2">Proficient</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Reflection:</h3>
                            <p className="text-md mb-2">I believe that I proved my grade by showing my research skills, by applying methodologies that I have learned about and with the vast research that I have done this semester.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fifth Box */}
                <div className="flex justify-center items-center min-h-[40vh]  pb-24">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO5 - Personal leadership</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href={StudioContract} target="_blank" rel="noopener noreferrer" className="underline">StudioContract</a></li>
                                <li><a href={TeamCharter} target="_blank" rel="noopener noreferrer" className="underline">TeamCharter</a></li>
                                <li><a href={ReadingGuide} target="_blank" rel="noopener noreferrer" className="underline">Solving a team
                                    conflict (This is the Reading guide first version)
                                </a></li>
                                <li><Link to="https://portfoliosemester3.netlify.app/about/" className="underline">The About me page</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Grade:</h3>
                            <p className="text-md mb-2">Advanced</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2 text-lightPurple">Reflection:</h3>
                            <p className="text-md mb-2">I believe that I proved my grade because I handled very well every situation and discussion in our team, I went to the Dutch Design week and learned and saw a lot of interesting things, I am every day growing in knowledge, learning a lot from this semester and I already started to prepare for my Front-end developer internship.
                                Also, I helped a friend and colleague to be more organized, to build her React project and to chose her specialization.
                                I chose my specialization and I already know what I want to do in my future Fonts years and alo in my career, and expressed my opinions on what I do like and do not like to do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearningOutcomesPage;
