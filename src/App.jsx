import Navbar from "./Component/Navbar/Navbar";
import Summary from "./Component/summary/Summary";
import Parallax from "./Component/parallax/Parallax";
import "./app.scss"
import Contact from "./Component/contact/Contact";
const App = () => {
  return <div>
    <section id="Summary">
      <Navbar/> 
      <Summary/>
    </section>
    <section id="Education">edu</section>
    <section id="Work">
      <Parallax type="work"/>
    </section>
    <section id="Project">
      <Parallax type="project"/>
    </section>
    <section >Project2</section>
    <section >Project3</section>
    <section id="Contact">
      <Navbar/>
      <Contact/>
    </section>
  </div>;
};

export default App;
