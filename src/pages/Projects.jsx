import { motion } from "framer-motion";

const projects = [
  { title: "Infra Automation using terraform", desc: "Automating Cloud Infrastructure and orchestration on AWS using Terraform." },
 
];

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-indigo-500 dark:border-indigo-400"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}