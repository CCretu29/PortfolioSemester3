import React, { useRef } from 'react';
// doc links
import AiResearchDoc from "../../assets/pdf/Client/AIResearchDoc.pdf";
import ProjectPlan from "../../assets/pdf/Client/projectPlanAI.pdf";
import UserResearchQuestions from "../../assets/pdf/Client/UserResearchQuestions.pdf";
import InterviewOne from "../../assets/pdf/Client/InterviewOne.pdf";
import InterviewTwo from "../../assets/pdf/Client/InterviewTwo.pdf";
// pic links
import CustomerJourney from "../../assets/photos/customerJourney.png";
import EmpathyMap from "../../assets/photos/empathyMap.jpg";
import IdeaDesign from "../../assets/photos/conceptPrototype.jpg";
import figmaDesign from "../../assets/photos/figmaGroup.jpg";
import iterationDesign from "../../assets/photos/figmaGroupIterations.jpg";

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
                    Our first steps were to do some general research before the client answered us. We are using the CMD research method, and this is the first phase, LIBRARY RESEARCH.
                    My part was to research text and audio AI generators. I looked through many websites and found useful answers.
                    I discovered a lot of free AI tools that we could use and compared which one would be better to use, and I learned a bit about how to use them as well.
                    My findings and references can be found in this <a href={AiResearchDoc} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">document</a>.
                </p>
                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Project plan</h4>
                <p className="text-lg text-darkBlack font-body">
                    All team members worked on the project plan. My role, together with a colleague, was to write the scope, deliverables, non-deliverables, and the MoSCoW chart. We discussed and decided as a team what we want to deliver and what we do not.
                    I also wrote the Configuration management witch are basic rules of working together in the development phase.
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
                    Whit the fact that I speak a low level of Dutch, I wrote this questions to be asked to both the child and the parent, because a child's english is also not that advanced for this type of interview.
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
                    Following additional interviews conducted by my peers, we collectively concluded that our target audience age range should be younger, between 4 and 6 years old, because children above six years old are not into stories anymore, but more into games.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    The team split the task to conclude our FIELD RESEARCH. Me and one colleague chose the customer journey task. We chose a template from Canva and started building it.
                    We wrote about two different situation, one in witch the child is supervised by the parent and one where the child is left alone with the parent's phone to play on the story app.
                    The actions, touch points and emotion are similar in the situations but the pain points differ. From this customer journey we took that the child is better supervised by the parent when they use the application.
                    All groups members created the Empathy map. I shared my ideas and was part of the discussion that decided how our target feels, thinks does and says.
                </p>
                <div className="flex justify-center mt-12">
                    <div className="text-center mx-2">
                        <img src={CustomerJourney} alt="customer journey" className="w-4/3 md:w-2/2 rounded-lg border-8 border-lightPurple" />
                        <p className="mt-2">Customer Journey</p>
                    </div>
                    <div className="text-center mx-2">
                        <img src={EmpathyMap} alt="empathy map" className="w-4/3 md:w-1/2.5 rounded-lg border-8 border-lightPurple" />
                        <p className="mt-2">Empathy Map</p>
                    </div>
                </div>
            </div>

            {/* Concept */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Concept for the project</h3>
                <p className="text-lg text-darkBlack font-body">
                    After we established a target audience and summarize the interviews we created a concept. I helped with some ideas and I was present in the discussion even tho I did not did the sketch.
                    My ideas: to have the main application in dutch but have "change language" option in case international children visit the park, to add music to the stories to make them more attractive, to have multiple characters options for the kids and to set a time limit for the stories session per kid.
                    With the rest of ideas even if I did not created them, I shared my opinion and was involved in deciding what we need and do not need.
                </p>
            </div>


            {/* Design */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Application for children design</h3>
                <p className="text-lg text-darkBlack font-body">
                    I designed some ideas that can be used in the future for the final prototype. I put there what came first to my mind following our concept structure.
                    Later on, based on our ideas the concept became more structured and clear and the team decided that we will make three or more prototypes for user tests.
                    I created one prototype. I started to look online what colors work with the colors of a three, since we decided that the tree is going to be a part of the story.
                    I found a color pallet that fitted not only with the tree but with the Efteling park theme as well. I started to experiment with background and buttons colors until I found the right combinations.
                    I created a simple interface, so the children that are younger to find it also easy to navigate. I decided the big text and pictures are a very good idea because they imitate the reading books for kids that the parents use to teach their children to read.
                    I chose to have some forest elements around the screens to make the fairytale forest as real as possible.
                </p>
                <div className="flex justify-center mt-12">
                    <div className="text-center mx-2">
                        <img src={IdeaDesign} alt="IdeaDesign" className="w-4/3 md:w-2/2 rounded-lg border-8 border-lightPurple" />
                        <p className="mt-2">Ideas for prototype</p>
                    </div>
                    <div className="text-center mx-2">
                        <img src={figmaDesign} alt="figmaDesign" className="w-4/3 md:w-1/2.5 rounded-lg border-8 border-lightPurple" />
                        <p className="mt-2">The prototype</p>
                    </div>
                    <div className="text-center mx-2">
                        <img src={iterationDesign} alt="iterationDesign" className="w-4/3 md:w-1/2.5 rounded-lg border-8 border-lightPurple" />
                        <p className="mt-2">Testing styles</p>
                    </div>
                </div>
            </div>

            {/* Coding */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Coding the application</h3>
                <p className="text-lg text-darkBlack font-body">
                    We had a meeting with the client where he approved our prototype and concept and he told us to focus on coding the AI part.
                    We divided tasks and I got to code the speech-to-text and text-to-speech features. It was a challenging task not only because I never worked with AI before,
                    but because I did not understand how the AI will function in our application technically. In a Figma prototype anything looked nice and simple, but then doing it was more complicated than I expected.
                    I did not give up and asked for help from one of my peers and my boyfriend that has done software profile and an AI application for a start up.
                    My colleague explained to me what the AI ia supposed to do and my boyfriend taught me the technical part. I already knew what a controller and service file is from my semester two project, and how to create the backend part, but did not know how to integrate the AI.
                    I also commented my code writing what everything does for my peers to understand what I did.
                    <br></br>
                    This is how I made my part for this project:
                    I built a Node.js application using Express.js that offers audio transcription and text-to-speech services.
                    It uses the Replicate API to handle these tasks, with authentication set up through environment variables.
                    The app has two main functions: one for converting audio files, URLs, or base64 data into text, and another for turning text into speech audio files.
                    Both functions use the Replicate API to perform these conversions. The server is configured to handle large data and runs on a specified port, 8080.
                    This allows complex AI tasks to be accessed easily through simple HTTP requests.
                    <br></br>
                    The application uses the Replicate API for AI-powered processing, with authentication handled through environment variables loaded by dotenv.
                    It features two main controllers: transcribeAudioController and textToSpeechController.
                    The transcribeAudioController accepts audio input in various forms, such as uploaded files, URLs, or base64-encoded data, converts it to text using the Replicate API, and returns the transcription.
                    Temporary files created during processing are deleted to manage resources efficiently. The textToSpeechController converts text input into speech audio files, also using the Replicate API, and sends these files back as downloadable responses.
                    I implemented a helper function to handle streaming data from the API, saving it as audio files. The server is configured to listen on a specified port, defaulting to 8080 if not set in environment variables, and includes middleware to handle large JSON and URL-encoded payloads.
                    This setup abstracts complex AI functionalities into simple HTTP endpoints, making it easy to integrate these capabilities into web applications.
                    <br></br>
                    From this project I learned how to integrate an AI in my application, to create and what it is an ".env" file and how generative AI works.
                    What I already knew is how to set up my NodeJS application, how to create the backend and how to test in Postman.
                </p>
                <br></br>
                <p className="text-lg text-darkBlack font-body">
                    During our project, we encountered some challenges with our initial Git repository structure.
                    Recognizing this issue, my boyfriend, who has experience in software development, offered to give us a Git workshop. This workshop  helped us understand better practices for repository management.
                    Following this, one of my colleagues took the initiative to create a new, better-structured Git repository for our project.
                    In addition to the AI integration work I described earlier, I also successfully connected the back-end and front-end components for the speech-to-text and text-to-speech features.
                    This integration was crucial for ensuring that our AI functionalities worked seamlessly within the overall application.
                    While working on the project, I encountered a console error originating from an HTML file containing script code written by another team member.
                    Despite not being familiar with that part of the codebase, I took it upon myself to investigate and ultimately fix the error. This experience not only resolved the immediate issue but also deepened my understanding of debugging in a collaborative environment.
                </p>
                <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">Here is the first group           <a
                    href="https://git.fhict.nl/I509068/efteling-mijn-sprookje"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue "
                >
                    Git
                </a>.</h4>
                <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">Here is the second group           <a
                    href="https://git.fhict.nl/I353593/mijnsprookje-pwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue "
                >
                    Git
                </a>.</h4>
            </div>

            {/* Documents */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Documents</h3>
                <p className="text-lg text-darkBlack font-body">
                    Together, my team and I wrote the Project report. One of my colleague added all the content, and I wrote my part in the "Process elaboration" with every step that I made for every phase.
                    Here you can find the <a href={UserResearchQuestions} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">document</a>.
                </p>
            </div>

            {/* Presentation */}
            <div className="px-40 py-24">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Presentation</h3>
                <p className="text-lg text-darkBlack font-body">
                    My colleagues created the presentation, and we practiced twice to make sure that we are ready for the client. First we decided to se how much time will it take to present.
                    The time was too little so my peers added more content, and we rehearsed again, this time taking longer, witch we wanted. 
                    On the Sunday before, I also repeated my part to be ready for the presentation.
                </p>
            </div>


        </div>
    );
}

export default ClientProject;
