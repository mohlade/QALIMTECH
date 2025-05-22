import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

// --- Image Paths (PLACEHOLDER - REPLACE WITH YOUR ACTUAL IMAGES) ---
// In a real project, you'd likely import these directly or use a public folder reference.
// Example: import chickenImage from './assets/chicken1.jpg';
import heroBackgroundImage from './assets/backgound.jpg'; // Imported local background image

const chicken = "https://via.placeholder.com/800x600/FFD700/000000?text=Farm+Chicken";
const pig = "https://via.placeholder.com/800x600/B8860B/FFFFFF?text=Farm+Pig";
// Updated hero background image to use the local asset
const heroBackground = heroBackgroundImage;

// --- Framer Motion Variants ---
// Variants for section-level animations (fade in and slide up)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants for individual card animations (fade in and slight scale)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Variants for staggering children elements within a container
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child's animation
      delayChildren: 0.3,   // Initial delay before first child animates
    },
  },
};

// Variants for individual items within a staggered container
const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Reusable Section Component ---
// This component provides a consistent structure and animation for main sections.
const Section = ({ id, children, className, innerRef }) => {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Animates once when 100px into view
      className={`py-20 ${className}`}
      ref={innerRef} // Allows parent components to attach a ref for scroll-spy
    >
      <div className="container mx-auto px-6 lg:px-8">{children}</div>
    </motion.section>
  );
};

// --- Testimonials Section Component ---
// Displays customer testimonials with a subtle hover effect and star ratings.
const Testimonials = ({ innerRef }) => {
  const testimonials = [
    {
      name: "Mr Victor Omolalde",
      role: "Family Consumer",
      content: "The quality of poultry from QalimTech Farms has transformed our menu. Our customers constantly compliment the taste and tenderness of the meat.",
      avatar: "https://via.placeholder.com/80/80/FFA500/FFFFFF?text=VO", // Dynamic placeholder avatar
    },
    {
      name: "Mr Segun Adekaiyaja",
      role: "Family Consumer",
      content: "We've been buying eggs and meat from QalimTech for over a year now. The difference in quality compared to supermarket products is remarkable.",
      avatar: "https://via.placeholder.com/80/80/007FFF/FFFFFF?text=SA",
    },
    {
      name: "Mrs Favour",
      role: " Food Distributor",
      content: "QalimTech Farms has been our most reliable supplier. Their commitment to ethical farming practices aligns perfectly with our brand values.",
      avatar: "https://via.placeholder.com/80/80/32CD32/FFFFFF?text=MF",
    }
  ];

  return (
    <Section id="testimonials" className="bg-gradient-to-br from-gray-800 to-gray-900" innerRef={innerRef}>
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
            whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }} // Subtle lift on hover
          >
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-amber-400">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    loading="lazy" // Lazy load avatar images for performance
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-amber-500 rounded-full flex items-center justify-center">
                  {/* Checkmark icon for verified testimonial */}
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
              {/* Star rating icons */}
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

// --- Gallery Section Component ---
// Displays a grid of farm images with hover effects and a full-screen lightbox.
const Gallery = ({ innerRef }) => {
  const carouselImages = [
    "https://via.placeholder.com/800x600/FFD700/000000?text=Farm+View+1",
    "https://via.placeholder.com/800x600/B8860B/FFFFFF?text=Farm+View+2",
    "https://via.placeholder.com/800x600/DAA520/FFFFFF?text=Farm+View+3",
    "https://via.placeholder.com/800x600/CD853F/FFFFFF?text=Farm+View+4",
    "https://via.placeholder.com/800x600/FFB90F/FFFFFF?text=Farm+View+5",
    "https://via.placeholder.com/800x600/FF8C00/FFFFFF?text=Farm+View+6",
  ];

  const [selectedImage, setSelectedImage] = useState(null); // State to manage the currently selected image for the lightbox

  return (
    <Section
      id="gallery"
      className="bg-gradient-to-br from-gray-900 to-gray-800"
      innerRef={innerRef}
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
            className="relative group overflow-hidden rounded-xl cursor-pointer" // Added cursor-pointer for better UX
            onClick={() => setSelectedImage(image)} // Open lightbox on image click
          >
            <div className="aspect-w-4 aspect-h-3 w-full">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy" // Lazy load gallery images for performance
              />
            </div>
            {/* Overlay with title and description on hover */}
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

      {/* Lightbox Component for full-screen image view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)} // Close lightbox on background click
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged Gallery Image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full rounded-lg shadow-2xl cursor-pointer"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl p-2 rounded-full hover:bg-white/20 transition"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

// --- About Us Section Component ---
// Provides information about the farm's mission and features.
const AboutUs = ({ innerRef }) => {
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
    <Section id="about" className="bg-gradient-to-br from-gray-800 to-gray-900" innerRef={innerRef}>
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
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow-lg"
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }} // Subtle lift on hover
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
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
            src="https://via.placeholder.com/600x800/FF8C00/FFFFFF?text=Our+Farm"
            alt="About Us"
            className="rounded-xl w-full h-full object-cover shadow-2xl border-2 border-amber-500/30 relative z-10"
            loading="lazy" // Lazy load image for performance
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

// --- Contact Us Section Component ---
// Provides contact information and a form with client-side validation and submission feedback.
const ContactUs = ({ innerRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({}); // State to store validation errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission status
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    // Clear error for this field as user types
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: undefined }));
    }
  };

  // Client-side validation logic
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    // Phone is optional, but if present, validate format
    if (formData.phone && !/^\+?[0-9\s-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null); // Reset submission status
    if (validate()) { // Run validation
      setIsSubmitting(true); // Set submitting state
      try {
        // Simulate API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form data submitted:", formData);
        setSubmitStatus("success"); // Set success status
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form fields
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus("error"); // Set error status
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    }
  };

  return (
    <Section
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-gray-800"
      innerRef={innerRef}
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
                  <p className="text-white text-lg font-medium">+234 80377 77719</p>
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
                <a href="#" className="p-3 bg-gray-700 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300" aria-label="Facebook link">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300" aria-label="Instagram link">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-amber-500 text-gray-300 hover:text-white rounded-full transition-colors duration-300" aria-label="Twitter link">
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
          <form className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-gray-700/70 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg`}
                  aria-invalid={errors.name ? "true" : "false"} // ARIA for accessibility
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-gray-700/70 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+123 456 7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-gray-700/70 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} text-white placeholder:text-gray-400 rounded-xl p-4 w-full font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg`}
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && <p id="phone-error" className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-gray-700/70 border ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white placeholder:text-gray-400 w-full rounded-xl p-4 min-h-[160px] resize-y font-lato focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting} // Disable button during submission
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl p-4 font-poppins font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 text-lg transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      {/* Loading spinner */}
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
                {/* Submission feedback messages with Framer Motion animations */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-400 text-center mt-3 font-medium"
                    >
                      Message sent successfully! We'll get back to you soon.
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-center mt-3 font-medium"
                    >
                      Failed to send message. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

// --- Homepage Component ---
// Features a hero section with background image, parallax, and animated text.
const HomePage = ({ innerRef }) => {
  const heroRef = useRef(null); // Ref for the hero section to track scroll progress
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // Tracks scroll from top of element to when its bottom leaves viewport
  });

  // Parallax effect for text content: moves slower than scroll
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.5]);


  return (
    <Section id="home" className="relative text-white py-60 overflow-hidden" innerRef={heroRef}>
      {/* Background Image with subtle parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 scale-110"
        style={{
          backgroundImage: `url(${heroBackground})`,
          y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) // Background moves slightly with scroll
        }}
      />

      {/* Enhanced Overlay with Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40 z-10" />

      {/* Decorative, pulsating blur circles for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl z-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl z-5 animate-pulse delay-1000"></div>

      {/* Foreground Content with parallax applied */}
      <motion.div
        style={{ y: yText, opacity: opacityText }} // Apply parallax to content
        className="relative z-20 flex flex-col items-center justify-center w-full px-4"
      >
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
              {/* Character by character animation for the farm name */}
              <motion.span
                initial="hidden"
                animate="visible"
                transition={{
                  delayChildren: 0.8, // Start after "Welcome to" fades in
                  staggerChildren: 0.05, // Stagger each character's animation
                }}
              >
                {"Qalimtech Farms".split("").map((char, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    {char === " " ? "\u00A0" : char} {/* Preserve spaces with non-breaking space */}
                  </motion.span>
                ))}
              </motion.span>
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
              stiffness: 100, // Spring animation properties for a bouncy feel
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
      </motion.div>
    </Section>
  );
};

// --- Products Section Component ---
// Displays product cards with descriptions, features, and a 3D tilt hover effect.
const Products = ({ innerRef }) => {
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
    <Section id="products" className="bg-gradient-to-br from-gray-800 to-gray-900" innerRef={innerRef}>
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
            whileHover={{ scale: 1.02, rotateX: 3, rotateY: 3 }} // 3D tilt effect on hover for an interactive feel
            transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring animation for natural movement
          >
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl object-cover w-full h-64 md:h-full shadow-lg border border-amber-500/20"
                loading="lazy" // Lazy load product images for performance
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


// --- Navigation Bar Component ---
// Features a sticky header, responsive menu, and scroll-spy for active links.
const Navbar = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu open/close
  const [isScrolled, setIsScrolled] = useState(false); // State for sticky navbar background
  const [activeSection, setActiveSection] = useState("home"); // State for currently active section

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect: add background on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic: determine active section based on scroll position
      let currentActive = "home";
      for (const sectionId in sectionRefs) {
        const sectionElement = sectionRefs[sectionId].current;
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // A section is considered active if its top is within the middle half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, [sectionRefs]); // Dependency on sectionRefs ensures it re-runs if refs change

  // Smooth scrolls to the target section
  const scrollToSection = (id) => {
    let sectionElement = sectionRefs[id].current; // Try ref first

    if (!sectionElement) {
      // Fallback to document.getElementById if ref.current is null
      console.warn(`Ref for section ${id} is null. Falling back to document.getElementById.`);
      sectionElement = document.getElementById(id);
    }

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking a link
      setActiveSection(id); // Immediately set active for instant feedback
    } else {
      console.error(`Could not find section with ID: ${id} for scrolling.`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          {/* Placeholder logo - for an elite company, use a proper SVG logo */}
          <img src="https://via.placeholder.com/40x40/FFD700/000000?text=Logo" alt="QalimTech Farms Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-2xl font-bold font-poppins">QalimTech Farms</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex items-center space-x-8"
          role="menubar" // ARIA role for menu
        >
          {[
            { id: "home", name: "Home" },
            { id: "about", name: "About Us" },
            { id: "products", name: "Products" },
            { id: "gallery", name: "Gallery" },
            { id: "testimonials", name: "Testimonials" },
            { id: "contact", name: "Contact Us" },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium cursor-pointer transition-colors duration-200 text-lg relative group ${
                activeSection === item.id
                  ? "text-amber-400 font-semibold" // Active link styling
                  : "text-gray-300 hover:text-amber-400"
              }`}
              role="menuitem"
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.name}
              {/* Animated underline on hover and for active link */}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : ''}`}></span>
            </a>
          ))}
        </motion.div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Framer Motion animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-lg fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-8 z-40"
            role="menu"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md p-2"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            {[
              { id: "home", name: "Home" },
              { id: "about", name: "About Us" },
              { id: "products", name: "Products" },
              { id: "gallery", name: "Gallery" },
              { id: "testimonials", name: "Testimonials" },
              { id: "contact", name: "Contact Us" },
            ].map((item) => (
              <motion.a
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + item.id.length * 0.05 }} // Staggered entry for mobile links
                onClick={() => scrollToSection(item.id)}
                className={`text-white text-3xl font-bold hover:text-amber-400 transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id ? "text-amber-400" : ""
                }`}
                role="menuitem"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


// --- Main App Component ---
// This is the root component that orchestrates all sections and the Navbar.
const App = () => {
  // Define currentYear here to be used in the footer
  const currentYear = new Date().getFullYear();

  // Create refs for each section. These refs are passed to both the Section components
  // and the Navbar component to enable scroll-spy functionality.
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Collect all section refs into a single object to pass to Navbar
  const allSectionRefs = {
    home: homeRef,
    about: aboutRef,
    products: productsRef,
    gallery: galleryRef,
    testimonials: testimonialsRef,
    contact: contactRef,
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-lato">
      {/* Navbar receives section refs for scroll spy and smooth scrolling */}
      <Navbar sectionRefs={allSectionRefs} />

      {/* Each section component receives its corresponding ref */}
      <HomePage innerRef={homeRef} />
      <AboutUs innerRef={aboutRef} />
      <Products innerRef={productsRef} />
      <Gallery innerRef={galleryRef} />
      <Testimonials innerRef={testimonialsRef} />
      <ContactUs innerRef={contactRef} />

      {/* Footer Section */}
      <footer className="bg-gray-900 py-10 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6">
          {/* Using the defined currentYear variable */}
          <p>&copy; {currentYear} QalimTech Farms. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-amber-400 transition-colors duration-200" aria-label="Privacy Policy">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-amber-400 transition-colors duration-200" aria-label="Terms of Service">Terms of Service</a>
          </div>
          {/* Added the "Designed by" line as per your snippet */}
          <p className="text-sm mt-2">Designed by ❤️ Omolade</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
