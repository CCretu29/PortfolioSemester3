import React, { useRef } from 'react';
// pic links
import GitLearn from "../../assets/photos/gitLearn.jpg";
import LearnGit from "../../assets/photos/learnGit.jpg"
import AppSite from "../../assets/photos/SIteApp.png"
// video links
import Counting from "../../assets/videos/counting.mp4"
import Flying from "../../assets/videos/flyingGame.mp4"
import Counter from "../../assets/videos/JScounter.mp4"
import Movie from "../../assets/videos/movie.mp4"
import Pokemon from "../../assets/videos/pokemon.mp4"

function Assignments() {
    const aboutMeRef = useRef(null);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full min-h-screen bg-whiteCream flex flex-col">
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

                {/*task*/}
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
                <div className="flex justify-center mt-4">
                    <video className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" controls>
                        <source src={Counter} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/*task*/}
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Flying object game</h4>
                    For this assignment, I used JavaScript to create a jumping game in which a flyer character hops to avoid obstacles and keeps score.
                    The HTML elements for the flyer and score display were first retrieved, and then I initialized the variables for the score, gravity, location, jump height, and leap status.
                    The flyer can leap by using the `jump' function, which causes it to rise to a predetermined height before falling back down.
                    I built a function to produce new obstacle elements on a regular basis and move them around the screen in order to construct the obstacles.
                    The flyer's collision detection system determines whether it has struck an obstacle, ending the game and showing the score.
                    To allow the player to jump when they press the space key, I configured an event listener for that key.
                </p>
                <div className="flex justify-center mt-4">
                    <video className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" controls>
                        <source src={Flying} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/*task*/}
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Movie trailer</h4>
                    For this assignment, I made a HTML and JavaScript webpage with a main page and a slideshow page that was devoted to the horror film "IT."
                    Along with a warning message to set a frightening mood, the main page features the cast list, movie title, subtitle, and release date.
                    I added a button that takes the user to a different slideshow page and styled the page using an external Google Font.
                    To make the viewing experience even more engaging, the slideshow page features a variety of movie-related photos along with text descriptions that shift every three seconds.
                    I included audio controls with Font Awesome symbols so that viewers could pause, resume, and end a background music track while navigating the slideshow.
                    This project creates an interesting film display by combining JavaScript functionality, CSS styling, and HTML structure.
                </p>
                <div className="flex justify-center mt-4">
                    <video className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" controls>
                        <source src={Movie} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/*task*/}
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Pokemon</h4>
                    For this challenge, I created a web application that shows Pokémon cards and lets users combat them using the Pokémon API.
                    I started by creating the Pokémon API's base URL and obtaining the HTML components required to load Pokémon, display them, and display combat outcomes.
                    To retrieve Pokémon data by ID and handle any mistakes that might arise during the fetch process, I built an asynchronous method.
                    Following data reception, a different function generates and shows a card for every Pokémon, complete with name, image, and stats like Defense, Attack, and HP.
                    I added event listeners to the buttons, one for starting a combat and another for loading three randomly selected Pokémon cards.
                    As the battle progresses, the app assesses the attacking prowess of the visible Pokémon to determine the victor or if a tie occurs. In order to provide an interactive Pokémon experience, this project integrates APIs, manipulates HTML dynamically, and employs fundamental gaming principles.
                </p>
                <div className="flex justify-center mt-4">
                    <video className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" controls>
                        <source src={Pokemon} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/*task*/}
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Progressive web application</h4>
                    I created a Progressive Web App, and the process was exciting and interesting. I started by taking the standard web application from Canvas.
                    First, I created a manifest file, which allowed me to define the app's name, icons, colors, and other metadata.
                    This step was essential because it enables users to install the app on their devices, making it feel more like an app.
                    After setting up the manifest, I created a service worker.
                    I registered the service worker to handle requests and cache files, which allows the app to work offline.
                    This was especially interesting because I got to explore how caching strategies improve load times and provide a more seamless experience for users even without an internet connection.
                    I encountered a problem and had constantly an error shown in the terminal, that the path to my service worker was incorrect. I tried to solve it for a while and then went to a teacher.
                    My problem was so simple and funny, my service worker file needed to be in the same location with my HTML file and it was not. After this little problem everything worked perfectly.
                    Learning about PWAs and seeing the app come to life was a very nice experience that I truly enjoyed.
                </p>
                <div className="flex justify-center mt-4">
                    <img src={AppSite} alt="AppSite" className="w-4/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                </div>

                <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">Here is my           <a
                    href="https://github.com/CCretu29/Progressive-web-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue "
                >
                    PWA project
                </a>.</h4>

                {/*task*/}
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">Learning about GIT</h4>
                    I attended a GIT workshop where I learned how to use multiple GIT commands, I learned what they mean and also how to use GIT in a team.
                    I learned how to create a conflict and solve it working with another peers at a project. This workshop was very helpful and interesting.
                </p>
                <div className="flex justify-center mt-4">
                    <img src={GitLearn} alt="Learning GIT" className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                    <img src={LearnGit} alt="Learning GIT" className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                </div>
                <p className="text-lg text-darkBlack font-body mt-8">
                   I encountered a problem with Git while coding my portfolio. I was writing in a section and uploaded a picture for that section that was too big for Git.
                   I learned that Git does not support pictures bigger than 100MB. I deleted the picture from my folder but that was not enough because I would get an error in my GitBash terminal and the content would not be committed in my other Git like it should.
                   To deploy my portfolio I needed to have it on a personal Git, and for school also to have it on my university Git. 
                   So this two Git repositories are connected and I commit my changes using the command "git pushboth". 
                   Well, that did not work anymore because the picture was still in the commit history. I cut the connection between the two repositories and connected them again, because I thought if I cut the connection it will forget the commit with the picture.
                   That did not work, so I searched online how to delete commit history without deleting the commits.
                   I found and learned new commands and successfully deleted the picture from the history, leaving the commits where they are.
                   I discovered that I enjoy working with terminals. 

                </p>

                {/*task*/}
                <p className="text-lg text-darkBlack font-body">
                    <h4 className="text-2xl text-normalPurple font-header mb-8 mt-8">JavaScript refreshing</h4>
                    I attended a refreshing JavaScript workshop where I remembered how to create a vanilla counter, and I refreshed my memory about elements, variables and functions.
                    It was interesting and nice to remember some basic stuff. I am aware that without the base, more complex coding is so a refresh from time to time is needed.
                </p>
            </div>
            <div className="flex justify-center mt-4 mb-16">
                <video className="w-1/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" controls>
                    <source src={Counting} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            <div className="px-40 py-12">
    <p className="text-lg text-darkBlack font-body">
        <h4 className="text-2xl text-normalPurple font-header mb-4 mt-4">NodeJS and MongoDb workshop</h4>
        I attended a workshop about basic NodeJS, connection between back-end and a NonSQL database, MongoDB,
        I found the workshop very interesting and helpful it reminded me some things that I learned in semester two for my Passion project like, connection between back-end and database, authentication and simple functions.
        I also learned briefly about CRUD, create, read, update, delete, about roles with can be users, admin, manager.
        I am looking forward in learning ore about them, and working with them in my Passion project for this semester. 
    </p>
</div>







        </div>
    );
}

export default Assignments;
