import React from "react";
import resumePDF from "../assets/Resume.pdf";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 max-w-md w-full text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">
          My Resume
        </h1>
        <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base">
          Click the button below to download or view my resume as a PDF.
        </p>
        <a
          href={resumePDF}
          download
          className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
        >
          <FiDownload className="mr-2 text-lg sm:text-xl" />
          Download Resume
        </a>
        <div className="mt-5 sm:mt-6">
          <iframe
            src={resumePDF}
            width="100%"
            height="300px" // smaller for mobile
            title="Resume"
            className="rounded-lg border sm:h-[400px]" // bigger on larger screens
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;


