import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <Container>
      <h2 className="mb-4">About Talentat</h2>
      
      <Card className="mb-4">
        <CardBody>
          <CardText>
            Talentat is a leading job board platform connecting talented professionals with top employers across Egypt and the Middle East. 
            Our mission is to bridge the gap between talent and opportunity, helping companies find the perfect candidates while assisting job 
            seekers in discovering roles that match their skills and career aspirations.
          </CardText>
          <CardText>
            Founded in 2020, Talentat has quickly grown to become one of the most trusted recruitment platforms in the region, with a focus on 
            technology, design, and creative industries. We pride ourselves on our user-friendly interface, powerful matching algorithms, and 
            commitment to creating meaningful connections in the job market.
          </CardText>
        </CardBody>
      </Card>
      
      <h3 className="mb-3">Our Values</h3>
      <Row className="mb-4">
        <Col md={3} sm={6} className="mb-3">
          <Card className="h-100 text-center">
            <CardBody>
              <div className="text-primary mb-3">
                <FaUsers size={40} />
              </div>
              <CardTitle tag="h5">People First</CardTitle>
              <CardText>
                We believe in putting people at the center of everything we do, creating experiences that respect both job seekers and employers.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="h-100 text-center">
            <CardBody>
              <div className="text-primary mb-3">
                <FaLightbulb size={40} />
              </div>
              <CardTitle tag="h5">Innovation</CardTitle>
              <CardText>
                We continuously improve our platform with cutting-edge technology to make job searching and recruiting more efficient.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="h-100 text-center">
            <CardBody>
              <div className="text-primary mb-3">
                <FaHandshake size={40} />
              </div>
              <CardTitle tag="h5">Integrity</CardTitle>
              <CardText>
                We operate with transparency and honesty, building trust with our users through every interaction.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="h-100 text-center">
            <CardBody>
              <div className="text-primary mb-3">
                <FaChartLine size={40} />
              </div>
              <CardTitle tag="h5">Growth</CardTitle>
              <CardText>
                We're committed to helping professionals advance their careers and businesses expand their teams.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
      <h3 className="mb-3">Our Team</h3>
      <Row>
        <Col md={4} className="mb-3">
          <Card className="h-100">
            <CardBody>
              <CardTitle tag="h5">Ahmed Hassan</CardTitle>
              <CardText className="text-muted mb-2">Founder & CEO</CardText>
              <CardText>
                With over 15 years of experience in HR and recruitment, Ahmed founded Talentat to revolutionize how companies and candidates connect in the Middle East.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="h-100">
            <CardBody>
              <CardTitle tag="h5">Laila Ibrahim</CardTitle>
              <CardText className="text-muted mb-2">CTO</CardText>
              <CardText>
                Laila leads our technology team, bringing her expertise in AI and machine learning to create smarter matching algorithms for our platform.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="h-100">
            <CardBody>
              <CardTitle tag="h5">Omar Farouk</CardTitle>
              <CardText className="text-muted mb-2">Head of Operations</CardText>
              <CardText>
                Omar ensures that Talentat runs smoothly day-to-day, overseeing customer support and maintaining relationships with our partner companies.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;