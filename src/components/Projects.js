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

export const Projects = () => {

  const projects = [
    {
      title: "Social Network",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Social Network",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Feedmore",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "forums",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Bhabta Azizia High Madrasah",
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
    <section className="project" id="project">
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
