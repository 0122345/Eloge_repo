import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main>
       <HomePage/>
       <Services/>
       <Projects/>
       <Footer/>
    </main>
  )
}
