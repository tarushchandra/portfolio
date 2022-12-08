import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
  });

  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
