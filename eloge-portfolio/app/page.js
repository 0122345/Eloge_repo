import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main>
       <HomePage/>
       <About/>
       <Services/>
       <Projects/>
       <Footer/>
    </main>
  )
}
