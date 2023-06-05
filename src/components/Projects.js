import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../components/assets/img/Kamera.jpg';
import projImg2 from '../components/assets/img/wireframe.jpg';
import projImg3 from '../components/assets/img/Web Development.jpg';
import projImg4 from '../components/assets/img/Videografer.jpg';
import colorSharp2 from '../components/assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Photography',
      description: 'Freelance',
      imgUrl: projImg1,
    },
    {
      title: 'UI UX Design',
      description: 'Personal Projects',
      imgUrl: projImg2,
    },
    {
      title: 'Web Development',
      description: 'Personal Projects',
      imgUrl: projImg3,
    },
    {
      title: 'Videographer',
      description: 'Freelance',
      imgUrl: projImg4,
    },
    {
      title: 'Video Editor',
      description: 'freelance',
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <h3>"Here is a list of portfolios I've worked on.""</h3>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Description</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          FrontEnd Developer • Personal Project •<pre>Interactive Multimedia Design on the Introduction of Android-Based Periodic System of Chemical Elements Using Augmented Reality (AR) (Unity)(AR) (Unity) </pre>
                          <pre>Website-based Coffee Shop Design (HTML, CSS, JavaScript) </pre>
                          <pre>Personal Portfolio website (react and Bootstrap)</pre>
                          <pre>NRTravel (Bootstrap, Laravel)</pre>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Hello, I'm Nur Rahman, a fresh graduate from Amikom Yogyakarta University with a background in Information Technology. I have a special interest in product technology, particularly as a software engineer, and I
                          also have a passion for user interface design. I am skilled at working in teams and value work discipline. I have a creative, diligent, and persevering personality. I am highly enthusiastic about learning new
                          things and have the ability to adapt quickly.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
