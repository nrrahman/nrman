import { Col, Container, Row } from 'react-bootstrap';
import { MailchimpForm } from './MailChimpForm';
import logo from '../components/assets/img/logo baru.png';
import navIcon1 from '../components/img/nav-icon1.svg';
import navIcon2 from '../components/img/nav-icon2.svg';
import navIcon3 from '../components/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nrrahman/">
                <img src={navIcon1} alt="Icon" />
              </a>

              <a href="https://www.instagram.com/rahman_ve/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
