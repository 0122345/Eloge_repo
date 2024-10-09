import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import HomePage from "./home/page";
import Nav from "./components/Nav";  

export default function Home() {
  return (
    <main>
    
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
