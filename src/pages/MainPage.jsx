import React, { useRef } from 'react';
//pics links
import selfPhoto from "../assets/photos/me.jpg";
import auroraStudio from "../assets/photos/auroraProject.jpg";
import replacePhoto from "../assets/photos/replacement_photo.jpg";
import portfolioPhoto from "../assets/photos/portfolioPhoto.png";
import codePicture from "../assets/photos/codePic.png";
//doc links
import ReadingGuide from "../assets/pdf/Personal/ReadingGuide.pdf";

function MainPage() {
  // Create references to the "About Me" and "Check Work" sections in the DOM.
  const aboutMeRef = useRef(null);
  const checkWorkRef = useRef(null);

  // Function to scroll smoothly to a referenced section.
  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="w-full min-h-screen bg-whiteCream">
      {/* Portfolio Section */}
      <div className="relative h-[80vh] flex flex-col justify-center">
        <h1 className="absolute top-1/6 left-40 text-6xl text-darkPurple md:text-8xl font-bold font-header italic">
          Portfolio  <br />
        </h1>

        <h2 className="absolute top-[60%] left-40 text-5xl text-normalPurple md:text-6xl font-header italic">
          of a front-end developer
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
      <div ref={aboutMeRef} className="w-6/8 min-h-screen flex flex-col md:flex-row items-center justify-around py-16">
        <div className="md:w-1/2 px-36">
          <h2 className="text-4xl font-bold italic font-header text-normalPurple mb-4">About Me</h2>
          <p className="text-md text-darkBlack font-body">
            I am 22 years old, I come from Bucharest, Romania.
            After I finish this study program my dream is to become a front-end developer. I love programming, I consider myself a little creative. I love rainy days, coffee, and photography.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3 p-8">
          <img
            src={selfPhoto}
            alt="Cretu Claudia"
            className="w-4/6 rounded-lg border-8 border-lightPurple" />
        </div>
      </div>

      {/* Arrow inside a circle */}
      <div className="flex justify-center mt-[-100px] mb-8">
        <div
          onClick={() => handleScroll(checkWorkRef)} // Scroll to "Check Out My Work" section on click
          className="flex items-center justify-center w-16 h-16 bg-lightPurple rounded-full cursor-pointer hover:bg-normalPurple transition duration-300"
        >
          <svg className="w-8 h-8 text-darkBlack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 16a1 1 0 01.707-.293l4-4a1 1 0 10-1.414-1.414L10 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4A1 1 0 0110 16z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Check Out My Work Section */}
      <div ref={checkWorkRef} className="flex flex-col items-center py-16">
        <h2 className="text-4xl font-bold italic font-header text-normalPurple mb-4">Check Out My Work</h2>
        <div className="flex space-x-4">
          <a
            href="https://git.fhict.nl/I523382/my-work-semester-3-orange"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
          >
            My Git
          </a>
          <a
            href={ReadingGuide}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
          >
            Reading Guide
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col items-left py-16 px-36">
        <h2 className="text-4xl font-bold italic font-header text-normalPurple mb-24">Projects</h2>

        {/* Project 1*/}
        <div className="w-full flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/3">
            <img
              src={codePicture}
              alt="Assignments project"
              className="w-full rounded-lg border-8 border-lightPurple" />
          </div>
          <div className="md:w-2/3 px-16">
            <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">My personal work</h2>
            <p className="text-lg text-darkBlack font-body">
              Here I will put some personal assignments that have nothing to do with the group projects. This assignments are here to add more proof for my learning outcomes.
            </p>
            {/* Project Button */}
            <a
              href="/projects/assignments"
              className="mt-4 inline-block px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
            >
              Go to Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-2/3 px-16 order-2 md:order-1">
            <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">Portfolio</h2>
            <p className="text-lg text-darkBlack font-body">
              This is my portfolio page, where I explain my creating process, iterations and coding.
            </p>
            {/* Project Button */}
            <a
              href="/projects/portfolio"
              className="mt-4 inline-block px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
            >
              Go to Project
            </a>
          </div>
          <div className="md:w-1/3 order-1 md:order-2">
            <img
              src={portfolioPhoto}
              alt="Portfolio"
              className="w-full rounded-lg border-8 border-lightPurple" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/3">
            <img
              src={auroraStudio}
              alt="Aurora Studio"
              className="w-full rounded-lg border-8 border-lightPurple" />
          </div>
          <div className="md:w-2/3 px-16">
            <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">Studio Project</h2>
            <p className="text-lg text-darkBlack font-body">
              This project is about creating our own studio as a group. Within this project, you can find professional skills, design, development, and media production.
            </p>
            {/* Project Button */}
            <a
              href="/projects/studio"
              className="mt-4 inline-block px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
            >
              Go to Project
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="w-full flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-2/3 px-16 order-2 md:order-1">
            <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">Client project</h2>
            <p className="text-lg text-darkBlack font-body">
              This is the client project. To be added.
            </p>
            {/* Project Button */}
            <a
              href="/projects/client-project"
              className="mt-4 inline-block px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
            >
              Go to Project
            </a>
          </div>
          <div className="md:w-1/3 order-1 md:order-2">
            <img
              src={replacePhoto}
              alt="Client"
              className="w-full rounded-lg border-8 border-lightPurple" />
          </div>
        </div>

        {/* Project 5 */}
        <div className="w-full flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/3">
            <img
              src={replacePhoto}
              alt="Passion project"
              className="w-full rounded-lg border-8 border-lightPurple" />
          </div>
          <div className="md:w-2/3 px-16">
            <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">Passion Project</h2>
            <p className="text-lg text-darkBlack font-body">
              This is the Passion project. To be added.
            </p>
            {/* Project Button */}
            <a
              href="/projects/passion-project"
              className="mt-4 inline-block px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
            >
              Go to Project
            </a>
          </div>
        </div>



      </div>
    </div>
  );
}

export default MainPage;
