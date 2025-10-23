import { motion } from "framer-motion";
import awsIcon from "../assets/aws.jpg";
import azureIcon from "../assets/asz.jpg";
import dockerIcon from "../assets/doc.jpg";
import ciIcon from "../assets/ci.jpg";
import devopsIcon from "../assets/Devops1.jpeg";
import Ansible from "../assets/Ansible.jpg";
import Argo from "../assets/Argo cd.jpg";
import Azure from "../assets/Azure.jpg";
import computernetworking from "../assets/computer networking.jpg";
import git from "../assets/git.jpg";
import github from "../assets/github.jpg";
import jenkins from "../assets/jenkins.jpg";
import kubanetes from "../assets/kubanetes.jpg";
import linux from "../assets/Linux.jpg";
import Terrform from "../assets/Terraform.jpg";
import verson from "../assets/verson.webp";

const skills = [
  { name: "AWS", icon: awsIcon },
  { name: "Azure", icon: azureIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "CI/CD", icon: ciIcon },
  { name: "DevOps", icon: devopsIcon },
  { name: "Ansible", icon: Ansible },
  { name: "ArgoCD", icon: Argo },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Jenkins", icon: jenkins },
  { name: "Kubernetes", icon: kubanetes },
  { name: "Linux", icon: linux },
  { name: "Terraform", icon: Terrform },
  { name: "Networking", icon: computernetworking },
  { name: "Version Control", icon: verson },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-10 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mb-2 rounded-lg"
            />
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}




