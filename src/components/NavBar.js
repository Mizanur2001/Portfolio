import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo_me.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  }

  return (
    <>
      <Helmet>
        <title>Mizanur Rahaman | Portfolio Website</title>
        <meta name="description" content="Explore Mizanur Rahaman's portfolio website. Discover his expertise in web development, design, and server management. Let's connect and collaborate!" />
        <meta name="keywords" content="Mizanur Rahaman, Web Developer, Fullstack Developer, Portfolio Website, Web Designer, Server Manager" />
        <meta property="og:title" content="Mizanur Rahaman | Portfolio Website" />
        <meta property="og:description" content="Explore Mizanur Rahaman's portfolio website. Discover his expertise in web development, design, and server management. Let's connect and collaborate!" />
        <meta property="og:image" content="https://mizanur.in/logo_me.png" />
        <meta property="og:url" content="https://mizanur.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mizanur's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mizanur Rahaman | Portfolio Website" />
        <meta name="twitter:description" content="Explore Mizanur Rahaman's portfolio website. Discover his expertise in web development, design, and server management. Let's connect and collaborate!" />
        <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
      </Helmet>
      <Navbar
        expand="md"
        className={`${scrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`}
        onToggle={(isExpanded) => setExpanded(isExpanded)} // Update expanded state
        expanded={expanded} // Control the expanded state
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logoMe" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto links">
              <HashLink to="/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</HashLink>
              <HashLink to="/#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</HashLink>
              <HashLink to="/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</HashLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mizanur2001/" target="_blanl"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/jameslev2001" target="_blanl"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/jameslev2001/" target="_blanl"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='/#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}
