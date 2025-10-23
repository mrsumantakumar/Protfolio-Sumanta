import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/mrsumantakumar",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/sumanta07/",
      color: "hover:text-blue-600",
    },
    
   
   
  ];

  return (
    <motion.div
      className="flex justify-center space-x-6 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md transition transform hover:scale-110 ${link.color}}
          whileHover={{ y: -5 }`}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}