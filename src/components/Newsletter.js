import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email===""){
      return ;
    }
    setStatus(true)

  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="subscribeHeading">Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
          </Col>
          <Col md={6} xl={7} >
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
              {status && <Alert variant="warning" className="mt-6" style={{ borderRadius: '1rem' }}>Under Progress... :)</Alert>}
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
