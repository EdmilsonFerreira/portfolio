import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { cn } from "../../lib/utils";

const experiences = [
  {
    period: "2022-2025",
    title: "Cognitive",
    description: `⏩ Participei na construção de uma plataforma de automação de dashboards de BI. 
    ⏩ Reduzi em +50% o tempo de instalação das dependências e de execução do projeto ao migrá-lo para techs mais modernas.
    ⏩ Contribuí com alterações no backend.
    ⏩ Assumi o desafio de migração do projeto do Heroku para a recém adotada Azure.
    ⏩ Desenvolvi simuladores de engajamento de anúncios, de posts de food service, de sucesso de músicas em algumas semanas, gerando bastante interesse em gravadoras, artistas e outros.`,
    side: "left",
  },
  {
    period: "2021",
    title: "Labenu",
    description: `⏩ Me aprofundei como Full-Stack em um bootcamp intensivo de 6 meses, me dedicando a uma rotina intensa com projetos individuais e colababorativos em grupo
      ⏩ Apliquei meu conhecimento de programação e ajudando a organizar e desenvolver esses projetos.`,
    side: "right",
  },
  {
    period: "2019-2020",
    title: "Click Interativo",
    description: `⏩ Iniciei a minha carreira de desenvolvedor
      ⏩ Atuei com HTML, LESS (CSS) e jQuery (JS) na criação de layouts responsivos
      ⏩ Aprendi jQuery para a interatividade dos sites, como abertura de menus
      ⏩ Dei meus primeiros passos no backend com ColdFusion e MySQL. Apliquei nomenclatura BEM, utilizei pré-processamento com LESS e efeitos CSS.`,
    side: "left",
  },
];

export const Timeline = () => {
  return (
    <section
      id="timeline"
      className="py-10 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 font-display font-semibold uppercase tracking-wide">
            LINHA DO TEMPO
          </h2>
          {/* <div className="w-20 h-1 bg-secondary mx-auto rounded-full" /> */}
        </div>

        <div className="relative mt-20">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-secondary via-secondary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  exp.side === "left" ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary z-10 hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={
                    "w-full md:w-[45%] p-8 bg-[#18181b] rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group"
                  }
                >
                  <div
                    className={`flex items-center gap-3 mb-4 text-secondary ${
                      exp.side === "left"
                        ? "justify-start"
                        : "justify-start md:justify-end"
                    }`}
                  >
                    <Calendar size={18} />
                    <span className="uppercase tracking-widest font-mono text-xs font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      " text-white mb-4 uppercase group-hover:text-secondary transition-colors font-mono text-xs font-medium",
                      `${exp.side === "left" ? "text-left" : "text-left md:text-right"}`,
                    )}
                  >
                    {exp.title}
                  </h3>

                  <p className="text-[#a2aab9] leading-relaxed max-w-lg mx-auto md:mx-0 font-mono text-xs font-medium whitespace-pre-line">
                    {exp.description}
                  </p>

                  {/* Connecting Line (Mobile) */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary/20 md:hidden" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_100%)] pointer-events-none" />
    </section>
  );
};
