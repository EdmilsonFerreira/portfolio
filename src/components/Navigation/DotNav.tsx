import { cn } from "../../lib/utils";
import { useActiveSection } from "../../hooks/useActiveSection";

const sections = [
  { id: "hero", label: "Início" },
  { id: "projects", label: "Projetos" },
  { id: "skills", label: "Habilidades" },
  { id: "timeline", label: "Experiência" },
  { id: "contact", label: "Contato" },
];

export const DotNav = () => {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="fixed left-7 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(
            "group relative flex items-center justify-center",
            "w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300",
            activeSection === section.id
              ? "bg-primary scale-125"
              : "bg-[#52515F] hover:bg-gray-400 active:bg-gray-200",
          )}
          aria-label={`Ir para a seção ${section.label}`}
        >
          {/* Tooltip on hover */}
          <span className="absolute left-6 px-2 py-1 bg-[#1A1926] text-white text-[10px] uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.label}
          </span>
        </a>
      ))}
    </div>
  );
};
