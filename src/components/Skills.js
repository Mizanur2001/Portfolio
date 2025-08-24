import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Helmet } from "react-helmet";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Helmet>
        <meta name="description" content="Explore Mizanur Rahaman's skills in frontend and backend development, server management, and brand identity. Delivering high-quality and efficient web applications." />
        <meta name="keywords" content="Mizanur Rahaman Skills, Web Development Skills, Frontend Development, Backend Development, Server Management, Brand Identity" />
        <meta property="og:title" content="Skills | Mizanur Rahaman Portfolio" />
        <meta property="og:description" content="Explore Mizanur Rahaman's skills in frontend and backend development, server management, and brand identity. Delivering high-quality and efficient web applications." />
        <meta property="og:image" content="https://mizanur.in/logo_me.png" />
        <meta property="og:url" content="https://mizanur.in/#skills" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mizanur's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills | Mizanur Rahaman Portfolio" />
        <meta name="twitter:description" content="Explore Mizanur Rahaman's skills in frontend and backend development, server management, and brand identity. Delivering high-quality and efficient web applications." />
        <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>With their proficiency in server optimization, front-end and back-end development, I am a versatile skill set that consistently delivers high-quality and efficient web applications.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Frontend Development" />
                  <h5>Frontend Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Server Management" />
                  <h5>Server Management</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Backend Development" />
                  <h5>Backend Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
