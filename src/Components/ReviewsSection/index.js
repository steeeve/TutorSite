import React from "react";

const ReviewsSection = () => {
    return (
        <section className="relative bg-[#0c0c0c] py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What Students Say</h2>
                
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto">
                    {/* Review Card */}
                    <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 shadow-xl">
                        {/* Review Text */}
                        <div className="mb-6">
                            <p className="text-2xl text-gray-200 mb-4">
                                "Steven has been helping me with my Intro to Programming and Discrete Math courses since September, 
                                and I cannot recommend him enough. I appreciate Steven's tutoring approach: he explains the concepts 
                                very clearly and encourages me to reach solutions independently, which has been extremely beneficial for learning how to solve the problems!
                            </p>
                            <p className="text-2xl text-gray-200">
                                With Steven's help I was able to achieve 100% on my first programming midterm. After our tutoring sessions, I have a much better understanding of the confusing lecture material. 
                                I highly recommend Steven's services, especially in the areas of math and computer science."
                            </p>
                        </div>
                        
                        {/* Customer Info */}
                        <div className="flex items-center gap-4">
                            {/* Profile Picture */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#01BF71] to-[#01BF71]/60 flex items-center justify-center flex-shrink-0">
                                <svg 
                                    className="w-10 h-10 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            
                            {/* Customer Details */}
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                    <h3 className="text-xl font-semibold text-white">Olivia</h3>
                                    <span className="text-gray-400 text-sm sm:text-base">
                                        • Computer Science, Mathematics
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mt-1">
                                    University of Toronto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;

