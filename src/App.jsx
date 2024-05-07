import Navbar from "./Component/navbar/Navbar";
import Summary from "./Component/summary/Summary";
import Parallax from "./Component/parallax/Parallax";
import "./app.scss"
import Contact from "./Component/contact/Contact";
import About from "./Component/about/About";
import Experience from "./Component/experience/Experience";
import Project from "./Component/project/Project";
const App = () => {
  return <div>

    {/* Hero Page */}
    <section>
      <Navbar/> 
      <Summary/>
    </section>

    {/* About Page */}  
    <section id="About">

      <About/>
    </section>

    {/* Experience Page */}  
    <section id="Work">
      <Parallax type="work"/>
    </section>

    <section>

      <Experience/>
    </section>

    {/* Project Page */} 
    <section id="Project">
      <Parallax type="project"/>
    </section>

    <section>

      <Project/>
    </section>

    {/* Contact Page */} 
    <section id="Contact">

      <Contact/>
    </section>
  </div>;
};

export default App;
