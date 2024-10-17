import React, { useRef } from 'react';

function Assignments() {
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
                    My personal <br />
                </h1>

                <h2 className="absolute top-[60%] left-40 text-5xl text-darkPurple md:text-7xl font-bold font-header italic">
                    work
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
            <div ref={aboutMeRef} className="px-40 py-20">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Introduction</h3>
                <p className="text-lg text-darkBlack font-body">
                    On this page personal assignments can be found from different fields like, design, user research and development.
                    This assignments have the role to help me improve my skills but also my grades.
                </p>
            </div>

            {/* Code assignments */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Coding assignments</h3>
                <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">Here is my           <a
                    href="https://git.fhict.nl/I523382/my-work-semester-3-orange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue "
                >
                    Git
                </a>. In here you can find the assignments, and also the code for my portfolio.</h4>

                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Counting with JavaScript</h4>
                    I developed a basic JavaScript counter application for this task,
                    which increases the value every second and modifies the count displayed in an HTML element with the ID "counter."
                    I began by getting the counter element from the DOM and initializing a counter variable to zero.
                    Every time the counter increases, I apply a random hex color with a program,
                    that I have built to generate to the webpage's backdrop in order to improve the visual experience.
                    Also, I made sure the text color doesn't become unreadable by alternating between black and white according on whether the count is odd or even.
                    To make the counter dynamic and visually appealing, I called the growing function every second using `setInterval`.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Flying object game</h4>
                    For this assignment, I used JavaScript to create a jumping game in which a flyer character hops to avoid obstacles and keeps score.
                    The HTML elements for the flyer and score display were first retrieved, and then I initialized the variables for the score, gravity, location, jump height, and leap status.
                    The flyer can leap by using the `jump' function, which causes it to rise to a predetermined height before falling back down.
                    I built a function to produce new obstacle elements on a regular basis and move them around the screen in order to construct the obstacles.
                    The flyer's collision detection system determines whether it has struck an obstacle, ending the game and showing the score.
                    To allow the player to jump when they press the space key, I configured an event listener for that key.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Movie trailer</h4>
                    For this assignment, I made a HTML and JavaScript webpage with a main page and a slideshow page that was devoted to the horror film "IT."
                    Along with a warning message to set a frightening mood, the main page features the cast list, movie title, subtitle, and release date.
                    I added a button that takes the user to a different slideshow page and styled the page using an external Google Font.
                    To make the viewing experience even more engaging, the slideshow page features a variety of movie-related photos along with text descriptions that shift every three seconds.
                    I included audio controls with Font Awesome symbols so that viewers could pause, resume, and end a background music track while navigating the slideshow.
                    This project creates an interesting film display by combining JavaScript functionality, CSS styling, and HTML structure.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Pokemon</h4>
                    For this challenge, I created a web application that shows Pokémon cards and lets users combat them using the Pokémon API.
                    I started by creating the Pokémon API's base URL and obtaining the HTML components required to load Pokémon, display them, and display combat outcomes.
                    To retrieve Pokémon data by ID and handle any mistakes that might arise during the fetch process, I built an asynchronous method.
                    Following data reception, a different function generates and shows a card for every Pokémon, complete with name, image, and stats like Defense, Attack, and HP.
                    I added event listeners to the buttons, one for starting a combat and another for loading three randomly selected Pokémon cards.
                    As the battle progresses, the app assesses the attacking prowess of the visible Pokémon to determine the victor or if a tie occurs. In order to provide an interactive Pokémon experience, this project integrates APIs, manipulates HTML dynamically, and employs fundamental gaming principles.
                </p>
            </div>

            {/* Design and User research assignments */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Design and User research assignments</h3>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
            </div>

            {/* Media production assignments */}
            <div className="px-40 py-12">
                <h3 className="text-3xl text-normalPurple font-bold italic font-header mb-4">Media production assignments</h3>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">To be added.</h4>
                    To be added.
                </p>
            </div>


        </div>
    );
}

export default Assignments;
