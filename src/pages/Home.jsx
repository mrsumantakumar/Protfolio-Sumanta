import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import sumantha from "../assets/sumanta.jpg";
import dev from "../assets/dev.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "AWS", "Azure", "Terraform", "Docker", "Kubernetes", 
    "Jenkins", "Ansible", "Git", "Linux", "ArgoCD"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-300 dark:bg-indigo-600 rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 0],
              x: [null, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* DevOps Background Pattern */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img
            src={dev}
            alt="DevOps Loop"
            className="w-[400px] sm:w-[500px] md:w-[650px] opacity-5 dark:opacity-10 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 dark:opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-10 dark:opacity-5"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Hi, I'm <span className="block mt-2">Sumanta</span>
          </motion.h1>
          
          <motion.div
            className="inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
          >
            <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Available for opportunities
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700 cursor-pointer group"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 z-10" />
              <img
                src={sumantha}
                alt="Sumanta"
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 border-2 border-white/30 rounded-2xl pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div
            className="flex-1 text-left space-y-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                DevOps Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about building scalable, efficient infrastructure and automating 
                development workflows. Specialized in cloud technologies, containerization, 
                and continuous integration/delivery pipelines.
              </p>
            </motion.div>

            {/* Skills Cloud */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      borderColor: "rgba(99, 102, 241, 0.3)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/resume"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg font-semibold text-lg group"
            >
              View Resume
              <motion.span
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 shadow-lg font-semibold text-lg"
            >
              My Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <SocialLinks />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}