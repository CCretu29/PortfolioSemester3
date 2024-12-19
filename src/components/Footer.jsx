import React from 'react';

import ReadingGuideFour from "../assets/pdf/Personal/ReadingGuide4.0.pdf";
import resume from "../assets/pdf/Personal/resume.pdf";

const Footer = () => {
  return (
    <footer className="bg-darkPurple text-whiteNormal font-body p-6  bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between">
        
        <div>
          <h1 className="text-2xl font-bold font-header italic mb-4">Claudia's Portfolio</h1>
        </div>

        
        <div>
          <h2 className="text-lg font-bold font-header mb-2">Useful Links</h2>
          <ul className="space-y-2 font-body">
            <li><a  href={resume} target="_blank" rel="noopener noreferrer" className="text-whiteNormal hover:underline">
                            Resume
                        </a></li>
            <li><a  href={ReadingGuideFour} target="_blank" rel="noopener noreferrer" className="text-whiteNormal hover:underline">
                            ReadingGuide
                        </a></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-bold font-body mb-2">Contact</h2>
          <p>Phone: +31613778990</p>
          <p>Email: 523382@student.fontys.nl</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
