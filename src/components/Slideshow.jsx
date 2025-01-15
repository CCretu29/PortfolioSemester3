import React, { useState } from "react";
import slide1 from "../assets/photos/createUser.jpg";
import slide2 from "../assets/photos/updateUser.jpg";
import slide3 from "../assets/photos/getAllUsers.jpg";
import slide4 from "../assets/photos/deleteUser.jpg";
import slide5 from "../assets/photos/createAdmin.jpg";
import slide6 from "../assets/photos/loginAdmin.jpg";
import slide7 from "../assets/photos/deleteAdmin.jpg";
import slide8 from "../assets/photos/uploadPicture.jpg";
import slide9 from "../assets/photos/uploadPictures.jpg";
import slide10 from "../assets/photos/getAllPictures.jpg";
import slide11 from "../assets/photos/downloadPicture.jpg";
import slide12 from "../assets/photos/buyPicture.jpg";
import slide13 from "../assets/photos/deletePicture.jpg";
import slide14 from "../assets/photos/submitMessage.jpg";
import slide15 from "../assets/photos/getAllMessage.jpg";



const Slideshow = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15,];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex flex-col items-center mt-6">
            <img
                src={slides[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-4/5 md:w-2/3 rounded-lg shadow-lg"
            />
            <div className="flex justify-between w-1/3 mt-4">
                <button
                    onClick={handlePrevious}
                    className="px-4 py-2 bg-lightPurple text-white rounded-md hover:bg-normalPurple"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-lightPurple text-white rounded-md hover:bg-normalPurple"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slideshow;
