import React from "react";
import { motion } from "framer-motion";
import ibm from "../assets/ibm.jpg";
import cir from "../assets/cir.jpg";

const Cirtification = () => {
  const certificates = [
    {
      id: 1,
      title: "IBM Cloud Computing Fundamentals",
      issuer: "Issued by IBM",
      image: ibm,
      link: ibm,
    },
    {
      id: 2,
      title: "Introduction to DevOps",
      issuer: "Issued by IBM",
      image: cir,
      link: cir,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Certifications
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5
            }}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-64 h-64 sm:w-72 sm:h-72 object-contain mb-6 rounded-lg"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{cert.issuer}</p>
            <motion.a
              href={cert.link}
              download
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Certificate
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-600 dark:text-gray-300">
          Continuously learning and expanding my skills through certified courses and practical experience.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Cirtification;