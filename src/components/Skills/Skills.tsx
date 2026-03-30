import { motion } from "framer-motion";
import { AppWindow, Server, Cloud, Database } from "lucide-react";
import { cn } from "../../lib/utils";

const skillCategories = [
  {
    title: "Front-End",
    icon: AppWindow,
    iconColor: "text-primary",
    borderColor: "border-primary",
    bg: "bg-primary/5",
    description:
      "Experiente na construção de interfaces de usuário altamente interativas com frameworks modernos.",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "i18n",
    ],
  },
  {
    title: "Back-End",
    icon: Server,
    iconColor: "text-purple-500",
    borderColor: "border-purple-500",
    bg: "bg-purple-500/5",
    description:
      "Arquitetando aplicações do lado do servidor seguras e escaláveis e APIs REST/GraphQL robustas",
    skills: ["Node.js", "ExpressJS", "NestJS", "Python"],
  },
  {
    title: "Banco de dados",
    icon: Database,
    borderColor: "border-red-500",
    bg: "bg-red-500/5",
    description: "Armazenando dados com consistência, segurança e performance.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    borderColor: "border-secondary",
    bg: "bg-secondary/5",
    description:
      "Implantando e gerenciando infraestrutura em nuvem com pipelines CI/CD ",
    skills: ["AWS", "Docker", "Azure", "GitHub Actions", "Vercel", "Heroku"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-14 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 font-display font-semibold uppercase tracking-wide">
            Habilidades
          </h2>
          {/* <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative group p-8 rounded-3xl border-2 transition-all duration-300",
                category.borderColor,
                category.bg,
                "hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
              )}
            >
              {/* Hexagonal shape background (approximate) */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div
                  className={cn(
                    "p-4 rounded-2xl bg-[#18181b] border border-white/10 group-hover:border-white/20 transition-all",
                    category.borderColor.replace("border-", "text-"),
                  )}
                >
                  <category.icon
                    size={32}
                    className={category.iconColor || "initial"}
                  />
                </div>

                <h3 className="text-md sm:text-lg md:text-xl font-bold text-white uppercase tracking-wider">
                  {category.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black/40 border border-white/10 rounded-lg text-[10px] text-gray-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background blur */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" /> */}
    </section>
  );
};
