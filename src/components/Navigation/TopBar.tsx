import { useState, useEffect } from "react";
import { Menu, X, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Experiência", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Sobre", href: "#hero" },
  { name: "Github", href: "https://github.com/EdmilsonFerreiraF" },
  { name: "Contato", href: "#contact" },
];

export const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 md:px-0 py-4",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="max-w-9xl md:px-12 lg:px-26 xl:px-28 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-fit gap-4 px-2">
          <a href="#hero" className="flex gap-4 items-center">
            <img className="w-10 h-10" src="logo.webp" />
            <span className="md:w-min lg:w-auto text-white font-heading font-medium tracking-normal text-lg uppercase">
              Edmilson Ferreira
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Github" ? "_blank" : "_self"}
              className="text-gray-300 hover:text-gray-200 active:text-white transition-colors text-sm font-normal"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div>
          <button
            onClick={() => setPreviewUrl("resume.pdf")}
            className="hidden cursor-pointer text-[#4b83a0] hover:bg-[#19191f] active:bg-[#262630] px-6 py-2.5 h-10 rounded-md border border-[#4b83a0] transition-all md:flex items-center gap-2 text-sm"
          >
            Currículo
          </button>

          <AnimatePresence>
            {previewUrl && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 md:p-8",
                  isOpen && scrolled ? "md:py-1 px-0" : "",
                )}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-6xl h-full max-h-[80vh] bg-card rounded-3xl overflow-hidden border border-white/10"
                >
                  {previewUrl && (
                    <button
                      onClick={() => setPreviewUrl(null)}
                      className={cn(
                        "absolute cursor-pointer top-9 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors",
                        scrolled ? "sm:hidden" : "",
                      )}
                    >
                      <X size={24} />
                    </button>
                  )}
                  <iframe
                    src={previewUrl}
                    className="w-full h-full border-none"
                    title="Project Preview"
                  />
                </motion.div>
                {previewUrl && scrolled && (
                  <button
                    className="relative cursor-pointer z-70"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setScrolled(false);
                    }}
                  >
                    <Expand
                      size={24}
                      className="ml-4 hover:text-gray-100 active:text-gray-300 max-sm:hidden"
                    />
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="cursor-pointer md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 mt-2 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Github" ? "_blank" : "_self"}
                  className="text-gray-300 hover:text-gray-200 active:text-white transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => setPreviewUrl("resume.pdf")}
                className="cursor-pointer bg-secondary hover:bg-[#2b80c5] active:bg-[#2876b6] text-white px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 w-full"
              >
                Currículo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
