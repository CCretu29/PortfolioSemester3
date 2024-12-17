import React, { useRef } from 'react';
//pic links
import moodboardAestetic from "../../assets/photos/moodboard_aestetic.jpg"
import moodboardOrganized from "../../assets/photos/moodboard_organized.jpg"
import moodboardAfterFeedback from "../../assets/photos/style_based_moodboard.jpg"
import logos from "../../assets/photos/logo.jpg"
import firstDesign from "../../assets/photos/figma1.jpg"
import pictureIterations from "../../assets/photos/pictureiterations.jpg"
import projectPage from "../../assets/photos/projectsPage.jpg"
import icons from "../../assets/photos/figmaicons.jpg"
import pictures from "../../assets/photos/figmapics.jpg"
import contactSection from "../../assets/photos/contactSection.jpg"
//doc links
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
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Mood boards</h4>
                    For this project I created a mood board in order to decide what vibe we want to have.
                    Mood boards were never my strong point but I did try my best. I created two mood board looking for inspiration on Pinterest.
                    I found one model that  has only pictures put one next to each other that I found interesting, and then chose some pictures that I thought give the aurora vibe.
                    The second mood board used the same pictures, except I added a bit of space, some logo ideas, some color pallets, and fonts.
                    I got feedback on them from my peers, and also gave feedback to my peers too. 
                    My peers feedback was that they mostly liked the colors, logo ideas and the sunrise vibe. They also liked the structure of the mood board with only pictures.
                    Improvement points were to make it look more professional, to structure things better so what font I want to use becomes more clear and maybe have a bit more diversity.
                    This are the two mood boards.
                    <div className="flex justify-center mt-4">
                    <img src={moodboardAestetic} alt="Learning GIT" className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                    <img src={moodboardOrganized} alt="Learning GIT" className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                </div>

                <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Mood boards after feedback</h4>
                   After all the team members made mood boards and got feedback on them, we voted and chose a style. Based on that style we created one more mood board to decide fonts and colors.
                   I created mine trying to follow my peers advices, making the fonts clear, organizing everything, putting some logo ideas and colors.
                   Feedback that I got from my team mates for it is that if I use one color pallet, the rest of the mood board should also use those colors, 
                   that it can still look more professional even if it is organized, the fonts were still not clear, and that it looked more like an inspiration wall than a mood board. 
                   They did like the logo ideas. 
                   I learned from this feedback and next time when I will have to make a mood board I will take it in consideration, and inspire from my team mates good ideas from their mood boards.
                   This is my mood board.
                    <div className="flex justify-center mt-4">
                    <img src={moodboardAfterFeedback} alt="Learning GIT" className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                   </div>

                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Logos</h4>
                    Some teachers from semester two know that I do not really like to design logos, because I do not really like the tool that I have to use for that.
                    This task I left to my team mates, but to contribute just a little bit, I draw some ideas for them to have inspiration.
                    I am also not good at drawing, but that did not stop me to express my ideas. 
                    I made some sketches using our last mood board as inspiration, thinking what could also the name "Aurora" transmit.
                    I showed the drawings to my peers, and they liked them, and used them as inspiration initially.
                    We did decide on a letter logo at the end, choosing a professional style.
                    <div className="flex justify-center mt-4">
                    <img src={logos} alt="Learning GIT" className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                   </div>

                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Website design</h4>
                    The team decided that some of us, can make a simple design idea to have as inspiration and start for our website.
                    I inspired from the mood board we chose we are going to follow, made a simple and basic structure and added the colors we wanted.
                    I got feedback on the design, that it looks pretty, that it follows the mood boards and it is a good start.
                    Together with a colleague we compared our designs and started to create the prototype. 
                    I had an idea, for displaying the pictures with us. When you hover over
                    the picture it appears the name and some information about the person. I
                    experimented with different backgrounds and chose the transparent one.
                    My team mate also agreed the transparent background is the best idea for the hover.
                    I experimented with some icon style, making different version and my peers chose the most fitted one. 
                    I also designed the contact section, where a team mate guided me to make it minimalistic and simple.
                    Me and the colleague that I was working with decided together that we should show some of our past personal project in our website for the client to see what we are capable of.
                    Our peers loved the idea and I helped design the project page, following my team mate style and completing the page.
                    In the following pictures you will see my iterative process.
                    <div className="flex flex-wrap justify-center mt-4">
  <div className="flex justify-center w-full mb-4">
    <img src={firstDesign} alt="Prototype" className="w-2/2 mx-2 rounded-lg border-4 border-lightPurple" />
    <img src={pictureIterations} alt="Prototype" className="w-2/2 mx-2 rounded-lg border-4 border-lightPurple" />
  </div>
  <div className="flex justify-center w-full mb-4">
    <img src={pictures} alt="Prototype" className="w-1/2 mx-2 rounded-lg border-4 border-lightPurple" />
    <img src={icons} alt="Icons" className="w-1/2 mx-2 rounded-lg border-4 border-lightPurple" />
  </div>
  <div className="flex justify-center w-full">
    <img src={contactSection} alt="Contact Section" className="w-1/2 mx-2 rounded-lg border-4 border-lightPurple" />
    <img src={projectPage} alt="Project Page" className="w-1/2 mx-2 rounded-lg border-4 border-lightPurple" />
  </div>
</div>



                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">User test on website design</h4>
                    I did a user test on the website. This is my user test:
                    To validate the team choices the team made several user tests on our
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
