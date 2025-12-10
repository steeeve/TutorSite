import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const scrollToReviews = () => {
        const element = document.getElementById("reviews");

        if (element) {
            const offset = 0; // keep heading visible below the sticky navbar
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-[800px] flex items-center justify-center px-4 py-20 overflow-hidden bg-[#0c0c0c]">
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Tutoring tailored for you
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
                            Personalized 1:1 lessons to help you reach your Math, Statistics, Physics, and Computer Science goals.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <Link
                                to="/booking"
                                className="inline-flex items-center px-8 py-4 bg-[#01BF71] text-[#010606] font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                            >
                                Get in touch
                            </Link>
                            <button
                                type="button"
                                onClick={scrollToReviews}
                                className="inline-flex items-center px-8 py-4 bg-[#01BF71] text-[#010606] font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                            >
                                Read my reviews
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#01BF71]/20 to-transparent z-10"></div>
                        <img
                            src="/images/hero-image.jpg"
                            alt="Tutoring"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

