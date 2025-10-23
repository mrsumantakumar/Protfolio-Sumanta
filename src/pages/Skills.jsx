import { motion } from "framer-motion";
import awsIcon from "../assets/aws.jpg";
import azureIcon from "../assets/asz.jpg";
import dockerIcon from "../assets/docker.jpg";
import ciIcon from "../assets/ci.jpg";
import devopsIcon from "../assets/Devops1.jpeg";
import Ansible from "../assets/Ansible.jpg";
import Argo from "../assets/Argo cd.jpg";
import git from "../assets/git.jpg";
import github from "../assets/github.jpg";
import jenkins from "../assets/jenkins.jpg";
import kubanetes from "../assets/kubanetes.jpg";
import linux from "../assets/Linux.jpg";
import Terrform from "../assets/Terraform.jpg";
import computernetworking from "../assets/computer networking.jpg";
import verson from "../assets/verson.webp";

const skills = [
  { name: "AWS", icon: awsIcon, category: "Cloud" },
  { name: "Azure", icon: azureIcon, category: "Cloud" },
  { name: "Docker", icon: dockerIcon, category: "Containerization" },
  { name: "CI/CD", icon: ciIcon, category: "Automation" },
  { name: "DevOps", icon: devopsIcon, category: "Methodology" },
  { name: "Ansible", icon: Ansible, category: "Automation" },
  { name: "ArgoCD", icon: Argo, category: "GitOps" },
  { name: "Git", icon: git, category: "Version Control" },
  { name: "GitHub", icon: github, category: "Version Control" },
  { name: "Jenkins", icon: jenkins, category: "CI/CD" },
  { name: "Kubernetes", icon: kubanetes, category: "Orchestration" },
  { name: "Linux", icon: linux, category: "Operating System" },
  { name: "Terraform", icon: Terrform, category: "IaC" },
  { name: "Networking", icon: computernetworking, category: "Infrastructure" },
  { name: "Version Control", icon: verson, category: "Development" },
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
    show: { scale: 1, opacity: 1 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      <motion.h2 
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.p 
        className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Here are the technologies and tools I work with to build efficient and scalable infrastructure.
      </motion.p>

      {categories.map((category) => (
        <motion.div 
          key={category}
          className="mb-12 max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
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
                    scale: 1.1,
                    y: -5
                  }}
                  className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-3 rounded-lg group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 5 }}
                  />
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      ))}

      <motion.div 
        className="max-w-4xl mx-auto px-4 mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Continuous Learning
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          I'm constantly exploring new technologies and methodologies to stay at the forefront of DevOps practices.
        </p>
      </motion.div>
    </motion.div>
  );
}