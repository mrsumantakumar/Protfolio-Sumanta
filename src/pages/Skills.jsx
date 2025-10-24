import { motion } from "framer-motion";
import awsIcon from "../assets/aws.jpg";
import azureIcon from "../assets/asz.jpg";
import dockerIcon from "../assets/docker.jpg";
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mastering the tools and technologies that power modern DevOps and cloud infrastructure
          </p>
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center border-b-2 border-indigo-200 dark:border-indigo-800 pb-2">
              {category}
            </h3>
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
                    variants={item}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="relative group"
                  >
                    <div className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
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
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>

                      {/* Skill Name */}
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-center mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h4>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                        />
                      </div>

                      {/* Level Indicator */}
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            The DevOps landscape is constantly evolving, and I'm committed to staying at the forefront 
            of new technologies and methodologies to deliver cutting-edge solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore My Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}