import { motion } from "framer-motion";

const skills = [
  { name: "AWS", icon: "/aws.jpg" },
  { name: "Azure", icon: "/asz.jpg" },
  { name: "Docker", icon: "/doc.jpg" },
  { name: "CI/CD", icon: "/ci.jpg" },
  { name: "DevOps", icon: "/Devops1.jpeg" },
  { name: "Ansible", icon: "/Ansible.jpg" },
  { name: "ArgoCD", icon: "/Argo cd.jpg" },
  { name: "Git", icon: "/git.jpg" },
  { name: "GitHub", icon: "/github.jpg" },
  { name: "Jenkins", icon: "/jenkins.jpg" },
  { name: "Kubernetes", icon: "/kubanetes.jpg" },
  { name: "Linux", icon: "/Linux.jpg" },
  { name: "Terraform", icon: "/Terraform.jpg" },
  { name: "Networking", icon: "/computer networking.jpg" },
  { name: "Version Control", icon: "/verson.webp" },
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
