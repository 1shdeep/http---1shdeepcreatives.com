import Hero from "./Hero/Hero";
import About from "./About/About"
import Work from "./Work/Work"
import Clients from "./Clients/Clients"
import Quote from "./Quote/Quote"
import Testimonials from "./Testimonials/Testimonials";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      <Hero />
      <About/>
      <Work/>
      <Clients/>
      <Quote/>
      <Testimonials/>
    </>
  );
}

export default Home;
