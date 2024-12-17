import React, { useRef } from 'react';
// pics links
import selfPhoto from "../assets/photos/me.jpg";
import designWeek from "../assets/photos/designWeek.jpg";
import businessCardB from "../assets/photos/businessCardB.jpg";
import businessCardF from "../assets/photos/businessCardF.jpg";


function AboutMe() {
    const aboutMeRef = useRef(null);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full min-h-screen bg-whiteCream">
            {/* About Section */}
            <div className="relative h-[80vh] flex flex-col justify-center">
                <h1 className="absolute top-1/6 left-40 text-6xl text-darkPurple md:text-8xl font-bold font-header italic">
                    About  <br />
                </h1>

                <h2 className="absolute top-[60%] left-40 text-5xl text-darkPurple md:text-7xl font-bold font-header italic">
                    Me
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
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => handleScroll(aboutMeRef)} // scroll to "About Me" section
                    className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
                >
                    Discover
                </button>
            </div>

            {/* About Me Section */}
            <div ref={aboutMeRef} className="w-6/8 min-h-screen flex flex-col md:flex-row items-center justify-around py-6">

                <div className="md:w-1/2 px-28">
                    <h2 className="text-4xl font-bold italic font-header text-normalPurple mb-4">Hello, I am Cretu Claudia,</h2>
                    <p className="text-md text-darkBlack font-body">
                        Semester 3 ICT & Media design student.
                        I am 22 years old, I come from Bucharest,
                        Romania. After I finish this study program my
                        dream is to become a front-end developer.
                        I love programming, I consider myself a little
                        creative. I love rainy days, coffee and
                        photography.
                    </p>
                </div>

                <div className="md:w-1/3 p-8">
                    <img
                        src={selfPhoto}
                        alt="Cretu Claudia"
                        className="w-4/6 rounded-lg border-8 border-lightPurple" />
                </div>
            </div>

            {/* Discover me */}
            <div className="flex justify-center -mt-24">
                <button
                    className="px-8 py-2 font-header text-lightPurple font-semibold text-4xl rounded-full">
                    Discover me
                </button>
            </div>

            {/* Talents Section */}
            <div className="flex flex-col items-start px-40 py-8">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">Talents</h2>
                <ul className="list-disc list-inside text-md text-darkBlack font-body">
                    <li>Programming</li>
                    <li>Organizing</li>
                    <li>Photography</li>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Presenting</li>
                </ul>
            </div>

            {/* Goals */}
            <div className="flex flex-col items-start px-40 py-16">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">My goals</h2>
                <p className="text-md text-darkBlack font-body">
                    I would like to become the best version of me in programming, to learn as
                    many programming languages and frameworks as possible, both back-end
                    and front-end, and to learn how to create and work with databases. I
                    would like to also practice my radiology nurse diploma in combination
                    with ICT practice.
                </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col items-start px-40 py-8">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">Fontys timeline</h2>
                <p className="text-md text-darkBlack font-body">
                    For the next student years, I already decided what path I want to take. It
                    was hard to decide some things, easy for others but I strongly believe this
                    is going to be the best for me.
                </p>
                <ul className="list-disc list-inside text-md text-darkBlack font-body">
                    <li>Semester 1,2,3 – ICT & Media Design profile</li>
                    <li>Semester 4 – Smart Mobile</li>
                    <li>Semester 5 – Front-end Internship</li>
                    <li>Semester 6 – Minor Health Innovation</li>
                    <li>Semester 7 – Smart mobile advanced</li>
                    <li>Semester 8 – Front end, maybe full stack development internship</li>
                </ul>
                <br></br>
                <p className="text-md text-darkBlack font-body">
                    I chose Smart Mobile for two semesters because in these three semesters
                    I concluded that I am more into programming then design and user
                    research, and Smart Mobile has both programming and design, but more programming. 
                    I also did my research about all the specializations and building
                    web applications sounds very interesting and challenging for me. I know I
                    want to choose the Health Innovation minor since I heard about it in
                    semester two because of my passion for both medical and IT fields and my background as a nurse.
                    For the first internship I chose to do a frontend internship, since I discovered that I really like frontend and I am good at it.
                    For the final internship I would take the challenge to do a full stack internship.
                </p>
                <p className="text-md text-darkBlack font-body">
                    My timeline was appreciated by teachers and impressed them. One advise was added witch I will do take in consideration. 
                    A teacher advised me to rethink my full stack decision on the final internship. I will, when I apply for that.
                    For now I am just experimenting with back-end, but in two Smart Mobile semesters I will find out if I like it, if I am good at it, and if the answer is yes,
                    I have plenty of time in holidays, to learn more.
                </p>
            </div>

            {/* Preparing for internship */}
            <div className="flex flex-col items-start px-40 py-16">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">Preparing for internship</h2>
                <p className="text-md text-darkBlack font-body">
                    When I heard that Career Day is close, I asked a teacher if I can also ask about internships this early, since I already know what specialization I want to chose.
                    The teacher said as early as better so I started preparing. First, because I would like to have a front end developer internship, I prepared a personal GitHub.
                    I chose GitHub in stead of GitLab because I know is more often used in companies. I put there some of my best work from semester two and three and created a readme for the clients to see what I do in those projects.
                    This GitHub link I am going to send to the companies where I apply, together with my Linkedin profile where I have put all my previous experience and projects.
                </p>
                <p className="text-md text-darkBlack font-body">
                    Unfortunately I did not attend the Career Day this time because I had a shift at work that I could not change. Altho before I knew this I wanted to be prepared and created a business card for me to give to people.
                    I designed it and put some personal information on that, to share it when I will have the occasion.
                    It was also brought to my attention, by some friends who are currently doing their internship that I also need a CV, not only my Linkedin and GitHub. I am planning to do that one in the upcoming holiday and polish my Git and Linkedin to be perfect.
                    After that I think the best moment to start to search for internships is from January, on "Indeed" adn "Glassdoor" websites.
                    I feel ready for this internship, well prepared and I am confident that I will find something until the summer starts.
                    Until then I am planning to finish this semester with proficient and advanced skills, and then enjoy the Smart mobile specialization.
                </p>
                <h4 className="text-xl text-darkBlack font-header mb-4 mt-4">
                    <a
                        href="https://github.com/CCretu29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body font-bold text-normalPurple text-xl hover:text-lightBlue"
                    >
                        This is my personal Git.
                    </a>
                </h4>
                <div className="flex justify-center mt-12">
                    <div className="text-center mx-2">
                        <img src={businessCardB} alt="customer journey" className="w-4/3 md:w-2/2 rounded-lg border-8 border-lightPurple" />
                    </div>
                    <div className="text-center mx-2">
                        <img src={businessCardF} alt="empathy map" className="w-4/3 md:w-1/2.5 rounded-lg border-8 border-lightPurple" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start px-40 py-16">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">Dutch design week</h2>
                <p className="text-md text-darkBlack font-body">
                    In the October holiday I went to Dutch design week with a friend. Going to Dutch Design Week was really interesting and gave me a lot of new ideas.
                    I got to see some unique design projects and new technology that I had not thought about before.
                    Seeing how designers are using technology in creative ways and learning about innovations in sustainable design gave me a better understanding of where design is heading.
                    Overall, it was inspiring to see how the industry is moving forward and to learn from the new ideas that were shared there.
                    It made me discover that I also like looking at art, but I don’t feel the need to also understand it, or to feel it, it is nice just to look at it and appreciate other people’s work.
                </p>
                <div className="flex justify-center mt-4">
                    <img src={designWeek} alt="AppSite" className="w-4/2 md:w-1/3 mx-2 rounded-lg border-8 border-lightPurple" />
                </div>
            </div>

            {/* Coding AI */}
            <div className="flex flex-col items-start px-40 py-16">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">Working with AI</h2>
                <p className="text-md text-darkBlack font-body">
                    For the client project I had to work with AI, more detailed to integrate the AI in my code for it to do something.
                    This project came with it's challenges but nothing was impossible.
                    First I had a problem understanding what the AI is doing as a technical part, but after a chat with one of my peers I understood my assignments.
                    Working with AI was an interesting experience but with this project I realized that I do not like it that much. That made clear that the AI specialization is not for me, and also that it has a business part witch never interested me.
                    But this is actually a good thing because it proved my choice for Smart Mobile is right. It also has some UX research and design witch I am familiar with from this semester,
                    but I can also focus more on programming, and not just frontend, because I started to like working with backend as well.
                </p>
            </div>

            {/* Helping a friend */}
            <div className="flex flex-col items-start px-40 py-16">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">Helping a friend with code</h2>
                <p className="text-md text-darkBlack font-body">
                    This is a realization from how far I have come, and I am very pound of it. Sometimes I take big steps in my learning, sometimes small steps, but I am pound and happy every time I learn something, no matter the time frame.
                    This time, not only I learned something technical, but I learned something about me and that is, that I have to trust myself, because I can do anything.
                    I learned that I can be confident and that with a little practice I can learn anything.
                    For the story to make sense I have to take you back in semester two. My first vanilla JavaScript lesson, me having no experience with it before,
                    it was a busy day, the lesson was around three a clock, I was already tired from the group project, and after the presentation and a demo, the teacher gave a simple task: to create a function.
                    I was so embarrassed that the first time that I tried it did not work, I did not understand the demo and was not able to create a simple function.
                    I was so annoyed and ashamed, so I packed my things and went home. My boyfriend advised me to try again the next day with a fresh mind. I did, and I understood, and it worked.
                    I understood then, that I can learn, that I can do it, and I do not have to be worried every time.
                    I continued to learn JavaScript, passed the semester, learned React, and to my surprise a friend and colleague of mine, asked my help.
                    This person is making a website using React, and asked me to help setting it up and explain where to put files and what in them and so on.
                    I helped this friend set up a nice React project, also helped with some group project task, and if the friend will ask, I will continue to help in next steps with the website.
                    I will not explain here how to create a React project, because you already know, but you can ask me anytime and I will know.
                    I am always happy to help a friend in any matter, but looking back to see where I left of, and where I am now, I am so happy, and so exited to learn even more.
                    My love for programming grows with each day.
                </p>
            </div>

{/* Reflection */}
<div className="flex flex-col items-start px-40 py-16">
                <h2 className="text-3xl font-bold italic font-header text-normalPurple mb-4">Reflection</h2>
                <p className="text-md text-darkBlack font-body">
                    From my second review in this semester, I learned something very important. I had the surprise at the review to hear that my teachers did not have access to some git links,
that some of the PDF's had different fonts in a document and that somehow, I changed the name of our learning outcomes. This are small mistakes that can make a portfolio look very unprofessional.
I checked all the PDF's to be accessible and have same fonts, I changed the names of our learning outcomes like in Canvas, I gave access to all my teachers to the Git repositories.
The lesson that I have learned from this, is to double check everything before submitting, to check documents, links, names and spelling. 
I was also advised to talk more about my iterations, and connect them better, witch I hope I managed to do.
                </p>
            </div>


        </div>
    );
}

export default AboutMe;
