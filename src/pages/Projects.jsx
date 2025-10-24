import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Code } from "lucide-react";

const projects = [
  { 
    title: "Cloud Infrastructure Automation", 
    desc: "End-to-end infrastructure automation on AWS using Terraform, implementing CI/CD pipelines with security best practices.",
    technologies: ["Terraform", "AWS", "GitHub Actions", "Docker"],
    liveLink: "#",
    githubLink: "#",
    status: "Completed",
    category: "Infrastructure"
  },
  { 
    title: "Kubernetes Cluster Deployment", 
    desc: "Production-grade Kubernetes cluster setup with monitoring, logging, and auto-scaling capabilities.",
    technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
    liveLink: "#",
    githubLink: "#",
    status: "In Progress",
    category: "Orchestration"
  },
  { 
    title: "CI/CD Pipeline Optimization", 
    desc: "Multi-stage pipeline with automated testing, security scanning, and blue-green deployment strategy.",
    technologies: ["Jenkins", "Docker", "SonarQube", "Nexus"],
    liveLink: "#",
    githubLink: "#",
    status: "Completed",
    category: "Automation"
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
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            DevOps Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world infrastructure projects showcasing automation, scalability, and cloud-native solutions
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                y: -10
              }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6">
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveLink}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex-1 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium flex-1 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Code className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's build something amazing together. Whether it's infrastructure automation, 
            cloud migration, or DevOps transformation, I'm ready to help.
          </p>
          <motion.div className="flex gap-4 justify-center">
            <motion.a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="/resume"
              className="px-8 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-xl transition-all font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}