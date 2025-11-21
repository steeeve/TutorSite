import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const navLinkClasses =
    "text-sm font-medium text-black transition-colors hover:text-[#0a0a0a]";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const scrollingDown = currentScroll > lastScrollY.current;

            setIsVisible((prev) => {
                if (currentScroll < 20) return true;
                if (scrollingDown && prev) return false;
                if (!scrollingDown && !prev) return true;
                return prev;
            });

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-[#01BF71] shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
        >
            <div className="mx-auto max-w-7xl h-16 px-6 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-xl font-bold text-black">
                        SC Tutoring
                    </Link>
                </div>
                <nav className="flex items-center space-x-6">
                    <Link to="/" className={navLinkClasses}>
                        Home
                    </Link>
                    <Link to="/booking" className={navLinkClasses}>
                        Booking
                    </Link>
                    <Link to="/about" className={navLinkClasses}>
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;


