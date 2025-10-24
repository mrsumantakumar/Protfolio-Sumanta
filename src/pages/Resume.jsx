import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react"; // Changed from react-icons to lucide-react

// IMPORTANT: Use lowercase 'resume.pdf' to match your actual filename
import resumePDF from "../assets/resume.pdf";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400 font-medium">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-slate-600/50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-white">
          My Resume
        </h1>
        <p className="text-slate-400 mb-6">
          Click the button below to download or view my resume as a PDF.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.a
            href={resumePDF}
            download="Sumanta_Resume.pdf"
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2 w-5 h-5" />
            Download PDF
          </motion.a>
          
          <motion.a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-slate-600/50 text-slate-300 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            Open
          </motion.a>
        </div>
        
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            src={resumePDF}
            width="100%"
            height="400px"
            title="Resume PDF Viewer"
            className="rounded-xl border-2 border-slate-600/50"
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>
        
        <motion.p 
          className="mt-4 text-sm text-slate-500"
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