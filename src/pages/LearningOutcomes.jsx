import React, { useRef } from 'react';

function LearningOutcomesPage() {
    const purpleBoxRef = useRef(null);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full min-h-screen bg-whiteCream">
            {/* Learning Outcomes Section */}
            <div className="relative h-[80vh] flex flex-col justify-center">
                <h1 className="absolute top-1/6 left-40 text-6xl text-darkPurple md:text-8xl font-bold font-header italic">
                    Learning <br />
                </h1>
                <h2 className="absolute top-[60%] left-40 text-7xl text-darkPurple md:text-6xl font-bold font-header italic">
                    Outcomes
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
            <div className="flex justify-center mb-16">
                <button
                    onClick={() => handleScroll(purpleBoxRef)}
                    className="px-8 py-2 bg-lightPurple font-body text-darkBlack text-xl rounded-full hover:bg-normalPurple hover:text-whiteCream transition duration-300"
                >
                    Discover
                </button>
            </div>

            {/* Centered Purple Boxes */}
            <div ref={purpleBoxRef} className="space-y-24">
                {/* First Box */}
                <div className="flex justify-center items-center min-h-[40vh] mt-24">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO1 - Conceptualize, design, and develop</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 1</a></li>
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 2</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2">Reflection:</h3>
                            <p className="text-md">This is a reflection for LO1.</p>
                        </div>
                    </div>
                </div>

                {/* Second Box */}
                <div className="flex justify-center items-center min-h-[40vh]">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO2 - Implementing Development Processes</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 1</a></li>
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 2</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2">Reflection:</h3>
                            <p className="text-md">This is a reflection for LO2.</p>
                        </div>
                    </div>
                </div>

                {/* Third Box */}
                <div className="flex justify-center items-center min-h-[40vh]">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO3 - Enhancing User Experience</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 1</a></li>
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 2</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2">Reflection:</h3>
                            <p className="text-md">This is a reflection for LO3.</p>
                        </div>
                    </div>
                </div>

                {/* Fourth Box */}
                <div className="flex justify-center items-center min-h-[40vh]">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO4 - Collaboration and Teamwork</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 1</a></li>
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 2</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2">Reflection:</h3>
                            <p className="text-md">This is a reflection for LO4.</p>
                        </div>
                    </div>
                </div>

                {/* Fifth Box */}
                <div className="flex justify-center items-center min-h-[40vh]  pb-24">
                    <div className="bg-normalPurple text-whiteCream w-3/4 md:w-1/2 p-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-header italic mb-4">LO5 - Continuous Learning and Growth</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-body mb-2">Products:</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 1</a></li>
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Example Link 2</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-body mb-2">Reflection:</h3>
                            <p className="text-md">This is a reflection for LO5.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearningOutcomesPage;
