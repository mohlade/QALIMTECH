import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
const chicken = "./assets/chicken1.jpg";
const pig = "./assets/pig1.jpg"; 
const chicken2 = "./assets/pig1.jpg"; 


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Reusable Section Component
const Section = ({ id, children, className }) => {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`py-20 ${className}`}
    >
      <div className="container mx-auto px-6 lg:px-8">{children}</div>
    </motion.section>
  );
};

// Enhanced testimonial component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr Victor Omolalde",
      role: "Family Consumer",
      content: "The quality of poultry from QalimTech Farms has transformed our menu. Our customers constantly compliment the taste and tenderness of the meat.",
      avatar: "/api/placeholder/80/80",
    },
    {
      name: "Mr Segun Adekaiyaja",
      role: "Family Consumer",
      content: "We've been buying eggs and meat from QalimTech for over a year now. The difference in quality compared to supermarket products is remarkable.",
      avatar: "/api/placeholder/80/80",
    },
    {
      name: "Mrs Favour",
      role: " Food Distributor",
      content: "QalimTech Farms has been our most reliable supplier. Their commitment to ethical farming practices aligns perfectly with our brand values.",
      avatar: "/api/placeholder/80/80",
    }
  ];

  return (
    <Section id="testimonials" className="bg-gradient-to-br from-gray-800 to-gray-900">
      <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center font-poppins">
        What Our Customers Say
      </h2>
      <motion.div 
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={staggerItemVariants}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-amber-400">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-white font-poppins">{testimonial.name}</h4>
                <p className="text-amber-400/80 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">{testimonial.content}</p>
            <div className="mt-4 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

// Enhanced Gallery with improved layout and hover effects
const Gallery = () => {
  const carouselImages = [
    "/api/placeholder/800/600", // Replace with actual image URLs in your implementation
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
  ];

  return (
    <Section
      id="gallery"
      className="bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
          Our <span className="text-amber-400">Gallery</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Take a visual tour of our farm and see our well-cared-for animals in their natural environment
        </p>
      </div>
     
      <motion.div 
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            variants={staggerItemVariants}
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="aspect-w-4 aspect-h-3 w-full">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold font-poppins transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                Farm Life
              </h3>
              <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out">
                Experience the natural beauty of QalimTech Farms
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
     
      <div className="text-center mt-10">
        <button className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white rounded-xl transition-colors duration-300 font-semibold gap-2 group">
          View Full Gallery
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </Section>
  );
};

// Enhanced About Us with modern layout
const AboutUs = () => {
  const features = [
    {
      title: "Sustainable Practices",
      description: "We implement eco-friendly farming methods that minimize environmental impact while maximizing animal welfare.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Quality Feed",
      description: "Our animals receive premium, carefully formulated feed to ensure optimal health and nutrition.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Animal Welfare",
      description: "We prioritize the comfort and well-being of our animals, providing spacious and clean environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <Section id="about" className="bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-400 mb-4 font-poppins">
          About <span className="text-white">QalimTech</span> Farms
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          A passion for sustainable and ethical farming is at the heart of everything we do
        </p>
      </div>
     
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-300 leading-relaxed font-lato text-lg">
            Welcome to Qalimtech Farms, where our passion for sustainable and
            ethical farming is at the heart of everything we do. Founded with a
            vision to provide the highest quality poultry and pork products, we
            are committed to the well-being of our animals and the satisfaction
            of our customers.
          </p>
         
          <p className="text-gray-300 leading-relaxed font-lato text-lg">
            Our team comprises experienced farmers, animal care specialists, and
            dedicated staff who work tirelessly to maintain the highest
            standards of care. We believe in combining time-honored farming
            traditions with modern, innovative techniques.
          </p>
         
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
       
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
          <img
            src="/api/placeholder/600/800"
            alt="About Us"
            className="rounded-xl w-full h-full object-cover shadow-2xl border-2 border-amber-500/30 relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 rounded-lg bg-amber-500 text-white p-4 shadow-xl z-20 font-poppins">
            <p className="text-2xl font-bold">7+</p>
            <p className="text-sm">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// Enhanced Contact form with better styling
const ContactUs = () => {
  return (
    <Section
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
          Get in <span className="text-amber-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Have questions or interested in our products? Reach out to us and we'll get back to you soon
        </p>
      </div>
     
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl h-full">
            <h3 className="text-amber-400 text-2xl font-semibold mb-6 font-poppins">
              Contact Information
            </h3>
           
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email Us At</p>
                  <p className="text-white text-lg font-medium">oalimi@yahoo.com</p>
                </div>
              </div>
             
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Call Us At</p>
                  <p className="text-white text-lg font-lg font-medium">+234 80377 77719</p>
                </div>
              </div>
             
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Visit Our Farm</p>
                  <p className="text-white text-lg font-medium">Ayetodo Farms, Nigeria</p>
                </div>
              </div>
            </div>
           
            <div className="mt-10">
              <p className="text-gray-300 mb-4">Connect with us on social media:</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-gray-700 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
           
            <div className="mt-10 p-6 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/30">
              <p className="text-amber-200 font-medium">Business Hours</p>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
       
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-white text-2xl font-semibold mb-6 font-poppins">
              Send a Message
            </h3>
           
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="bg-gray-700/70 border border-gray-600 text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                />
              </div>
             
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="bg-gray-700/70 border border-gray-600 text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                />
              </div>
             
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+123 456 7890"
                  className="bg-gray-700/70 border border-gray-600 text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                />
              </div>
             
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="bg-gray-700/70 border border-gray-600 text-white placeholder:text-gray-400 w-full rounded-xl p-4 min-h-[160px] resize-y font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                />
              </div>
             
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl p-4 font-poppins font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 text-lg transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

// Enhanced homepage with better hero section
const HomePage = () => {
  return (
    <Section id="home" className="relative text-white py-40 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-110 motion-safe:animate-subtle-zoom"
        style={{ backgroundImage: `url(${chicken2})` }}
      />

      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40 z-10" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl z-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl z-5 animate-pulse delay-1000"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-block mb-4">
            <span className="bg-amber-500/20 text-amber-400 text-sm md:text-base py-1 px-3 rounded-full font-medium">
              Premium Livestock & Farming
            </span>
          </div>
         
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
          >
            Welcome to <br />
            <span className="text-amber-400 inline-block mt-2 relative">
              Qalimtech Farms
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500/50 rounded-full"></span>
            </span>
          </motion.h1>
         
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 font-lato leading-relaxed max-w-3xl mx-auto"
          >
            Discover the best in poultry and pig farming in Nigeria. We are dedicated to providing 
            high-quality, healthy livestock through sustainable and ethical practices.
          </motion.p>
         
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 group"
            >
              <span>Learn More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
           
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-gray-300 hover:border-amber-400 text-white hover:text-amber-400 px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

// Products Section
const Products = () => {
  const productsList = [
    {
      name: "Farm Fresh Chicken",
      description: "Our chickens are raised in a free-range environment, ensuring tender, flavorful meat and high-quality eggs.",
      image: chicken,
      features: ["Free-range", "No hormones", "Rich in protein"],
      price: "₦ 2,500 / kg"
    },
    {
      name: "Premium Pork",
      description: "Our pigs are fed a balanced, nutritious diet, resulting in lean, succulent pork with exceptional taste.",
      image: pig,
      features: ["Naturally raised", "Lean and tender", "Versatile for cooking"],
      price: "₦ 3,200 / kg"
    },
  ];

  return (
    <Section id="products" className="bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-400 mb-4 font-poppins">
          Our <span className="text-white">Products</span>
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          From farm to your table, experience the difference of ethically raised and responsibly sourced meat products.
        </p>
      </div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        {productsList.map((product, index) => (
          <motion.div
            key={index}
            variants={staggerItemVariants}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-6"
          >
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl object-cover w-full h-64 md:h-full shadow-lg border border-amber-500/20"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-3 font-poppins">{product.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
              <ul className="text-gray-400 space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-amber-400 text-3xl font-bold font-poppins">{product.price}</span>
                <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};


// Navigation Bar - Modern and Responsive
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src="/api/placeholder/40/40" alt="QalimTech Farms Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-2xl font-bold font-poppins">QalimTech Farms</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex items-center space-x-8"
        >
          <a
            onClick={() => scrollToSection("home")}
            className="text-gray-300 hover:text-amber-400 font-medium cursor-pointer transition-colors duration-200 text-lg"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-amber-400 font-medium cursor-pointer transition-colors duration-200 text-lg"
          >
            About Us
          </a>
          <a
            onClick={() => scrollToSection("products")}
            className="text-gray-300 hover:text-amber-400 font-medium cursor-pointer transition-colors duration-200 text-lg"
          >
            Products
          </a>
          <a
            onClick={() => scrollToSection("gallery")}
            className="text-gray-300 hover:text-amber-400 font-medium cursor-pointer transition-colors duration-200 text-lg"
          >
            Gallery
          </a>
          <a
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-300 hover:text-amber-400 font-medium cursor-pointer transition-colors duration-200 text-lg"
          >
            Testimonials
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-2 rounded-full font-semibold transition duration-300 shadow-md"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-md p-2"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gray-900/95 backdrop-blur-md pb-4 pt-2 shadow-inner"
        >
          <div className="flex flex-col items-center space-y-4">
            <a
              onClick={() => scrollToSection("home")}
              className="block text-gray-300 hover:text-amber-400 py-2 text-xl font-medium"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="block text-gray-300 hover:text-amber-400 py-2 text-xl font-medium"
            >
              About Us
            </a>
            <a
              onClick={() => scrollToSection("products")}
              className="block text-gray-300 hover:text-amber-400 py-2 text-xl font-medium"
            >
              Products
            </a>
            <a
              onClick={() => scrollToSection("gallery")}
              className="block text-gray-300 hover:text-amber-400 py-2 text-xl font-medium"
            >
              Gallery
            </a>
            <a
              onClick={() => scrollToSection("testimonials")}
              className="block text-gray-300 hover:text-amber-400 py-2 text-xl font-medium"
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="block bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-full font-semibold transition duration-300 text-xl mt-2"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};


// Footer - Comprehensive and Stylish
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="col-span-full lg:col-span-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <img src="/api/placeholder/40/40" alt="QalimTech Farms Logo" className="h-10 w-10 mr-2" />
            <h3 className="text-white text-3xl font-bold font-poppins">QalimTech Farms</h3>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
            Dedicated to providing Nigeria with the highest quality, ethically raised poultry and pork products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-amber-400 text-xl font-semibold mb-6 font-poppins text-center md:text-left">Quick Links</h4>
          <ul className="space-y-3 text-center md:text-left">
            <li>
              <a href="#home" className="hover:text-amber-400 transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition-colors duration-200">About Us</a>
            </li>
            <li>
              <a href="#products" className="hover:text-amber-400 transition-colors duration-200">Products</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-amber-400 transition-colors duration-200">Gallery</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-amber-400 transition-colors duration-200">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition-colors duration-200">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-amber-400 text-xl font-semibold mb-6 font-poppins text-center md:text-left">Contact Info</h4>
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="h-5 w-5 text-amber-400" />
              <p>oalimi@yahoo.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="h-5 w-5 text-amber-400" />
              <p>+234 8037 777719</p>
            </div>
            <div className="flex items-start justify-center md:justify-start gap-3">
              <MapPin className="h-5 w-5 text-amber-400 mt-1" />
              <p>Ayetodo Farms, <br/> Agric Ojo, <br/> Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="col-span-full md:col-span-3 lg:col-span-1">
          <h4 className="text-amber-400 text-xl font-semibold mb-6 font-poppins text-center md:text-left">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <a href="#" className="p-3 bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </a>
          </div>

          <h4 className="text-amber-400 text-xl font-semibold mb-4 font-poppins text-center md:text-left">Newsletter</h4>
          <p className="text-gray-400 mb-4 text-center md:text-left">Stay updated with our latest news and offers.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-gray-700/70 border border-gray-600 text-white placeholder:text-gray-400 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
        <p>&copy; {currentYear} QalimTech Farms. All rights reserved.</p>
        <p className="text-sm mt-2">Designed by ❤️ Omolade</p>
      </div>
    </footer>
  );
};


// Main App Component
const App = () => {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Lato:wght@400;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-lato { font-family: 'Lato', sans-serif; }
        @keyframes subtle-zoom {
          0% { transform: scale(1.1); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1.1); }
        }
        .motion-safe:animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
      `}</style>
      <Navbar />
      <main>
        <HomePage/>
        <AboutUs/>
        <Gallery/>
        <Products/>
        <Testimonials/>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;