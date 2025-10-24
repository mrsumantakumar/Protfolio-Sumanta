import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import sumantha from "../assets/sumanta.jpg";
import dev from "../assets/dev.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Award, BookOpen, Rocket, Target } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreSkills = [
    "AWS", "Azure", "Terraform", "Docker", "Kubernetes", 
    "Jenkins", "Ansible", "Git", "Linux", "CI/CD"
  ];

  const strengths = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Rapidly adapt to new technologies and methodologies"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong analytical skills with systematic approach"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Passionate Coder",
      description: "Enthusiastic about automation and infrastructure"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "IBM certified in Cloud & DevOps fundamentals"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Certifications" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Commitment" }
  ];

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-300 dark:bg-indigo-600 rounded-full opacity-30"
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

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 dark:opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-10 dark:opacity-5"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.4 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full border border-green-200 dark:border-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Seeking DevOps Fresher Role
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="block text-gray-800 dark:text-white">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Sumanta
                </span>
              </motion.h1>

              <motion.div
                className="space-y-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  Aspiring <span className="text-indigo-600 dark:text-indigo-400">DevOps Engineer</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Passionate about building scalable infrastructure, automating workflows, 
                  and implementing robust CI/CD pipelines. Ready to bring fresh perspectives 
                  and strong foundational knowledge to your DevOps team.
                </p>
              </motion.div>
            </div>

            {/* Core Skills */}
            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Core Competencies:
              </h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
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

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  View My Projects
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <img
                  src={sumantha}
                  alt="Sumanta Kumar Nayak - Aspiring DevOps Engineer"
                  className="w-80 h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-black/40 backdrop-blur-sm rounded-xl p-4"
                  >
                    <p className="font-semibold">Ready to contribute and grow</p>
                    <p className="text-sm opacity-90">in a professional DevOps environment</p>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <Award className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
                  <div className="text-sm font-bold text-indigo-600">5+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Certs</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-center">
                  <Rocket className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <div className="text-sm font-bold text-green-600">10+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Strengths Section */}
        <motion.div
          className="mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Why Choose Me As Your DevOps Fresher?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {strength.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {strength.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl border border-indigo-200 dark:border-indigo-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Start My DevOps Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm eager to apply my skills in a professional environment, learn from experienced mentors, 
            and contribute to your team's success from day one.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Let's Connect
              <Rocket className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}