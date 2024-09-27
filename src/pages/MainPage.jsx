import React, { useRef } from 'react';
import selfPhoto from "../assets/photos/me.jpg";
import auroraStudio from "../assets/photos/auroraProject.jpg";
import replacePhoto from "../assets/photos/replacement_photo.jpg";

function MainPage() {
  const aboutMeRef = useRef(null);
  const checkWorkRef = useRef(null); // Reference for "Check Out My Work" section

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
          onClick={() => handleScroll(aboutMeRef)} // Adjust to scroll to "About Me" section
          className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
        >
          Discover
        </button>
      </div>

      {/* About Me Section */}
      <div ref={aboutMeRef} className="w-6/8 min-h-screen flex flex-col md:flex-row items-center justify-around py-16">
        {/* Placeholder text */}
        <div className="md:w-1/2 px-36">
          <h2 className="text-4xl font-bold italic font-header text-darkPurple mb-4">About Me</h2>
          <p className="text-md text-darkBlack">
            I am 22 years old, I come from Bucharest, Romania.
            After I finish this study program my dream is to become a front-end developer. I love programming, I consider myself a little creative. I love rainy days, coffee and photography.
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
        <h2 className="text-4xl font-bold italic font-header text-darkPurple mb-4">Check Out My Work</h2>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
          >
            My GitHub
          </a>
          <a
            href="/path/to/your/pdf.pdf" // Replace with your PDF link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
          >
            My PDF
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex items-center py-16 px-36">
        <h2 className="text-4xl font-bold italic font-header text-darkPurple ml-16">Projects</h2>
      </div>

      {/* New Section with Picture, Title, and Text */}
      <div className="w-full min-h-[30vh] flex items-center justify-around py-18">
        {/* Image acting as a button */}
        <a href="/projects" className="w-1/4 p-4 ml-40">
          <img
            src={auroraStudio} 
            alt="Aurora"
            className="w-full rounded-lg border-8 border-lightPurple hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
        </a>

        {/* Title and Text of project */}
        <div className="w-2/3 px-16">
          <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">
            Studio Project
          </h2>
          <p className="text-lg text-darkBlack font-body">
            This project is about creating our own studio as a group. Within this project you can find professional skills, design, development and media production. 
          </p>
        </div>
      </div>

      {/* Inverted Section with Picture, Title, and Text */}
      <div className="w-full min-h-[30vh] flex items-center justify-around py-28">
        {/* Title and Text */}
        <div className="w-2/3 px-16">
          <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">
          Something project
          </h2>
          <p className="text-lg text-darkBlack font-body">
            This is another section with the layout inverted. You can add more details here about another project or content.
          </p>
        </div>

        {/* Image acting as a button */}
        <a href="/another-project" className="w-1/4 p-4 -ml-80">
          <img
            src={replacePhoto} 
            alt="Aurora Inverted"
            className="w-full rounded-lg border-8 border-lightPurple hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
        </a>
      </div>

            {/* New Section with Picture, Title, and Text */}
            <div className="w-full min-h-[30vh] flex items-center justify-around py-18">
        {/* Image acting as a button */}
        <a href="/projects" className="w-1/4 p-4 ml-40">
          <img
            src={replacePhoto} 
            alt="Aurora"
            className="w-full rounded-lg border-8 border-lightPurple hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
        </a>

        {/* Title and Text of project */}
        <div className="w-2/3 px-16">
          <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">
          Something Project
          </h2>
          <p className="text-lg text-darkBlack font-body">
            This is the text that explains the content or purpose of this section. You can link to another page, display some useful information, or describe the content related to the image.
          </p>
        </div>
      </div>

      {/* Inverted Section with Picture, Title, and Text */}
      <div className="w-full min-h-[30vh] flex items-center justify-around py-28">
        {/* Title and Text */}
        <div className="w-2/3 px-16">
          <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">
          Something project
          </h2>
          <p className="text-lg text-darkBlack font-body">
            This is another section with the layout inverted. You can add more details here about another project or content.
          </p>
        </div>

        {/* Image acting as a button */}
        <a href="/another-project" className="w-1/4 p-4 -ml-80">
          <img
            src={replacePhoto} 
            alt="Aurora Inverted"
            className="w-full rounded-lg border-8 border-lightPurple hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
        </a>
      </div>

      {/* New Section with Picture, Title, and Text */}
      <div className="w-full min-h-[30vh] flex items-center justify-around py-18">
        {/* Image acting as a button */}
        <a href="/projects" className="w-1/4 p-4 ml-40">
          <img
            src={replacePhoto} 
            alt="Aurora"
            className="w-full rounded-lg border-8 border-lightPurple hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
        </a>

        {/* Title and Text of project */}
        <div className="w-2/3 px-16">
          <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">
          Something Project
          </h2>
          <p className="text-lg text-darkBlack font-body">
            This is the text that explains the content or purpose of this section. You can link to another page, display some useful information, or describe the content related to the image.
          </p>
        </div>
      </div>

      {/* Inverted Section with Picture, Title, and Text */}
      <div className="w-full min-h-[30vh] flex items-center justify-around py-28">
        {/* Title and Text */}
        <div className="w-2/3 px-16">
          <h2 className="text-2xl font-bold italic font-header text-normalPurple mb-6">
            Something project
          </h2>
          <p className="text-lg text-darkBlack font-body">
            This is another section with the layout inverted. You can add more details here about another project or content.
          </p>
        </div>

        {/* Image acting as a button */}
        <a href="/another-project" className="w-1/4 p-4 -ml-80">
          <img
            src={replacePhoto} 
            alt="Aurora Inverted"
            className="w-full rounded-lg border-8 border-lightPurple hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
        </a>
      </div>





    </div>
  );
}

export default MainPage;
