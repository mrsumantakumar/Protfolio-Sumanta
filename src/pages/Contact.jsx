import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, User } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (event) => {
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
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen py-8 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 pt-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
          </motion.div>
          <motion.p 
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Let's discuss how I can contribute to your DevOps team and grow together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Let's Connect & Build Together
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                I'm excited to discuss DevOps opportunities and how my skills in automation, 
                cloud infrastructure, and CI/CD can benefit your organization.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "sumantakumarnayak199@gmail.com",
                  href: "mailto:sumantakumarnayak199@gmail.com",
                  color: "blue"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 77359 30235",
                  href: "tel:+917735930235",
                  color: "purple"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Dhenkanal, Odisha, India",
                  color: "blue"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={itemVariants}
                  className={`flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-${item.color}-500/30 transition-all duration-300 cursor-pointer group`}
                  whileHover={{ y: -2 }}
                >
                  <div className={`w-10 h-10 bg-${item.color}-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm sm:text-base">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-slate-400 hover:text-blue-400 transition-colors text-xs sm:text-sm break-words"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-slate-400 text-xs sm:text-sm">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-600/30"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              {[
                { label: "Your Name", name: "name", type: "text", placeholder: "Enter your name" },
                { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
              ].map((field, index) => (
                <motion.div key={field.name} variants={itemVariants}>
                  <label className="block font-semibold text-white mb-2 text-sm sm:text-base">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-xl border border-slate-600/30 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-slate-400 transition-all duration-200 text-sm sm:text-base"
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <label className="block font-semibold text-white mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your DevOps opportunities or project requirements..."
                  required
                  className="w-full rounded-xl border border-slate-600/30 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-slate-400 transition-all duration-200 resize-vertical text-sm sm:text-base min-h-[120px]"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            <motion.p 
              className="mt-4 text-center text-slate-400 font-medium text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: result ? 1 : 0 }}
            >
              {result}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}