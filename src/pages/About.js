import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-24">

                <section className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl">
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        <div>
                            <p className="text-base uppercase tracking-widest text-[#01BF71] mb-4">About</p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hi, I&apos;m Steven</h1>
                            <p className="text-lg text-gray-300">
                                I&apos;m passionate about helping students excel. As an alumni from the University of Waterloo, 
                                where I studied Computational Mathematics and Statistics, I understand the challenges 
                                students face and I am here to help you succeed and develop a deep understanding.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#01BF71]/20 to-transparent z-10"></div>
                            <img
                                src="/images/Profile.jpg"
                                alt="Steven tutoring"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl mt-10">
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#01BF71]/20 to-transparent z-10"></div>
                            <img
                                src="/images/grad.jpeg"
                                alt="Steven tutoring"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-base uppercase tracking-widest text-[#01BF71] mb-4">Education</p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">University of Waterloo</h1>
                            <p className="text-lg text-gray-300">
                                I graduated from the University of Waterloo with a Bachelor of Science in Computational Mathematics and Statistics. During my time there, I worked as an Undergraduate Research Assistant and used deep learning models to predict real-time handwriting.
                            </p>
                            <a
                                href="https://link.springer.com/article/10.1007/s10032-023-00456-5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#01BF71] hover:text-white underline transition-colors mt-4"
                            >
                                Link to Paper
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl mt-10">
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        <div>
                            <p className="text-base uppercase tracking-widest text-[#01BF71] mb-4">Fun</p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Hobbies</h1>
                            <p className="text-lg text-gray-300">
                                I love skateboarding, snowboarding, fishing, and hiking in the mountains. Recently I have started backcountry splitboarding, and it has brought me so much joy. I absolutely adore the freedom of choosing your own adventure and the thrill of accomplishing something difficult.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#01BF71]/20 to-transparent z-10"></div>
                            <img
                                src="/images/backcountry.jpg"
                                alt="Steven tutoring"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default About;

