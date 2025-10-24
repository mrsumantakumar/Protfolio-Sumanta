import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/mrsumantakumar",
      color: "hover:bg-gray-900 hover:text-white",
      bgColor: "bg-gray-100 dark:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/sumanta07/",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-gray-100 dark:bg-gray-800"
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:sumantakumarnayak199@gmail.com",
      color: "hover:bg-red-500 hover:text-white",
      bgColor: "bg-gray-100 dark:bg-gray-800"
    },
    {
      name: "Resume",
      icon: <Download size={20} />,
      url: "/resume",
      color: "hover:bg-green-600 hover:text-white",
      bgColor: "bg-gray-100 dark:bg-gray-800"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="flex justify-center space-x-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target={link.url.startsWith('http') ? "_blank" : "_self"}
          rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
          className={`p-3 rounded-xl ${link.bgColor} ${link.color} shadow-lg transition-all duration-300 group relative`}
          variants={item}
          whileHover={{ 
            scale: 1.1,
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
          {/* Tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {link.name}
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}