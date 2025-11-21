import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import ReviewsSection from "../Components/ReviewsSection";
import Footer from "../Components/Footer";


const Home = () => {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col">
            <Navbar />
            <main className="flex-1">
                <HeroSection />
                <ReviewsSection />

                {/* Contact Section */}
                <section id="contact" className="relative bg-[#0c0c0c] py-24 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact</h2>
                            <p className="text-lg text-gray-300 text-center mb-4">
                                Get in touch today to start your learning journey!
                            </p>
                            <p className="text-center text-gray-400">
                                Email: <a className="text-[#01BF71] hover:text-white underline transition-colors" href="mailto:h42chang@uwaterloo.ca">h42chang@uwaterloo.ca</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;