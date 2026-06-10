
import Header from "../Components/Header"
import Home from "../Components/Home"
import About from "../Components/About"
import Services from "../Components/Services";
import Works from "../Components/Works";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer"
const Ance = () => {
     return ( 

          <div>
    <Header />
    <div className="mainContent">
    <Home />
    <About />
    <Services />
    <Works />
    <Contact />
    <Footer />
    </div>
          </div>
      );
}
 
export default Ance;