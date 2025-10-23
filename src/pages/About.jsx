import { motion } from "framer-motion";
import sumantaImg from '../assets/rrr.jpg';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 md:px-12 lg:px-24 py-12"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 text-center md:text-left">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.img
          src={sumantaImg}
          alt="Sumanta"
          className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-3xl shadow-xl border-4 border-indigo-500 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        
        <motion.p 
          className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl text-center md:text-left text-base sm:text-lg lg:text-xl"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a motivated DevOps Engineer passionate about building, testing, and deploying reliable systems. 
          I focus on creating efficient CI/CD pipelines and automating infrastructure to ensure smooth and 
          consistent delivery. Committed to continuous learning, I strive to design workflows that enhance 
          reliability, streamline operations, and support teams in delivering high-quality solutions with 
          speed and confidence.
        </motion.p>
      </div>

      <motion.div 
        className="mt-12 grid md:grid-cols-2 gap-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            My Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            I believe in infrastructure as code, automation, and continuous improvement. 
            Every system should be reproducible, scalable, and maintainable.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            My Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To bridge the gap between development and operations, creating seamless workflows 
            that accelerate delivery while maintaining high quality and reliability.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}