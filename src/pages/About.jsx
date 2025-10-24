import { motion } from "framer-motion";
import sumantaImg from '../assets/rrr.jpg';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          <motion.div
            className="flex-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.img
              src={sumantaImg}
              alt="Sumanta Kumar Nayak"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-8 border-slate-700/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          
          <motion.div
            className="flex-1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                My Journey in DevOps
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                I'm a motivated DevOps Engineer passionate about building, testing, and deploying reliable systems. 
                I focus on creating efficient CI/CD pipelines and automating infrastructure to ensure smooth and 
                consistent delivery.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Committed to continuous learning, I strive to design workflows that enhance 
                reliability, streamline operations, and support teams in delivering high-quality solutions with 
                speed and confidence.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              My Approach
            </h3>
            <p className="text-slate-400">
              I believe in infrastructure as code, automation, and continuous improvement. 
              Every system should be reproducible, scalable, and maintainable.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              My Mission
            </h3>
            <p className="text-slate-400">
              To bridge the gap between development and operations, creating seamless workflows 
              that accelerate delivery while maintaining high quality and reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}