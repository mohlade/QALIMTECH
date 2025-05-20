import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

// Carousel Images - Replace with your actual image URLs
const carouselImages = [
    'https://source.unsplash.com/random/800x400/?chicken',
    'https://source.unsplash.com/random/800x400/?pig',
    'https://source.unsplash.com/random/800x400/?poultry',
    'https://source.unsplash.com/random/800x400/?farm',
    'https://source.unsplash.com/random/800x400/?livestock'
];

// Animation Variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
};

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
};

// Reusable Section Component
const Section = ({ id, children, className }) => {
    return (
        <motion.section
            id={id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            <div className="container mx-auto">{children}</div>
        </motion.section>
    );
};

const Gallery = () => {
    return (
        <Section id="gallery" className="bg-gradient-to-br from-gray-900 to-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-poppins">Image Gallery</h2>
            <div className="w-full max-w-4xl mx-auto">
                <div className="flex overflow-x-auto space-x-6">
                    {carouselImages.map((image, index) => (
                        <div key={index} className="flex-shrink-0 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1.5 bg-gray-800 rounded-lg shadow-md border border-gray-700">
                                <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="rounded-md w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const AboutUs = () => {
    return (
        <Section id="about" className="bg-gradient-to-br from-gray-800 to-gray-900">
            <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center font-poppins">About Us</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="text-gray-300 leading-relaxed font-lato text-lg">
                        Welcome to QalimTech Farms, where our passion for sustainable and ethical farming
                        is at the heart of everything we do. Founded with a vision to provide the highest
                        quality poultry and pork products, we are committed to the well-being of our animals
                        and the satisfaction of our customers. Our journey began with a small farm and a
                        big dream, and today, we continue to grow while staying true to our core values.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-6 font-lato text-lg">
                        Our team comprises experienced farmers, animal care specialists, and dedicated staff
                        who work tirelessly to maintain the highest standards of care. We believe in
                        combining time-honored farming traditions with modern, innovative techniques to
                        create a nurturing environment for our livestock. From the feed we provide to
                        the space we offer, every detail is considered.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-6 font-lato text-lg">
                        We are committed to sustainability, ensuring that our farming practices have a
                        minimal impact on the environment. We strive to be responsible stewards of the
                        land and contribute positively to our community. We believe in transparency and
                        are always happy to share our practices with those who are interested.
                    </p>
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <img
                        src="https://source.unsplash.com/random/600x400/?farm"
                        alt="About Us"
                        className="rounded-xl w-full shadow-lg border-4 border-amber-500/30"
                    />
                </motion.div>
            </div>
        </Section>
    );
};

const ContactUs = () => {
    return (
        <Section id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-poppins">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-10">
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-md">
                        <h3 className="text-amber-400 text-2xl font-semibold mb-3 font-poppins">Get in Touch</h3>
                        <p className="text-gray-400 mb-6 font-lato text-lg">
                            Feel free to reach out to us with any questions or inquiries.
                        </p>
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300 font-lato text-lg">Email: info@qalimtechfarms.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300 font-lato text-lg">Phone: +123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300 font-lato text-lg">Ayetodo Farms Nigeria </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                        />
                         <input
                            type="tel"
                            placeholder="Your Phone Number"
                            className="bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 w-full rounded-xl p-4 min-h-[160px] resize-y font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                        />
                        <button
                            type="submit"
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl p-4 font-poppins font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 text-lg transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

const HomePage = () => {
    return (
        <Section
            id="home"
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center flex flex-col justify-center items-center py-40"
        >
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <div className="md:mr-8 mb-8 md:mb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold mb-8 font-poppins text-amber-400 text-center"
                    >
                        Welcome to QalimTech Farms
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl font-lato leading-relaxed text-center"
                    >
                        Discover the best in poultry and pig farming at QalimTech Farms. We are dedicated to providing
                        high-quality, healthy livestock through sustainable and ethical practices. Explore our
                        commitment to excellence in every aspect of our farm, from our free-range chickens to our
                        sustainably raised pigs. We invite you to learn more about our passion for farming and
                        our dedication to delivering the finest products to your table.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 100 }}
                    >
                        <button
                            onClick={() => {
                                const aboutSection = document.getElementById('about');
                                if (aboutSection) {
                                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="bg-amber-600/10 text-amber-400 hover:bg-amber-600/20 hover:text-white border-amber-600/50 rounded-xl py-4 px-8 text-lg font-semibold font-poppins transition-colors duration-300 cursor-pointer text-xl"

                        >
                            Learn More
                        </button>
                    </motion.div>
                </div>
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="bg-gray-700 rounded-xl w-full max-w-[400px] h-[300px] flex items-center justify-center">
                        <span className="text-gray-400 text-2xl font-lato">Image Placeholder</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const ChickensPage = () => (
    <Section id="chickens" className="bg-gradient-to-br from-gray-800 to-gray-900">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center font-poppins">Our Chickens and Eggs</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
                <p className="text-gray-300 leading-relaxed font-lato text-lg">
                    At QalimTech Farms, we take pride in our healthy and well-cared-for chickens.
                    We believe that providing them with spacious, clean environments and a nutritious,
                    balanced diet is essential to their well-being and the quality of our products.
                    Our chickens are raised with a focus on both their health and comfort, ensuring
                    they live happy and stress-free lives.
                </p>
                <p className="text-gray-300 leading-relaxed mt-6 font-lato text-lg">
                    We offer a variety of breeds, each with its unique characteristics, to meet the
                    diverse needs of our customers. From free-range chickens that roam and forage
                    outdoors to specialized breeds known for their exceptional meat or egg-laying
                    capabilities, we have something for everyone.
                </p>
                <p className="text-gray-300 leading-relaxed mt-6 font-lato text-lg">
                    In addition to our high-quality chickens, we also offer fresh, delicious eggs.
                    Our hens are raised with the same care and attention to detail as our chickens,
                    and their eggs are a testament to their health and well-being. We gather eggs
                    daily, ensuring that they are as fresh as possible when they reach your table.
                </p>
                <p className="text-gray-300 leading-relaxed mt-6 font-lato text-lg">
                    We are committed to sustainable and ethical practices in our chicken and egg
                    production. We believe in treating our animals with respect and ensuring that
                    they are raised in a way that promotes their natural behaviors.
                </p>
            </div>
            <div>
                <img
                    src="https://source.unsplash.com/random/600x400/?chicken"
                    alt="Our Chickens"
                    className="rounded-xl w-full shadow-lg border-4 border-amber-500/30"
                />
            </div>
        </div>
    </Section>
);

const PigsPage = () => (
    <Section id="pigs" className="bg-gradient-to-br from-gray-900 to-gray-800">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center font-poppins">Our Pigs</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
                <img
                    src="https://source.unsplash.com/random/600x400/?pig"
                    alt="Our Pigs"
                    className="rounded-xl w-full shadow-lg border-4 border-amber-500/30"
                />
            </div>
            <div>
                <p className="text-gray-300 leading-relaxed font-lato text-lg">
                    Our pigs are raised with a focus on welfare and quality. We provide them
                    with comfortable housing, a balanced diet, and plenty of space to roam.
                    We are committed to sustainable and ethical practices in our pig farming.
                </p>
                <p className="text-gray-300 leading-relaxed mt-6 font-lato text-lg">
                    We offer a range of breeds, ensuring top-tier quality and taste. Our
                    pork products are a testament to our dedication to excellence
                    in every aspect of pig farming.
                </p>
            </div>
        </div>
    </Section>
);

const PoultryApp = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    // Simple utility function to combine class names
    const cn = (...classes) => {
        return classes.filter(Boolean).join(' ');
    };

    const handleSetActiveSection = (sectionId) => {
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
        setIsDropdownOpen(false);
        const element = document.getElementById(sectionId); //find the element
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); //scroll
        }

    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };

        if (isMobileMenuOpen || isDropdownOpen) {
            window.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen, isDropdownOpen]);

    const LivestockDropdown = () => {
        return (
            <div className="relative">
                <button
                    className={cn(
                        "text-gray-300 hover:text-amber-400 transition-colors duration-300 py-3 md:py-0 text-lg font-medium font-poppins flex items-center gap-1",
                        isDropdownOpen && "text-amber-400"
                    )}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Livestock
                    <ChevronDown
                        className={cn(
                            "h-4 w-4 transition-transform duration-300 ml-1",
                            isDropdownOpen ? "rotate-180" : "rotate-0"
                        )}
                    />
                </button>
                {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg border border-gray-700 z-10 overflow-hidden">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleSetActiveSection('chickens');
                                setIsDropdownOpen(false);
                            }}
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-amber-400 transition-colors duration-200 text-lg font-poppins w-full text-left"
                        >
                            Chickens
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleSetActiveSection('pigs');
                                setIsDropdownOpen(false);
                            }}
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-amber-400 transition-colors duration-200 text-lg font-poppins w-full text-left"
                        >
                            Pigs
                        </button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-gray-950 font-lato">
            {/* Navbar */}
            <nav
                ref={navRef}
                className="bg-gray-900 border-b border-gray-800 py-3 md:py-0 sticky top-0 z-50 transition-all duration-300 shadow-md"
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between flex-wrap md:flex-nowrap">
                    {/* Logo */}
                    <div className="flex items-center text-amber-400 font-bold text-3xl mr-8 font-poppins">
                        <span className="text-amber-500">QalimTech</span> Farms
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-amber-400"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-8 w-8" />
                            ) : (
                                <Menu className="h-8 w-8" />
                            )}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={cn(
                            isMobileMenuOpen ? "block" : "hidden md:flex",
                            "flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full md:w-auto",
                            "transition-all duration-300"
                        )}
                    >
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSetActiveSection('home');
                            }}
                            className={cn(
                                "text-gray-300 hover:text-amber-400 transition-colors duration-300 py-3 md:py-0 text-lg font-medium font-poppins",
                                activeSection === 'home' ? 'text-amber-400 font-semibold' : ''
                            )}

                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSetActiveSection('about');
                            }}
                            className={cn(
                                "text-gray-300 hover:text-amber-400 transition-colors duration-300 py-3 md:py-0 text-lg font-medium font-poppins",
                                activeSection === 'about' ? 'text-amber-400 font-semibold' : ''
                            )}
                        >
                            About Us
                        </a>

                        {/* Livestock Dropdown */}
                        <LivestockDropdown />

                        <a
                            href="#gallery"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSetActiveSection('gallery');
                            }}
                            className={cn(
                                "text-gray-300 hover:text-amber-400 transition-colors duration-300 py-3 md:py-0 text-lg font-medium font-poppins",
                                activeSection === 'gallery' ? 'text-amber-400 font-semibold' : ''
                            )}
                        >
                            Gallery
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSetActiveSection('contact');
                            }}
                            className={cn(
                                "text-gray-300 hover:text-amber-400 transition-colors duration-300 py-3 md:py-0 text-lg font-medium font-poppins",
                                activeSection === 'contact' ? 'text-amber-400 font-semibold' : ''
                            )}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <HomePage />
                <AboutUs />
                <ChickensPage />
                <PigsPage />
                <Gallery />
                <ContactUs />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-7">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center font-poppins text-lg">
                    &copy; {new Date().getFullYear()} QalimTech Farms. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default PoultryApp;

