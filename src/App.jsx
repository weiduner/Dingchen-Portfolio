import Navbar from "./Component/Navbar/Navbar";
import Summary from "./Component/summary/Summary";
import Parallax from "./Component/parallax/Parallax";
import "./app.scss"
import Contact from "./Component/contact/Contact";
import About from "./Component/about/About";
const App = () => {
  return <div>
    <section>
      <Navbar/> 
      <Summary/>
    </section>
    <section id="About">
      <Navbar/> 
      <About/>
    </section>
    <section id="Work">
      <Parallax type="work"/>
    </section>
    <section id="Project">
      <Parallax type="project"/>
    </section>
    <section id="Contact">
      <Navbar/>
      <Contact/>
    </section>
  </div>;
};

export default App;
