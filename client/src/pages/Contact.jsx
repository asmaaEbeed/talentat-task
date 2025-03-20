import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, Row, Col, Alert } from 'reactstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <Container>
      <h2 className="mb-4">Contact Us</h2>
      
      {formSubmitted && (
        <Alert color="success" className="mb-4">
          Your message has been sent successfully! We'll get back to you soon.
        </Alert>
      )}
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <CardBody>
              <h4 className="mb-4">Send us a message</h4>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Your Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <Button color="primary" type="submit" block>
                  Send Message
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="mb-4">
            <CardBody>
              <h4 className="mb-4">Contact Information</h4>
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h5 className="mb-1">Email</h5>
                  <p className="mb-0">contact@talentat.com</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0">+20 123 456 7890</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <div className="me-3 text-primary">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h5 className="mb-1">Address</h5>
                  <p className="mb-0">123 Smart Village, Cairo, Egypt</p>
                </div>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <h4 className="mb-3">Office Hours</h4>
              <p className="mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p className="mb-2"><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              <p className="mb-0"><strong>Sunday:</strong> Closed</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;