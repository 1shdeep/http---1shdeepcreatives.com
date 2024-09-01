import Hero from "./Hero/Hero";
import About from "./About/About"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"
import Work from "./Work/Work"
import Clients from "./Clients/Clients"
import Quote from "./Quote/Quote"
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
    <Navbar/>
      <Hero />
      <About/>
      <Work/>
      <Clients/>
      <Quote/>
      <Testimonials/>
      <Blog />
      <Footer/>
    </>
  );
}

export default Home;
