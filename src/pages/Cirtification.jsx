import React from "react";
import ibm from "../assets/ibm.jpg";
import cir from "../assets/cir.jpg";

const Cirtification = () => {
  const certificates = [
    {
      id: 1,
      title: "IBM Cloud Computing Fundamentals",
      issuer: "Issued by IBM",
      image: ibm,
      link: ibm, // Replace with actual link if available
    },
    {
      id: 2,
      title: "Introduction to DevOps",
      issuer: "Issued by IBM",
      image: cir,
      link: cir, // Replace with actual link or PDF
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-20 px-4">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12 text-center">
        Certifications
      </h2>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-64 h-64 sm:w-72 sm:h-72 object-contain mb-6 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{cert.issuer}</p>
            <a
              href={cert.link}
              download
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Download Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cirtification;
