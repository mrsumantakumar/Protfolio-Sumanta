import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

  return (
    <motion.section 
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
            Get in Touch 💬
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Feel free to reach out via this contact form or use the details
            below. Your feedback, questions, and suggestions mean a lot!
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <motion.li 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              whileHover={{ x: 10 }}
            >
              <Mail className="text-indigo-500" />
              <span>sumantakumarnayak199@gmail.com</span>
            </motion.li>
            <motion.li 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              whileHover={{ x: 10 }}
            >
              <Phone className="text-indigo-500" />
              <span>+91-7735930235</span>
            </motion.li>
            <motion.li 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              whileHover={{ x: 10 }}
            >
              <MapPin className="text-indigo-500" />
              <span>Dhenkanal, Odisha</span>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-900 transition-all"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-900 transition-all"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-900 transition-all"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-900 transition-all resize-vertical"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 justify-center w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              {isSubmitting ? "Sending..." : "Submit Now"}
            </motion.button>
          </form>

          <motion.p 
            className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {result}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}