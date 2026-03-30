import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen md:min-h-full lg:min-h-full 3xl:min-h-64 max-h-[260vw] md:max-h-[83vw] flex items-center md:items-start lg:items-center md:pt-10 overflow-hidden bg-[url('/hero-mobile.webp')] md:bg-[url('/hero.webp')] bg-position-[50%_50%] md:bg-position-[80%_30%] md:bg-size-[150%] md:bg-no-repeat lg:bg-cover bg-cover"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 max-[890px]:bg-black/60 max-[890px]:w-70 max-[890px]:h-70 max-[690px]:bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
      </div>

      <div className="md:max-w-9xl mx-auto h-3/12 md:h-auto min-h-44 md:min-h-auto max-h-72 md:max-h-auto w-full relative bottom-[20%] md:bottom-auto md:top-[calc(17%+7vw)] lg:top-auto z-10 grid md:grid-cols-2 px-8 md:px-16 lg:px-26 xl:px-28 gap-3 md:gap-6 items-start md:items-center justify-center md:content-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full md:h-auto flex flex-col justify-evenly md:justify-normal gap-3 md:gap-6"
        >
          <div className="h-3/5 md:h-auto flex flex-col justify-evenly md:justify-normal md:gap-2">
            <span className="text-primary font-heading font-normal text-xl md:text-1xl lg:text-3xl xl:text-4xl tracking-tight uppercase">
              CONSTRUINDO EXPERIÊNCIAS DIGITAIS
            </span>
            <h1 className="text-3xl leading-9 md:leading-12 lg:leading-16 md:text-4xl lg:text-5xl xl:text-6xl xl:leading-18 font-heading font-medium uppercase text-[#d6d6d6] tracking-tight">
              DESENVOLVIMENTO <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                DE SOFTWARE
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-md max-[380px]:hidden">
            Construo experiências digitais com performance, e visualmente
            atraentes, através de tecnologias modernas.
          </p>
          <div className="flex md:flex-wrap gap-2 xl:gap-4 pt-1 xl:pt-4">
            <a
              href="#projects"
              className="bg-secondary hover:bg-[#2b80c5] active:bg-[#2876b6] cursor-pointer text-sm text-center lg:text-base font-normal text-white tracking-wide font-heading px-5 lg:px-6 xl:px-7 h-10 lg:h-11 xl:h-12 rounded-md flex items-center transition-all"
            >
              EXPLORAR PORTFÓLIO
            </a>
            <a
              href="#contact"
              className="bg-transparent cursor-pointer text-white text-sm text-center lg:text-base font-normal hover:bg-[#19191f] active:bg-[#262630]  px-5 lg:px-6 xl:px-7 h-10 lg:h-11 xl:h-12 rounded-md border border-secondary hover:border-[#3194e6] flex items-center gap-2 transition-all"
            >
              CONTATAR
            </a>
          </div>
        </motion.div>
      </div>

      {/* Section Divider/Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};
