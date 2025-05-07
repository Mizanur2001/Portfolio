import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo_me.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logoMe" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mizanur2001/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/jameslev2001"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/jameslev2001/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright © 2023. All Rights Reserved</p>
            <p>Made in India with ❤️</p>
            <div className="privacy-policy">
              <Link to='/privacy'>Terms and Conditions</Link>
              <Link to='/pay'>Payment</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
