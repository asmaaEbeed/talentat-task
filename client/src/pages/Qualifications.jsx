import React from 'react';
import { Container, Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const Qualifications = () => {
  return (
    <Container>
      <h2 className="mb-4">Qualifications</h2>
      
      <Card className="mb-4">
        <CardBody>
          <CardTitle tag="h4">Education</CardTitle>
          <ListGroup flush>
            <ListGroupItem>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">Bachelor of Computer Science</h5>
                  <p className="text-muted mb-0">Cairo University</p>
                </div>
                <span className="text-muted">2015 - 2019</span>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">Master of UX Design</h5>
                  <p className="text-muted mb-0">Alexandria University</p>
                </div>
                <span className="text-muted">2020 - 2022</span>
              </div>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
      
      <Card className="mb-4">
        <CardBody>
          <CardTitle tag="h4">Skills</CardTitle>
          <div className="d-flex flex-wrap gap-2 mt-3">
            <span className="badge bg-primary">UI Design</span>
            <span className="badge bg-primary">UX Research</span>
            <span className="badge bg-primary">Figma</span>
            <span className="badge bg-primary">Adobe XD</span>
            <span className="badge bg-primary">Sketch</span>
            <span className="badge bg-primary">HTML/CSS</span>
            <span className="badge bg-primary">JavaScript</span>
            <span className="badge bg-primary">React</span>
            <span className="badge bg-primary">User Testing</span>
            <span className="badge bg-primary">Wireframing</span>
            <span className="badge bg-primary">Prototyping</span>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardBody>
          <CardTitle tag="h4">Certifications</CardTitle>
          <ListGroup flush>
            <ListGroupItem>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">Google UX Design Professional Certificate</h5>
                  <p className="text-muted mb-0">Google</p>
                </div>
                <span className="text-muted">2021</span>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">UI/UX Design Specialization</h5>
                  <p className="text-muted mb-0">Coursera</p>
                </div>
                <span className="text-muted">2020</span>
              </div>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Qualifications;