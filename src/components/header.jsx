import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobil menyu tugmasini bosganda menyu ochish yoki yopish
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Contact bo'limiga scroll qilish
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center overflow-x-hidden">
        {/* Logo */}
        <motion.h1
          className="text-white text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Portfolio
        </motion.h1>

        {/* Mobil uchun hamburger menyu */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {/* Desktop uchun navigatsiya */}
        <nav className="hidden lg:flex text-white space-x-6 overflow-x-hidden">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <Button
            variant="contained"
            color="primary"
            onClick={scrollToContact}
            className="text-white hover:bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
          >
            Contact
          </Button>
        </nav>
      </div>

      {/* Mobil menyu */}
      <motion.div
        className={`lg:hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 absolute top-0 right-0 w-2/3 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 overflow-x-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* X tugmasi */}
        <button 
          onClick={toggleMenu} 
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
        >
          &times;
        </button>

        <nav className="text-white space-y-4 mt-8 overflow-x-hidden">
          {/* Home */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#home" className="hover:text-gray-300">Home</a>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#about" className="hover:text-gray-300">About</a>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="hover:text-gray-300">Projects</a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={scrollToContact}
              className="w-full"
            >
              Contact
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
