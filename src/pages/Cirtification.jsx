import React from "react";
import { motion } from "framer-motion";
import ibm from "../assets/Ibm.jpg";
import cir from "../assets/cir.jpg";
import { Award, Download, Star } from "lucide-react";

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
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <Star className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Validating expertise through industry-recognized certifications
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{ ...itemVariants, ...cardHover }}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-64 h-64 object-contain rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold text-white mb-2"
                whileHover={{ color: "#60a5fa" }}
                transition={{ duration: 0.2 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p 
                className="text-slate-400 mb-4"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {cert.issuer}
              </motion.p>
              <motion.a
                href={cert.link}
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download Certificate
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div 
          className="mt-16 text-center max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p 
            className="text-lg text-slate-400"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            Continuously learning and expanding my skills through certified courses and practical experience 
            in cloud computing and DevOps methodologies.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cirtification;