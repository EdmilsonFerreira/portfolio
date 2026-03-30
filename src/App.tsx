import { TopBar } from "./components/Navigation/TopBar";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Timeline } from "./components/Timeline/Timeline";
import { Footer } from "./components/Footer/Footer";
import { DotNav } from "./components/Navigation/DotNav";

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-secondary/30 selection:text-white">
      <TopBar />
      <DotNav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
