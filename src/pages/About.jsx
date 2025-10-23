import { motion } from "framer-motion";

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
        <img
          src="/rrr.jpg" // public folder path
          alt="Sumanta"
          className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-3xl shadow-xl border-4 border-indigo-500 object-cover"
        />

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl text-center md:text-left text-base sm:text-lg lg:text-xl">
          I’m a motivated DevOps Engineer passionate about building, testing, and deploying reliable systems. I focus on creating efficient CI/CD pipelines and automating infrastructure to ensure smooth and consistent delivery. Committed to continuous learning, I strive to design workflows that enhance reliability, streamline operations, and support teams in delivering high-quality solutions with speed and confidence.
        </p>
      </div>
    </motion.div>
  );
}
