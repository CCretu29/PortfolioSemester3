import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//doc links
import ReadingGuideFour from "../assets/pdf/Personal/ReadingGuide4.0.pdf";  //reading guide3

const NavBar = () => { //defines a functional component
    // State to track if the dropdown is open or closed (initially is closed).
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown open/closed.
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to close the dropdown.
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };


    return (
        <nav className="bg-whiteCream text-lg font-body fixed top-0 left-0 w-full shadow-0 z-10">
            <div className="w-3/4 mx-auto">
                <ul className="flex justify-center space-x-28 py-4">
                    <li className="nav-item">
                        <Link to="/" className="text-darkBlack hover:underline">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="text-darkBlack hover:underline">About Me</Link>
                    </li>
                    <li className="relative nav-item">
                        <button onClick={toggleDropdown} className="text-darkBlack cursor-pointer hover:underline">
                            Projects
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-40 bg-darkCream shadow-lg rounded-md">
                                <li className="py-2 px-4 hover:bg-gray-100">
                                    <Link to="/projects/assignments" onClick={closeDropdown} className="block text-darkBlack hover:underline">
                                        My personal work
                                    </Link>
                                </li>
                                <li className="py-2 px-4 hover:bg-gray-100">
                                    <Link to="/projects/portfolio" onClick={closeDropdown} className="block text-darkBlack hover:underline">
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="py-2 px-4 hover:bg-gray-100">
                                    <Link to="/projects/studio" onClick={closeDropdown} className="block text-darkBlack hover:underline">
                                        Studio
                                    </Link>
                                </li>
                                <li className="py-2 px-4 hover:bg-gray-100">
                                    <Link to="/projects/client-project" onClick={closeDropdown} className="block text-darkBlack hover:underline">
                                        Client Project
                                    </Link>
                                </li>
                                <li className="py-2 px-4 hover:bg-gray-100">
                                    <Link to="/projects/passion-project" onClick={closeDropdown} className="block text-darkBlack hover:underline">
                                        Passion Project
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item">
                        <Link to="/learning-outcomes" className="text-darkBlack hover:underline">Learning Outcomes</Link>
                    </li>
                    <li className="nav-item">
                        <a  href={ReadingGuideFour} target="_blank" rel="noopener noreferrer" className="text-darkBlack hover:underline">
                            ReadingGuide
                        </a>
                    </li>
                </ul>
                <div className="border-b-2 border-darkPurple w-2/2 mx-auto"></div> 
            </div>
        </nav>
    );
};

export default NavBar;
