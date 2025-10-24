import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, User } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "608e043f-1fbb-4fd2-807a-782c7abacfaf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully ✅");
        event.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Network error ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <MessageCircle className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <User className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Let's discuss how I can contribute to your DevOps team and grow together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect & Build Together
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm excited to discuss DevOps opportunities and how my skills in automation, 
                cloud infrastructure, and CI/CD can benefit your organization.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
                variants={{...itemVariants, ...cardHover}}
                whileHover="hover"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a href="mailto:sumantakumarnayak199@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                    sumantakumarnayak199@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300"
                variants={{...itemVariants, ...cardHover}}
                whileHover="hover"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a href="tel:+917735930235" className="text-slate-400 hover:text-purple-400 transition-colors">
                    +91 77359 30235
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
                variants={{...itemVariants, ...cardHover}}
                whileHover="hover"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-slate-400">Dhenkanal, Odisha, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/50"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <label className="block font-semibold text-white mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-600/50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-slate-400 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <label className="block font-semibold text-white mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-600/50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-slate-400 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <label className="block font-semibold text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-xl border border-slate-600/50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-slate-400 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <label className="block font-semibold text-white mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your DevOps opportunities or project requirements..."
                  required
                  className="w-full rounded-xl border border-slate-600/50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-slate-400 transition-all duration-300 resize-vertical"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            <motion.p 
              className="mt-4 text-center text-slate-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {result}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}