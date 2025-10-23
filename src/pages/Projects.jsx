import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { 
    title: "Infra Automation using Terraform", 
    desc: "Automating Cloud Infrastructure and orchestration on AWS using Terraform.",
    technologies: ["Terraform", "AWS", "Git", "CI/CD"],
    liveLink: "#",
    githubLink: "#"
  },
  { 
    title: "CI/CD Pipeline with Jenkins", 
    desc: "Built end-to-end CI/CD pipeline for automated testing and deployment.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "GitHub"],
    liveLink: "#",
    githubLink: "#"
  },
  { 
    title: "Containerized Microservices", 
    desc: "Dockerized application with Kubernetes orchestration for scalable deployment.",
    technologies: ["Docker", "Kubernetes", "Helm", "AWS EKS"],
    liveLink: "#",
    githubLink: "#"
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4"
    >
      <motion.h2 
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Projects
      </motion.h2>
      
      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ 
              scale: 1.05,
              y: -10
            }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl border-t-4 border-indigo-500 dark:border-indigo-400 transition-all duration-300 group"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <motion.a
                href={project.liveLink}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubLink}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Want to see more projects or collaborate?
        </p>
        <motion.a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
}