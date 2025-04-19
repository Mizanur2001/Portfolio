import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Helmet } from "react-helmet";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Server Manager" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Helmet>
        <title>Welcome to Mizanur's Portfolio</title>
        <meta name="description" content="Discover the exceptional creative work of Mizanur Rahaman, a skilled web developer, designer, and server manager. Explore innovative digital experiences crafted with passion and expertise." />
        <meta name="keywords" content="Mizanur Rahaman, Web Developer, Web Designer, Server Manager, Fullstack Developer, Portfolio Website" />
        <meta property="og:title" content="Welcome to Mizanur's Portfolio" />
        <meta property="og:description" content="Discover the exceptional creative work of Mizanur Rahaman, a skilled web developer, designer, and server manager. Explore innovative digital experiences crafted with passion and expertise." />
        <meta property="og:image" content="https://mizanur.in/logo_me.png" />
        <meta property="og:url" content="https://mizanur.in/#home" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mizanur's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Mizanur's Portfolio" />
        <meta name="twitter:description" content="Discover the exceptional creative work of Mizanur Rahaman, a skilled web developer, designer, and server manager. Explore innovative digital experiences crafted with passion and expertise." />
        <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
      </Helmet>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mizanur`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Server Manager" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Meet Me, a highly skilled and versatile web developer with a passion for crafting innovative digital experiences. With a strong background in server management and full-stack development, I brings a wealth of technical knowledge and expertise to every project</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
