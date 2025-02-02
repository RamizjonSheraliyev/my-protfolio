import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="container mx-auto text-center text-white">
        {/* About Me Yozuvi */}
        <motion.h2 
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2 }}
        >
          About Me
        </motion.h2>

        {/* Animatsiya bilan chiqadigan matn */}
        <motion.p 
          className="mt-4 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2, delay: 0.5 }}
        >
          Men dasturlash bo'yicha tajribamni oshirib, yuqori darajadagi veb ilovalar yaratishga qiziqaman.
          Full-stack dasturchisi sifatida o'z sohamda doimo yangi texnologiyalarni o'rganaman va rivojlanaman.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:opacity-90 backdrop-blur-sm backdrop-brightness-75 transition-all duration-300"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 1 }}
          >
            <h3 className="text-xl font-bold text-gray-800">Frontend Skills:</h3>
            <ul className="space-y-2 text-gray-600">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              >HTML5</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.6 }}
              >CSS3</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.7 }}
              >Tailwind CSS</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.8 }}
              >Bootstrap</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.9 }}
              >React.js</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
              >TypeScript</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2.1 }}
              >JavaScript</motion.li>
            </ul>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="relative bg-gray-800 p-8 rounded-lg transform hover:scale-105 hover:opacity-90 backdrop-blur-sm backdrop-brightness-75 transition-all duration-300"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 1 }}
          >
            <h3 className="text-white text-xl font-bold mb-4">Backend Skills:</h3>
            <ul className="space-y-2 text-gray-300">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              >Node.js</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.6 }}
              >Express.js</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.7 }}
              >MongoDB</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.8 }}
              >SQL (MySQL, PostgreSQL)</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.9 }}
              >Authentication (JWT, OAuth 2.0)</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
              >RESTful APIs</motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2.1 }}
              >Git and GitHub</motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
