import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-[#0F0A12] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
          <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App