import React, { useState, useRef } from "react";
import {
  Linkedin,
  Github,
  ArrowUp,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navLinks = [
    { name: "Experiência", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Sobre", href: "#hero" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // These should be replaced with actual EmailJS credentials
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

      console.log("SERVICE_ID", SERVICE_ID);
      console.log("TEMPLATE_ID", TEMPLATE_ID);
      console.log("PUBLIC_KEY", PUBLIC_KEY);

      if (SERVICE_ID === "YOUR_SERVICE_ID") {
        console.warn(
          "EmailJS credentials not configured. Simulating success...",
        );
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
      } else {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current!,
          PUBLIC_KEY,
        );
        setSubmitStatus("success");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-background pt-24 pb-12 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand/About */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <a href="#hero" className="flex gap-4 items-center">
                <img className="w-10 h-10" src="logo.webp" />
                <span className="md:w-min lg:w-auto text-white font-heading font-medium tracking-normal text-lg uppercase">
                  Edmilson Ferreira
                </span>
              </a>
            </div>
            {/* <p className="text-gray-400 text-sm leading-relaxed">
              Crafting high-performance digital experiences that push the boundaries of modern web technologies.
            </p> */}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Links rápidos
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((navLink) => (
                <li key={navLink.name}>
                  <a
                    href={navLink.href}
                    className="text-gray-400 hover:text-secondary active:text-[#2b80c5] transition-colors text-sm font-medium"
                  >
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-wider">
              Me siga
            </h4>
            <div className="flex gap-4">
              {[
                // { icon: Instagram, href: "#", label: "Instagram" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/edmilson-filho",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/EdmilsonFerreiraF",
                  label: "GitHub",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-secondary active:border-[#2876b6] transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider">
              ENTRE EM CONTATO
            </h4>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-secondary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu E-mail"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-secondary focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-secondary focus:outline-none transition-colors"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua Mensagem"
                required
                rows={4}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-secondary focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary hover:bg-[#2b80c5] active:bg-[#2876b6] disabled:bg-[#296fa8] disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    <Send size={16} /> ENVIAR MENSAGEM
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-xs font-medium ${
                      submitStatus === "success"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle size={14} /> Mensagem enviada com sucesso!
                      </>
                    ) : (
                      <>
                        <AlertCircle size={14} /> Falha ao enviar mensagem. Por
                        favor, tente novamente.
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
            © 2026 EDMILSON FERREIRA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-white active:text-gray-300 transition-all text-xs font-bold uppercase tracking-widest cursor-pointer"
          >
            VOLTAR AO TOPO{" "}
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
