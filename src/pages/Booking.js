import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const bookingLink = "https://calendar.app.google/J9BRLEiVeAeDTpS96";

const Booking = () => {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-24 space-y-12">
                <section className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Book a meeting with Steven</h1>
                    <p className="text-lg text-gray-300">
                        See my attached booking page to find a time that works best with you.
                    </p>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <a
                            href={bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-[#01BF71] px-6 py-3 text-base font-semibold text-black transition duration-200 hover:bg-white"
                        >
                            1 hour Booking
                        </a>
                        <a
                            href={bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-[#01BF71] px-6 py-3 text-base font-semibold text-black transition duration-200 hover:bg-white"
                        >
                            2 hour Booking
                        </a>
                    </div>
                    <p className="text-lg text-gray-300 mt-8">Billed at $40/hr</p>
                </section>

                <section className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to get started?</h2>
                    <p className="text-lg text-gray-300">
                        To set up an introductory meeting going over goals and expectations, please email:&nbsp;
                        <a
                            href="mailto:h42chang@uwaterloo.ca"
                            className="text-[#01BF71] hover:text-white underline transition-colors"
                        >
                            h42chang@uwaterloo.ca
                        </a>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Booking;

