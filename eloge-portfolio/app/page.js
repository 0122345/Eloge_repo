import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main>
       <HomePage/>
       <About/>
       <Projects/>
       <Footer/>
    </main>
  )
}
