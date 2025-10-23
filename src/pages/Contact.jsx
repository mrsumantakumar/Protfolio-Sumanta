
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "608e043f-1fbb-4fd2-807a-782c7abacfaf");

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
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
            Get in Touch 💬
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Feel free to reach out via this contact form or use the details
            below. Your feedback, questions, and suggestions mean a lot!
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="text-indigo-500" />
              <span>sumantakumarnayak199@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-indigo-500" />
              <span> +91-7735930235 </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-indigo-500" />
              <span>Dhenkanal, Odisha</span>
            </li>
          </ul>
        </div>

        {/* Right Column (Form) */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-900"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-900"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 justify-center w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300"
            >
              <Send size={20} />
              Submit Now
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
            {result}
          </p>
        </div>
      </div>
    </section>
  );
}