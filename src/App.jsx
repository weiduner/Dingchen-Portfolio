import Navbar from "./Component/Navbar/Navbar";
import Summary from "./Component/summary/Summary";
import Parallax from "./Component/parallax/Parallax";
import "./app.scss"
import Contact from "./Component/contact/Contact";
import About from "./Component/about/About";
import Experience from "./Component/experience/Experience";
const App = () => {
  return <div>

    {/* Hero Page */}
    <section>
      <Navbar/> 
      <Summary/>
    </section>

    {/* About Page */}  
    <section id="About">
      <Navbar/> 
      <About/>
    </section>

    {/* Experience Page */}  
    <section id="Work">
      <Parallax type="work"/>
    </section>

    <section>
      <Navbar/> 
      <Experience/>
    </section>

    {/* Project Page */} 
    <section id="Project">
      <Parallax type="project"/>
    </section>

    {/* Contact Page */} 
    <section id="Contact">
      <Navbar/>
      <Contact/>
    </section>
  </div>;
};

export default App;
