import React, { useRef } from 'react';
import Slideshow from "../../components/Slideshow";
// doc links
import ProjectPlanPassionProject from "../../assets/pdf/Passion/ProjectPlanPassionProject.pdf";
import ProjectPlanPassionProjectAfterFeedback from "../../assets/pdf/Passion/ProjectPlanPassionProjectAfterFeedback.pdf";
import SurveyResult from "../../assets/pdf/Passion/SurveyStatisticsResult.pdf";
import TargetAudienceResearch from "../../assets/pdf/Passion/TargetAudienceResearchDocument.pdf";
import Personas from "../../assets/pdf/Passion/Personas.pdf";
import AIResearch from "../../assets/pdf/Passion/CompetingWithAIResearchDocument.pdf";
import UserScript from "../../assets/pdf/Passion/UserTestScripts.pdf";
import UserAccord from "../../assets/pdf/Passion/UserTestAgreements.pdf";
import ProjectReport from "../../assets/pdf/Passion/ProjectReport.pdf";
import AdvisoryReport from "../../assets/pdf/Passion/AdvisoryReport.pdf";
// pic links
import planning from "../../assets/photos/planning.jpg";
import dataBase from "../../assets/photos/dataBase.jpg";

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
                <p className="text-lg text-darkBlack font-body">
                    From this I learned that the planning and phasing should be connected, that for me, the Waterfall methodology works very well, that a Moscow should be detailed with both technical and non technical matters and that, to a client I do not have to deliver everything, but to a teacher I must.
                </p>
            </div>

            {/* Target audience */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Target audience</h3>
                <p className="text-lg text-darkBlack font-body">
                    In order to start creating any design for my application I had to find my target audience. I was expecting this task to take some time and to be complicated because I thought not that many people would want to buy photos.
                    I created a survey and shared it with international people that I know. In the survey I am asking about the age, if people would buy photos and what categories, what price would they prefer.
                    I got 22 answers from this survey and went for feedback. I was told that only a survey would not be enough to find a certain target audience and that it would be better to also search for some statistics online.
                    I searched and found some statistics that helped me establish a target audience. My finding was that people between 18 and 49 years old are more likely to buy photos online for personal and professional matters.
                    Under 18 they are interested in spending the money in other ways, and the audience above 49 years old does not use technology that much yet.
                    I created two documents to display all the information that I found, summarizing the findings in the surveys and research.
                    I created two personas and one counter-persona, and made a result report on them. This task was needed to see what do I need in my website and what I do not.
                    A prince rage that I decided to implement will be between 5 and 25 euros, but not because of the survey answers, but because people pay less for medium quality, and as a beginner photographer I still do not provide high quality in pictures.
                    <p className="text-lg text-darkBlack font-body">This is the document with the <a href={SurveyResult} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Survey results</a>.  </p>
                    <br></br>
                    <p className="text-lg text-darkBlack font-body"> This is the document with the <a href={TargetAudienceResearch} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Target audience research results</a>.  </p>
                    <br></br>
                    <p className="text-lg text-darkBlack font-body"> Here is the document with the personas, counter-persona and the result report <a href={Personas} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Personas, counter persona, result report</a>. </p>
                </p>
            </div>

            {/* Research */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Research</h3>
                <p className="text-lg text-darkBlack font-body">
                    In one of the feedback sessions that I asked for, for this project, a teacher asked me an interesting question: "Why are you better than AI? Why should I buy your photos in stead of generating them?".
                    This question has all the rights to be there, so I made some research and found an explanation. Beside some online findings that argument that the human eye has no compassion, that a human can express feelings and emotions through the photos, I found some answer personally.
                    Having the chance to work with a image generative AI for the group project, I noticed it has flaws, sometimes generated weird or wrong thins, even the prompt explains in detail what it has to do.
                    Also, from a presentation from a while ago, I saw that the user has to know how to "talk" with the AI for it to generate what the person wants. Some prompts just are not detailed enough, or they are too detailed.
                    I never used AI to generate pictures anyway, because I prefer to take the pictures myself. It feels better, it feels right and for me, it is easier.
                    <p className="text-lg text-darkBlack font-body">This is the document with the <a href={AIResearch} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Competing With AI Research Document</a>.  </p>
                </p>
            </div>

            {/* Design and user testing */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Design and user testing</h3>
                <p className="text-lg text-darkBlack font-body">
                    I decided to take a minimum of four user tests per prototype and also have one or two new people every time, to try to reach a bigger mass of people.
                    This is because my target audience is very vast and this method was approved and validated by a teacher.
                    In developing the final prototype for my photography blog, I followed a comprehensive iterative process, incorporating user feedback and design principles at each stage:
                    </p>
                    <br></br>
                    <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Wireframe Creation:</h4>
                    I started by creating simple wireframes to establish the basic structure and navigation of the website. These wireframes focused on layout and functionality without any color or detailed design elements.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Initial User Testing:</h4>
                    I conducted user tests with the wireframes, gathering feedback on navigation and overall structure. This phase revealed the need for more intuitive navigation and a clearer presentation of photo categories. Importantly, I created a user test approval document, ensuring ethical testing practices and obtaining consent from all participants.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">First Functional Prototype:</h4>
                    Incorporating the initial feedback, I developed the first functional prototype. This version included improved navigation, a more structured gallery, and basic search and filter functions. Based on user suggestions, I added a "Browse All" button and ensured the category names were clearly visible without scrolling.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Color Experimentation:</h4> 
                    At this stage, I began experimenting with different color schemes. I chose to focus on purple and blue, understanding that purple is associated with creativity and blue with trust - both crucial elements for a photography portfolio.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Peer Review:</h4>
                    I consulted with my peers, showing them different color variations and layouts. Their input was valuable in refining the aesthetic direction of the site.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Second Round of User Testing:</h4>
                    With the colored prototype, I conducted another round of user tests. Users appreciated the clean design but requested more information about licensing and usage rights. They also suggested making the contact information more prominent and adding a fixed navigation bar for easier access to all options.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Refinement and Feature Addition:</h4>
                    Based on this feedback, I added informative icons for licensing details and clarified the purchase process. I implemented a fixed navigation bar and made the contact information more accessible from the main page. I also fine-tuned the color palette to ensure it complemented the photographs without overshadowing them.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Final Adjustments:</h4>
                    In the last iteration, I made subtle adjustments to improve overall user experience, such as refining button placements and enhancing the responsiveness of the gallery. I also added multiple ways to access the gallery and implemented both a filter function and a "view all" option, as suggested by users.
                    <br></br>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Final Feedback:</h4>
                    The last round of testing confirmed that the interface was intuitive and efficient for a diverse range of users. Users particularly appreciated the clear pricing structure, the easy-to-find licensing information, and the multiple ways to browse and filter images.
                    Throughout this process, I consistently sought feedback from different user groups and peers, always ensuring I had proper documentation and approval for user testing. I paid special attention to how the design elements, particularly the color scheme, affected the perception and usability of the site.
                    <br></br>
                    Some key user feedback that I implemented included:
                    Adding a fixed navigation bar for constant access to all options
                    Implementing both category browsing and a search/filter function
                    Making licensing and usage rights information easily accessible through info icons
                    Ensuring multiple pathways to access the gallery from different parts of the site
                    Improving the visibility of contact information for custom requests
                    Refining the checkout process to make it more straightforward
                    The final prototype represents a culmination of these iterative improvements, resulting in a user-friendly interface that effectively showcases my photography while providing a smooth and enjoyable browsing experience.
                    <br></br>
                    This is my <a href="https://www.figma.com/design/dtoTd0hTmDW7OoXVZ4oM5L/sem3?node-id=207-4&t=eZM1NyG2dTdNshOh-1" target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">design</a>.
                </p>
                <p className="text-lg text-darkBlack font-body"> This is the document with the <a href={UserScript} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">User Test Scripts</a>.  </p>

                <p className="text-lg text-darkBlack font-body"> Here is the document with the <a href={UserAccord} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">User Test Agreements</a>. </p>
            </div>

            {/* Development and deploy */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Development and deploy</h3>
                <p className="text-lg text-darkBlack font-body">
                    Before the Christmas holiday I started to create the Node project, by running commands in the terminal.
                    Next step was to create the structure of the project. I wanted to have a basic structure first so I can understand better the roles of the folders, files and code. 
                    I looked up other similar projects and found that they have similar structure and replicate it. I created "Controllers", "Routes", "Services", "Modules" and "Config". 
                    In a backend project, the folder structure that I created helps organize and separate different aspects of the application.
                    Controllers handle the application's logic, processing requests and responses.
                    Routes define API endpoints and direct traffic to the appropriate controllers.
                    Services contain the core business logic, implementing complex operations and data processing.
                    Modules bundle related components together, improving code organization and reusability.
                    The Config folder stores configuration files, including environment variables and application-wide settings.
                </p>

                <div className="flex justify-center mt-4">
                    <img src={dataBase} alt="AppSite" className="w-4/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                </div>
                
                <br></br>
                <p className="text-lg text-darkBlack font-body">
                    The next step was to connect to a database. I logged into my MongoDB Atlas account at cloud.mongodb.com.
                    Once I was in, I saw my cluster dashboard and clicked on the "Connect" button next to the cluster I wanted to use.
                    In the connection dialog, I chose to use the Data Explorer right there in the browser.
                    Before I could actually access my data, I had to make sure my IP address was whitelisted in the Network Access settings.
                    I also double-checked that I had a database user set up with the right permissions.
                    Once all that was sorted, I could view and interact with my databases and collections directly through the Atlas web interface.
                    I created a separate function called connectDB to handle the database connection using Mongoose.
                    In this function, I first required mongoose and dotenv to load my environment variables. 
                    Then, I set up an async function that tries to connect to the database using the MongoDB URI I stored in my .env file.
                    I made sure to add some error checking – if the URI isn't defined in the .env file, I throw an error.
                    I used try-catch to handle any connection errors, logging them to the console and exiting the process if something goes wrong.
                    If the connection is successful, I log a success message.
                    Finally, I exported this function so I could use it in my main application file. 
                    </p>
                    <br></br>
                <p className="text-lg text-darkBlack font-body">
                After setting up my MongoDB connection, I started building out the rest of my project.
                I started by creating user authentication, learning how to make a base user and an admin user.
                I set up routes for getting user info and admin info, and implemented delete functionality.
                One of the cool features I added was the ability for admins to upload and delete pictures, while regular users could buy and download them.
                I made sure to implement proper authentication and authorization using middleware to keep everything secure.
                I also added a messaging system where users could send messages and admins could receive them.
                Throughout the process, I used Postman to test all my API endpoints. 
                I checked my MongoDB Atlas cluster in the browser to make sure all the data was being stored and retrieved correctly.
                It was a bit challenging at times, especially when I was figuring out how to handle uploads and downloads, but I learned a lot about building a full-featured backend. 
                By the end, I had a pretty solid system with different user roles, file management, and communication features all working together and I achieved some interesting knowledge.
                    </p>
                    <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">Here is the           <a
                    href="https://github.com/CCretu29/Photography-Blog-Backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue "
                >
                    Git 
                </a> that contains my project.</h4>

                {/* Slideshow Component */}
        <Slideshow />

            </div>

             {/* Documents */}
             <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Documents</h3>
                <p className="text-lg text-darkBlack font-body">
                    Lastly, I created the final documents. I used my group project template for the Project report and Advisory report.
                    In the project report, I outlined the context, goals, and requirements of the website, as well as the development process I followed using the Double Diamond methodology.
                    The advisory report provides a more detailed analysis of the project, including objectives, methodology, and recommendations for future development.
                    I successfully implemented the backend using Node.js, Express, and MongoDB, but due to time constraints, I couldn't complete the front-end development as initially planned.
                    These documents reflect my experience in backend development, database management, and project planning, while also highlighting areas for future improvement and expansion of the project. 
                </p>
                <br></br>
                <p className="text-lg text-darkBlack font-body">This is the <a href={ProjectReport} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Project Report</a>.  </p>
                    <br></br>
                    <p className="text-lg text-darkBlack font-body"> This is the <a href={AdvisoryReport} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Advisory Report</a>.  </p>
            </div>

            {/* Reflection */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Reflection</h3>
                <p className="text-lg text-darkBlack font-body">
                This project, even if it was a short one, thought me a lot. I had the opportunity to improve my research, design and UX skills and to also improve my coding knowledge.
                At the beginning of this project I had a plan to create every single feature in back end, to also make the front end and the connection between them.
                Due to time constrains, I was able to implement most of the back end leaving the other features.
                I did show my knowledge in React and connections through other project but I would have liked to finish this one too.
                I will continue to work on this project and finish it, even if it will not count for my grade anymore, it will count for me.
                I am proud of the work I managed to complete and grateful for the opportunity to learn more.
                </p>
            </div>


        </div>
    );
}

export default PassionProject;
