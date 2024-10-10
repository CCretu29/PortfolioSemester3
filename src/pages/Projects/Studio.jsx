import React, { useRef } from 'react';
//doc links
import StudioDesign from "../../assets/pdf/Studio/StudioDesign.pdf";
import StudioContract from "../../assets/pdf/Studio/StudioContract.pdf";
import TeamCharter from "../../assets/pdf/Studio/TeamCharter.pdf";
//import ReadingGuide from "../assets/pdf/Personal/ReadingGuide.pdf";

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
            <div ref={aboutMeRef} className="px-40 py-20">
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
            <div className="px-40 py-8">
                <h3 className="text-3xl text-normalPurple font-bold font-header italic mb-4">Documents and research</h3>
                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Team Charter</h4>
                <p className="text-lg text-darkBlack font-body">
                    I wrote a part of the <a href={TeamCharter} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Team Charter</a><div className=""></div>
                    Wrote my strengths and weaknesses
                    Decided with the team our core values
                    Wrote some of the rules
                    Was part of the role’s discussion
                    Wrote one of the goals
                    Decided together with my team our products
                    We chose a name in a fun way. Everyone wrote ideas on my post its and
                    we chose the one we liked more. Doing this multiple times we decided
                    our name was Aurora Rise Studio. We asked feedback for the name.
                    Teacher suggested to remove the word “Rise” because Aurora is already a
                    strong name. We agreed.
                </p>
                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Studio Contract</h4>
                <p className="text-lg text-darkBlack font-body">
                    I helped writing the official <a href={StudioContract} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Studio Contract</a><div className=""></div> between the team. I wrote a part of
                    the meeting section and the rules section.
                    Our team had a small conflict. Communication was lacking from multiple
                    sides and the tasks were a bit chaotic. From that reason someone would
                    just fix other people tasks without asking, people would work on things
                    without discussing and we fight a bit on the group chat that we have. I
                    propose to have a discussion on Monday. At the discussion I respectfully
                    talked about my problems and then everyone shared what they had to
                    share. I proposed some rules that were written by me in the contract and
                    then rephrased in a nicer way by a colleague. Everyone is fine now and
                    doing their own tasks, we have more structure and organization, and we
                    solved our conflict. I will not give any names, and I would prefer the
                    teachers to not ask us about this, I put it here to show my Personal
                    leadership skills and that me and my team managed to solve this situation
                    by ourselves.
                </p>
            </div>

            {/* Design process */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Design process</h3>
                <p className="text-lg text-darkBlack font-body">
                    Here you can find proof pictures: <a href={StudioDesign} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">Proof picture document</a><div className=""></div>
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Mood boards</h4>
                    I made two mood boards. Got feedback from the team on them. Gave
                    feedback for my peer’s mood boards too. Here is the link for the mood
                    boards.
                    Based on that I was a part of choosing a style for which I did another
                    mood board, got feedback on it and gave feedback on my peer’s mood
                    boards as well.
                    From this I learned that I could improve my mood boards, I made them
                    too simple and basic. I now understand how a mood board should look
                    and be made by receiving feedback and looking at my colleague’s work.
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Logos</h4>
                    I made some logo sketches from witch my team find inspiration.
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Website design</h4>
                    I made a website design together with a peer. I made more iterations on
                    the website design experimenting with colors and shapes until I was
                    happy with the results. I experimented with the style for pictures,
                    project page and contact section asking for feedback from my peers.
                    In the following pictures you will see my iterative process.
                    Here is the first design that I made for us to have an idea and some
                    inspiration to create the website.
                    I had an idea, for displaying the pictures with us. When you hover over
                    the picture it appears the name and some information about the person. I
                    experimented with different backgrounds and chose the transparent one.
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">User test on website design</h4>
                    I did a user test on the website. This is my user test:
                    “To validate the team choices the team made several user tests on our
                    final version website prototype. The user test was made with a student
                    from Smart Mobile profile at my house. I recorded the screen of my
                    laptop with the sound on with the approval of the user. After recording I
                    watched the videos and documented my findings. I asked the user to find
                    the About us page and Project page. The user found the pages with no
                    problems. The feedback received from the user is that the website looks
                    nice and professional, the logo fits the rest of the website style, the
                    navigation is simple and clear and the information as well. The user liked
                    the contact section idea and said that the website looks minimalistic and
                    fancy. I asked if the user could tell that this a website for a creative full
                    stack studio and they replied yes.
                    I am happy with this feedback, that gave us one more validation to go on
                    with it.
                </p>
            </div>

            {/* Preparing for client project */}
            <div className="px-40 py-20">
                <h3 className="text-3xl text-normalPurple font-bold font-header italic mb-4">Preparing for client project</h3>
                <p className="text-lg text-darkBlack font-body">
                    Together with my team I decided that we should present a video for the
                    client, along with the presentation with our products.
                    I was a part of filming a lot of shots and taking pictures for our video.
                </p>
            </div>

        </div>
    );
}

export default Studio;
