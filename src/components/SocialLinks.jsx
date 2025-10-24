import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/mrsumantakumar",
      color: "hover:bg-gray-900 hover:text-white",
      bgColor: "bg-white/10 backdrop-blur-sm border border-slate-600/50"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/sumanta07/",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-white/10 backdrop-blur-sm border border-slate-600/50"
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:sumantakumarnayak199@gmail.com",
      color: "hover:bg-emerald-600 hover:text-white",
      bgColor: "bg-white/10 backdrop-blur-sm border border-slate-600/50"
    },
    {
      name: "Resume",
      icon: <Download size={20} />,
      url: "/resume",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-white/10 backdrop-blur-sm border border-slate-600/50"
    }
  ];

  return (
    <motion.div
      className="flex justify-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target={link.url.startsWith('http') ? "_blank" : "_self"}
          rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
          className={`p-3 rounded-xl ${link.bgColor} ${link.color} transition-all duration-300 group relative`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.1,
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-slate-700">
            {link.name}
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}