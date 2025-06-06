import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Helmet } from "react-helmet";

export const Contact = () => {
  const BackendUrl = process.env.REACT_APP_BACKEND_URL;
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formDetails.email === '' || formDetails.firstName === '' || formDetails.lastName === '' || formDetails.message === '' || formDetails.phone === '') {
      setStatus({ success: false, message: '*All fied required' });
      return;
    }
    setButtonText("Sending...");
    let response = await fetch(`${BackendUrl}/api/v1/tools/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    console.log(result.code)
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Helmet>
        <meta name="description" content="Contact Mizanur Rahaman, a skilled web developer, designer, and server manager. Reach out for collaborations, inquiries, or project discussions." />
        <meta name="keywords" content="Contact Mizanur Rahaman, Web Developer Contact, Fullstack Developer Contact, Portfolio Contact Page" />
        <meta property="og:title" content="Contact Mizanur Rahaman | Get in Touch" />
        <meta property="og:description" content="Reach out to Mizanur Rahaman for collaborations, inquiries, or project discussions. Contact a skilled web developer and designer today." />
        <meta property="og:image" content="https://mizanur.in/logo_me.png" />
        <meta property="og:url" content="https://mizanur.in/#connect" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mizanur's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Mizanur Rahaman | Get in Touch" />
        <meta name="twitter:description" content="Reach out to Mizanur Rahaman for collaborations, inquiries, or project discussions. Contact a skilled web developer and designer today." />
        <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
      </Helmet>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
