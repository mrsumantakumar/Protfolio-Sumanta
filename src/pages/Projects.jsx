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
      className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              DevOps Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
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
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-slate-600/50 overflow-hidden transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-slate-600/50">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" 
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-slate-600/50">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm font-medium transition-colors group-hover:bg-blue-500/20"
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
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex-1 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-600/50 text-slate-300 rounded-lg hover:bg-slate-500/50 transition-colors font-medium flex-1 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Let's build something amazing together. Whether it's infrastructure automation, 
            cloud migration, or DevOps transformation, I'm ready to help.
          </p>
          <motion.div className="flex gap-4 justify-center">
            <motion.a
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:shadow-xl transition-all font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="/resume"
              className="px-8 py-3 bg-slate-600/50 text-slate-300 border border-slate-500/50 rounded-xl hover:shadow-xl transition-all font-semibold"
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