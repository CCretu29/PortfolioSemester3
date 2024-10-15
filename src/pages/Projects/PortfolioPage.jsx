import React, { useRef } from 'react';
// doc links
import PortfolioSurvey from "../../assets/pdf/Personal/PortfolioSurvey.pdf";

function PortfolioPage() {
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
            <div ref={aboutMeRef} className="px-40 py-20">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Introduction</h3>
                <p className="text-lg text-darkBlack font-body">
                    In this place you will find information about my creating process of this portfolio. I built this portfolio as a website,
                    to practice more with my design skills and to learn new programming languages and frameworks.
                </p>
            </div>

            {/* Documents Section */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Research</h3>
                <p className="text-lg text-darkBlack font-body">
                    Before starting any design, I made a <a href={PortfolioSurvey} target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">survey</a> and presented it to some teachers to find out some
                    structural information, since the teachers are my target audience for this
                    project. I got useful information that I used later in my prototypes. I wanted to implement some comments and login features for the reason to use back-end and database, but it would be useless features as I saw from the survey.
                    I will use back-end for another project in order to aim for advanced. I saw that the color I should decide myself, and the teacher preferred a website, with visual representations and short relevant descriptions.
                    I received some good information from a presentation about the portfolio
                    structure. I started prototyping.
                </p>
            </div>

            {/* Design process */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Design process</h3>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Iteration 1</h4>
                    I created a wireframe as my first iteration when I was just thinking about how I wanted to
                    structure my portfolio.
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Iteration 2</h4>
                    Since everyone said I could choose any colors I wanted, I searched some color
                    palettes on Pinterest. Found an interesting orange one and started
                    designing. Everything came out too simple and square-looking. It was very
                    ugly. I discovered the gradients and abused them, wanting to change my
                    ugly, boring first version. To have less gradient and empty space, I put
                    some autumn-themed pictures on the background of the first section of the
                    pages. It was still too much gradient as I got feedback from the teachers,
                    and I was advised to think about my design project page structure because I had
                    multiple versions for that, and it looked chaotic.
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Iteration 3</h4>
                    I reflected on my feedback and decided to try with green. I structured
                    the portfolio in a clean and simple way that is going to be easily
                    navigated and clear.
                    I asked for feedback from two teachers and my structure was approved,
                    but I was told the green design it is okay, and it looks interesting, but it
                    does not give friendly vibes, it makes the person to want to get out of the
                    site as quick as possible.
                    After that, I tried the same structure with orange color pallet, but
                    everything looked boring and too orange. It did not look professional at
                    all.
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Iteration 4</h4>
                    I listened to a teacher advice from feedback and experimented with
                    multiple color pallets. I searched on Pinterest multiple color pallets and
                    found two with combinations of blue and pink and one with blue and
                    orange. I played around with the colors but still was not happy with the
                    results. It did not feel like the portfolio fitted me.
                    I found another color pallet with multiple shades of purple. I
                    experimented with it and loved the result. The feedback that I got is that
                    with those combinations of colors the portfolio looks much better and
                    gives friendly but still professional vibes. The meaning behind the colors
                    is that I was looking for a combination that I will also like and that
                    transmits my vibe, fits me when you look at it and it is nice to look at and
                    gives professional but still pretty vibes. Also, purple is generally
                    associated with royalty, luxury, nobility, power, and ambition. Purple is
                    also used to represent creativity, extravagance, dignity, grandeur,
                    independence, pride, peace, mystery, and magic.This is my <a href="https://www.figma.com/design/dtoTd0hTmDW7OoXVZ4oM5L/sem3?node-id=0-1&node-type=canvas&t=PHsTj2p6rDpklHJJ-0" target="_blank" rel="noopener noreferrer" className="text-xl font-header font-bold text-normalPurple underline">design</a>.
                </p>
            </div>

            {/* User test */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">User test</h3>
                <p className="text-lg text-darkBlack font-body">
                    To validate my choices for the portfolio more than asking for feedback, I
                    decided to do a user test to see if everything is clear. After creating the
                    final prototype, I tested it with four different users. I let the users
                    navigate through the interactive prototype and recorder the screen of my
                    laptop keeping the sound, with the users accord. I decided to do this user
                    test to make sure that my website will be user-friendly and will have a
                    very good UX-UI experience. The risks of not doing this test would have
                    consist in complicated and bad UX-UI experience, and even if I consider
                    myself one of the users, since I am directly implicated in the creation of
                    this website, I can easily overlook usability issues. The users were two
                    students from Software profile, one student from Media Design profile
                    and one student from Smart Mobile specialization. The user test took
                    place in a meeting room in the R10 building. After recording I watched
                    the videos and documented my findings to improve my prototype.
                    I asked the users to find the project and learning outcome page, to find
                    the reading guide and Git link and to feel free to give feedback and
                    suggestions.
                    The feedback from the user test validated that my design choices are
                    good. The user navigated through the website with no problems, the
                    project page and the learning outcomes page are clear and straight to the
                    point. The users knew the Git and reading guide are links because they
                    look like buttons, and the users said that the layout is very well
                    structured, the design looks pretty but also gives professional vibes and
                    the navigation is clear and simple. The only thing that was recommended
                    to me and was also recommended by the teachers in the feedback is,
                    when I code (because it is simple with the framework that I am using) to
                    experiment with the style that I am going to use in the project page for
                    my proof visuals and text.
                </p>
            </div>

            {/* Coding */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Coding my portfolio</h3>
                <p className="text-lg text-darkBlack font-body">
                    I looked online how to set up a react environment. I followed the
                    steps, write the commands in the VS code terminal and created my
                    set up. I searched what every file does to understand better.
                    I learned how to change the icon and name of the website in
                    browser. That can be easily made in the index.js file.
                    I learned how to create the routs for my pages and components, in
                    the App.js file, looking at similar projects and coding everything by
                    hand to understand better how the application works. That implies
                    creating my pages and components.
                    I installed and set up tailwind for styling.
                    I looked at other projects and managed to put by myself the root
                    for colors in the tailwind file.
                    I created a Nav bar and Footer as components and learned how to
                    style them using Tailwind. It was easy to learn how to create them.
                    My learning source was the project that I am working in Romania
                    and Learn React and Tailwind websites.
                    I finished coding the Main page of my portfolio. Using React and
                    Tailwind just for this side of front-end was very easy and interesting
                    to learn. Now that I know how to build a website with this, I plan to
                    investigate more interesting challenges.
                    I got to practice with a little bit of JavaScript functions and
                    I learned some basic things as importing pictures, documents and links.
                    I also created a readme file where I explain how to do the set up and install React and Tailwind,
                    and I also commented my code in a professional way.
                </p>
                <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">Here is my           <a
                    href="https://git.fhict.nl/I523382/my-work-semester-3-orange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue "
                >
                    Git
                </a>. In here you can find the code for my portfolio, and also other programming
                    assignments.</h4>
            </div>

            {/* Deploy */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Deploy my portfolio</h3>
                <p className="text-lg text-darkBlack font-body">
                    I tried to put my portfolio on the Hera server but that did not work for some reason.
                    I went to the ISSD to ask for help, and the guys there told me it will not work because Hera does not know how to read a React project.
                    I had to search another solution and I found out I can deploy it with GitHub Pages. I created a personal GitHub account and put my portfolio in there in a repository.
                    I followed instructions that I had found online.
                    To set up GitHub Pages, I went to the "Settings" tab in my repository and selected "Pages" from the menu on the left.
                    In the "Source" section, I chose the branch I wanted to publish from "typically `main`".
                    Since I didn't have a build folder, I left the selection as "/ root" and clicked "Save" to apply the settings.
                    Additionally, I made sure to run `npm run build` to generate the build files, and I included the script in my `package.json` for easier deployment.
                    GitHub then started publishing the site, which took a few minutes. Once the process was complete, I received a link, and I could access my live site there.
                    Something went wrong and the only thing that I could see on the website was my readme file. I searched online why and also asked the AI but could not find an answer.
                    Then I decided to use a website that a colleague told me about with is Netlify.
                    The instructions were on the website and it was very easy just to upload my portfolio there.
                    I connected with my GitHub account and took my portfolio from there, put in in the Netlify website.
                    On the page it was generated a link that I can use to access my portfolio website.

                </p>
                <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">Here is my <a
                    href="https://git.fhict.nl/I523382/my-work-semester-3-orange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue "
                >Git
                </a>. In here you can find the code for my portfolio, and also other programming
                    assignments.</h4>
            </div>


        </div>
    );
}

export default PortfolioPage;
