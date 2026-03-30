import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Folder, Monitor, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import { cn } from "../../lib/utils";

const projects = [
  {
    id: 1,
    title: "AVIATION",
    category: "Business",
    description:
      "Desde 2002, a Aviation Service tem sido a escolha preferida das companhias aéreas que buscam manter padrões de excelência em seus serviços.",
    tags: ["NextJS", "TypeScript", "Tailwind", "i18", "Heroku"],
    image: "project_1.webp",
    previewUrl: "https://aviationservice.com.br",
  },
  {
    id: 2,
    title: "SIMULACOM",
    category: "Plataforma Web",
    description:
      "Preveja o engajamento de anúncios e de conteúdos de mídias sociais e aplicativos com base em modelagem estatística feita com auxílio de inteligência artificial.",
    tags: ["Next.js", "TypeScript", "Flask", "Firebase", "PostgreSQL"],
    image: "project_2.webp",
    imagePosition: "top",
    previewUrl: "https://simulacom.com.br",
  },
  {
    id: 3,
    title: "SIGMAFLOW",
    category: "Plataforma Web",
    description:
      "Automatize seus dashboards de BI com gráficos interativos e dinâmicos, faça simulações e preveja o desempenho de suas campanhas.",
    tags: [
      "React",
      "TypeScript",
      "Django",
      "Pandas",
      "Azure",
      "PostgreSQL",
      "Redis",
    ],
    inactive: true,
    image: "project_3.webp",
  },
];

export const Projects = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null | undefined>(null);

  return (
    <section
      id="projects"
      className="pt-18 py-6 xl:pt-28 xl:pb-16 2xl:pt-32 2xl:pb-18 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-4  font-display font-semibold uppercase tracking-wide">
            PROJETOS RECENTES
          </h2>
          {/* <div className="w-20 h-1 bg-primary mx-auto rounded-full" /> */}
        </div>

        <div className="w-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            // autoplay={{ delay: 10000 }}
            modules={[
              EffectCoverflow,
              Pagination,
              Navigation,
              // Autoplay
            ]}
            className="w-full py-12"
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="mb-9 bg-card rounded-xl overflow-hidden border-3 border-tertiary/10 group"
              >
                <div className="p-4">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={cn(
                        "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
                        `object-${project.imagePosition || "center"}`,
                      )}
                    />
                  </div>

                  <div className="p-1 pt-4 pb-0">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-start gap-3 font-sans font-light text-zinc-400 leading-relaxed">
                        <div>
                          <h3 className="text-xl md:text-2xl font-normal text-white uppercase tracking-wider">
                            <a href={project.previewUrl} target="_blank">
                              {project.title}
                            </a>
                          </h3>
                          <p className="text-secondary text-sm font-medium">
                            {project.category}
                          </p>
                          {project.inactive && (
                            <p className="bg-gray-500 py-1 px-1.5 mt-2 rounded-sm w-fit text-sm font-medium">
                              Descontinuado
                            </p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center px-3 py-1 bg-[#3C3F44] rounded-sm text-[11px] text-white font-mono text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm font-sans text-zinc-400 leading-relaxed h-12 overflow-hidden line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex gap-4 pt-4">
                        <button
                          onClick={() => setPreviewUrl(project?.previewUrl)}
                          disabled={project?.inactive}
                          className={cn(
                            "flex-1 bg-tertiary/85 hover:bg-tertiary/75 text-black py-2 rounded-lg border border-cyan-400/20 transition-all flex items-center justify-center gap-2 font-medium uppercase text-sm md:text-md cursor-pointer",
                            project.inactive &&
                              "disabled:bg-gray-500 text-gray-400 border-gray-400",
                          )}
                        >
                          <Monitor size={23} /> PRÉ-VISUALIZAR
                        </button>
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex-1 bg-card-browse-btn/85 hover:bg-card-browse-btn/75 text-black py-2 rounded-lg border border-green-400/20 transition-all flex items-center justify-center gap-2 font-medium uppercase text-sm md:text-md cursor-pointer",
                            project.inactive &&
                              "bg-gray-500 hover:bg-gray-500 text-gray-400 border-gray-400",
                          )}
                        >
                          <Folder size={23} /> ACESSAR
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-full max-h-[80vh] bg-card rounded-3xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => setPreviewUrl(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
              <iframe
                src={previewUrl}
                className="w-full h-full border-none"
                title="Project Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full translate-x-1/2" />
    </section>
  );
};
