import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import resumePDF from "../assets/Resume.pdf";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 max-w-md w-full text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
          My Resume
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base">
          Click the button below to download or view my resume as a PDF.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <motion.a
            href={resumePDF}
            download="Sumanta_Resume.pdf"
            className="flex items-center justify-center px-5 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="mr-2 text-lg sm:text-xl" />
            Download PDF
          </motion.a>
          
          <motion.a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-5 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink className="mr-2 text-lg sm:text-xl" />
            Open
          </motion.a>
        </div>
        
        <motion.div 
          className="mt-5 sm:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            src={resumePDF}
            width="100%"
            height="300px"
            title="Resume PDF Viewer"
            className="rounded-lg border-2 border-gray-200 dark:border-gray-700 sm:h-[400px]"
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>
        
        <motion.p 
          className="mt-4 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          If the PDF doesn't load, use the download button above.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Resume;