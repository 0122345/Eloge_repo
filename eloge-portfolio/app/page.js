import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main>
       <Nav/>
       <HomePage/>
       <About/>
       <Services/>
       <Projects/>
       <Footer/>
    </main>
  )
}
