import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project_bhabta.png";
import projImg2 from "../assets/img/project_bhabta1.png";
import projImg3 from "../assets/img/project_feedmore.png";
import projImg4 from "../assets/img/project_sn.png";
import projImg5 from "../assets/img/project_sn1.png";
import projImg6 from "../assets/img/project_vw.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Helmet } from "react-helmet";

export const Projects = () => {

  const projects = [
    {
      title: "Social Network",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Kalom DataBase",
      description: "Development",
      imgUrl: projImg5,
    },
    {
      title: "Feedmore",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Dashboard Controller",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Chatting Application (BTSM)",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Bhabta Azizia High Madrasah",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Helmet>
        <meta name="description" content="Explore Mizanur Rahaman's portfolio projects, showcasing expertise in web development, design, and server management. Discover innovative solutions and creative designs." />
        <meta name="keywords" content="Mizanur Rahaman Projects, Web Development Projects, Fullstack Developer Portfolio, Web Design, Server Management" />
        <meta property="og:title" content="Projects by Mizanur Rahaman | Portfolio" />
        <meta property="og:description" content="Explore Mizanur Rahaman's portfolio projects, showcasing expertise in web development, design, and server management. Discover innovative solutions and creative designs." />
        <meta property="og:image" content="https://mizanur.in/logo_me.png" />
        <meta property="og:url" content="https://mizanur.in/#projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mizanur's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects by Mizanur Rahaman | Portfolio" />
        <meta name="twitter:description" content="Explore Mizanur Rahaman's portfolio projects, showcasing expertise in web development, design, and server management. Discover innovative solutions and creative designs." />
        <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
      </Helmet>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout these projects, I consistently displayed their proficiency in web development, tackling diverse challenges and incorporating cutting-edge technologies. Their attention to detail, dedication to delivering high-quality results, and ability to collaborate effectively make them a valuable asset in any web development endeavor.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Under progress.... :)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
