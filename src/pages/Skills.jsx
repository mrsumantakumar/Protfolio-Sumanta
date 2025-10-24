import { motion } from "framer-motion";
import awsIcon from "../assets/aws.jpg";
import azureIcon from "../assets/asz.jpg";
import dockerIcon from "../assets/doc.jpg";
import ciIcon from "../assets/ci.jpg";
import devopsIcon from "../assets/devops1.jpeg";
import Ansible from "../assets/Ansible.jpg";
import Argo from "../assets/argo-cd.jpg";
import git from "../assets/git.jpg";
import github from "../assets/github.jpg";
import jenkins from "../assets/jenkins.jpg";
import kubanetes from "../assets/kubanetes.jpg";
import linux from "../assets/Linux.jpg";
import Terrform from "../assets/Terraform.jpg";
import computernetworking from "../assets/computer-networking.jpg";
import verson from "../assets/verson.webp";
import { Cpu, Zap, Cloud, Server } from "lucide-react";

const skills = [
  { name: "AWS", icon: awsIcon, category: "Cloud", level: 90 },
  { name: "Azure", icon: azureIcon, category: "Cloud", level: 85 },
  { name: "Docker", icon: dockerIcon, category: "Containerization", level: 88 },
  { name: "CI/CD", icon: ciIcon, category: "Automation", level: 92 },
  { name: "DevOps", icon: devopsIcon, category: "Methodology", level: 90 },
  { name: "Ansible", icon: Ansible, category: "Automation", level: 85 },
  { name: "ArgoCD", icon: Argo, category: "GitOps", level: 80 },
  { name: "Git", icon: git, category: "Version Control", level: 95 },
  { name: "GitHub", icon: github, category: "Version Control", level: 90 },
  { name: "Jenkins", icon: jenkins, category: "CI/CD", level: 88 },
  { name: "Kubernetes", icon: kubanetes, category: "Orchestration", level: 85 },
  { name: "Linux", icon: linux, category: "Operating System", level: 92 },
  { name: "Terraform", icon: Terrform, category: "IaC", level: 87 },
  { name: "Networking", icon: computernetworking, category: "Infrastructure", level: 83 },
  { name: "Version Control", icon: verson, category: "Development", level: 90 },
];

const categories = [...new Set(skills.map(skill => skill.category))];

const categoryIcons = {
  "Cloud": <Cloud className="w-6 h-6" />,
  "Containerization": <Server className="w-6 h-6" />,
  "Automation": <Zap className="w-6 h-6" />,
  "Methodology": <Cpu className="w-6 h-6" />,
  "GitOps": <Cloud className="w-6 h-6" />,
  "Version Control": <Zap className="w-6 h-6" />,
  "CI/CD": <Server className="w-6 h-6" />,
  "Orchestration": <Cpu className="w-6 h-6" />,
  "Operating System": <Server className="w-6 h-6" />,
  "IaC": <Cloud className="w-6 h-6" />,
  "Infrastructure": <Server className="w-6 h-6" />,
  "Development": <Zap className="w-6 h-6" />
};

export default function Skills() {
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
    hidden: { scale: 0, opacity: 0, y: 20 },
    show: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const progressAnimation = {
    hidden: { width: 0 },
    show: (custom) => ({
      width: `${custom}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Cpu className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <Zap className="w-8 h-8 text-emerald-400" />
          </motion.div>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Mastering the tools and technologies that power modern DevOps and cloud infrastructure
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        {categories.map((category, categoryIndex) => (
          <motion.div 
            key={category}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 + 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-8 text-center border-b-2 border-blue-200/30 dark:border-blue-800/30 pb-2 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              {categoryIcons[category]}
              {category}
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      ...item,
                      hover: cardHover.hover
                    }}
                    whileHover="hover"
                    className="relative group"
                  >
                    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-slate-600/50 transition-all duration-300">
                      {/* Skill Icon */}
                      <motion.div
                        className="relative mb-4"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 object-contain rounded-lg"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>

                      {/* Skill Name */}
                      <h4 className="font-semibold text-white text-center mb-2 group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-700/50 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                          variants={progressAnimation}
                          custom={skill.level}
                          initial="hidden"
                          animate="show"
                        />
                      </div>

                      {/* Level Indicator */}
                      <span className="text-xs text-slate-400 mt-2">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-600/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Always Learning, Always Growing
          </motion.h3>
          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto mb-6"
            whileHover={{ color: "#cbd5e1" }}
          >
            The DevOps landscape is constantly evolving, and I'm committed to staying at the forefront 
            of new technologies and methodologies to deliver cutting-edge solutions.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore My Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}