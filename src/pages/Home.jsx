import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import sumantha from "../assets/sumanta.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { Award, BookOpen, Rocket, Target, Cloud, Server, Cpu, Zap } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Preload image for better performance
    const img = new Image();
    img.src = sumantha;
    img.onload = () => setImageLoaded(true);
  }, []);

  // Memoized data for better performance
  const coreSkills = useMemo(() => [
    "AWS", "Azure", "Terraform", "Docker", "Kubernetes", 
    "Jenkins", "Ansible", "Git", "Linux", "CI/CD"
  ], []);

  const strengths = useMemo(() => [
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
  ], []);

  const stats = useMemo(() => [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Certifications" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Commitment" }
  ], []);

  // Optimized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            {/* Professional Badge with Animation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium text-white">
                  🚀 Seeking DevOps Fresher Role
                </span>
              </div>
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                variants={itemVariants}
              >
                <span className="block text-white">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Sumanta
                </span>
              </motion.h1>

              <motion.div
                className="space-y-3"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl font-semibold text-slate-300"
                  variants={itemVariants}
                >
                  Aspiring <span className="text-blue-400">DevOps Engineer</span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-slate-400 leading-relaxed"
                  variants={itemVariants}
                >
                  Passionate about building scalable infrastructure, automating workflows, 
                  and implementing robust CI/CD pipelines. Ready to bring fresh perspectives 
                  and contribute to your team's success.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Core Skills with Stagger Animation */}
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.h3 
                className="text-lg font-semibold text-slate-300"
                variants={itemVariants}
              >
                Core Competencies:
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {coreSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-slate-300 border border-slate-600/50 text-sm font-medium cursor-default"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Buttons with Interactive Animations */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Rocket className="mr-2 w-5 h-5" />
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
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-slate-600/50 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column - Clean Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={scaleIn}
          >
            <motion.div
              className="relative"
              whileHover="animate"
              variants={floatAnimation}
            >
              {/* Clean Image Container - No Text Overlays */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-700/50 backdrop-blur-sm">
                <img
                  src={sumantha}
                  alt="Sumanta Kumar Nayak - Aspiring DevOps Engineer"
                  className="w-80 h-96 object-cover"
                  loading="eager"
                  width={320}
                  height={384}
                />
                
                {/* Loading State */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-slate-700 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Single Clean Text Overlay - Positioned Lower */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50">
                    <p className="text-white font-semibold text-center text-sm">
                      DevOps Engineer | Cloud & Automation Specialist
                    </p>
                    <p className="text-slate-300 text-xs text-center mt-1">
                      Ready to deploy skills in professional environment
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-slate-800 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-600/50"
                variants={floatAnimation}
                animate="animate"
              >
                <div className="text-center">
                  <Award className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-blue-400">5+</div>
                  <div className="text-xs text-slate-400">Certs</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-slate-800 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-600/50"
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <div className="text-center">
                  <Rocket className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-emerald-400">10+</div>
                  <div className="text-xs text-slate-400">Projects</div>
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
          transition={{ delay: 0.8 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Why Choose Me As Your DevOps Fresher?
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-blue-400">
                    {strength.icon}
                  </div>
                </motion.div>
                <h4 className="font-semibold text-white mb-2">
                  {strength.title}
                </h4>
                <p className="text-sm text-slate-400">
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
          transition={{ delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                backgroundColor: "rgba(59, 130, 246, 0.1)"
              }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl border border-blue-500/30"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Ready to Start My DevOps Journey
          </motion.h3>
          <motion.p 
            className="text-slate-400 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            I'm eager to apply my skills in a professional environment, learn from experienced mentors, 
            and contribute to your team's success from day one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
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