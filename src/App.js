import './App.css';
import Fade from 'react-reveal/Fade'
import { Parallax } from "react-parallax";
import {Container} from 'react-bootstrap'
import image from './assets/img/parallex/background.webp'
//Components
import MyNavbar from "./components/my-navbar/mynavbar.component"
import MyCarousel from "./components/my-carousel/my-carousel.component"
import TitleMessage from "./components/title-message/title-message.component"
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import ProjectTimeline from './components/projects-timeline/project-timeline.component';
import Slide from "react-reveal/Slide";
import Contact from './pages/contact-form/contact-form.component';
import Footer from './pages/footer/footer.component';
import Particles from "react-particles-js"
import {particlesOptions} from "./particlesOption"

const  App = () => {
  return (
    <div className="App" style={{position: "relative"}}>
      <MyNavbar/>
      <MyCarousel/>
      <TitleMessage/>
      <Particles className="particles particles-box" params={particlesOptions}/>
      {/* ABOUT ME SECTION */}
      <div>
      <Parallax
          blur={{ min: -1000, max: 1000 }}
          bgImage={image}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
             <About/>
            </Fade>
          </Container>
        </Parallax>
   
      </div>


      <div>
          <Container className="container-box rounded">
          <Slide bottom duration={500}>
              <hr />
              <Skills />
            </Slide>
          </Container>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeline />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <Footer/>
    </div>
  );
}

export default App;
