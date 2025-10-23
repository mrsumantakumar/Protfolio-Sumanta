

import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import sumantha from "../assets/sumanta.jpg";
import dev from "../assets/dev.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 py-16 bg-gradient-to-b from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Transparent DevOps Background behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={dev}
          alt="DevOps Loop"
          className="w-[450px] sm:w-[550px] md:w-[700px] opacity-10 dark:opacity-15 object-contain"
          style={{
            filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
          }}
        />
      </div>

      {/* Heading */}
      <motion.h1
        className="z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6 leading-tight"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I'm Sumanta
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        className="z-10 rounded-full shadow-2xl border-4 border-white overflow-hidden cursor-pointer mb-6"
        style={{ perspective: 1000 }}
        whileHover={{
          rotateY: 15,
          rotateX: -10,
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <img
          src={sumantha}
          alt="Sumanta"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-full"
        />
      </motion.div>

      {/* Text area with background behind it */}
      <div className="relative z-10 max-w-xl">
        {/* Transparent background image placed behind this text */}
        <motion.p
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 px-2 sm:px-0 leading-relaxed relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          DevOps Engineer skilled in{" "}
          <span className="font-semibold text-indigo-600">Linux</span>, Git, GitHub, networking, and cloud technologies including{" "}
          <span className="font-semibold text-indigo-600">AWS</span>, Azure, Terraform (IaC), Ansible, Docker, Jenkins, Kubernetes, and ArgoCD.
        </motion.p>
      </div>

      {/* CTA Button */}
      <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: 10,
          boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="mt-8 z-10"
      >
        <Link
          to="/resume"
          className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg text-base sm:text-lg font-medium"
        >
          View Resume
        </Link>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="mt-10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}





