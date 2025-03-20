import React from 'react';
import { Container, Card, CardBody } from 'reactstrap';
import { useParams } from 'react-router-dom';

const JobApplication = () => {
  const { id } = useParams();
  
  return (
    <Container>
      <h2>Job Application</h2>
      {id ? (
        <Card>
          <CardBody>
            <h4>Application for {id}</h4>
            <p>Application details will be displayed here.</p>
          </CardBody>
        </Card>
      ) : (
        <p>Select an application from the sidebar to view details.</p>
      )}
    </Container>
  );
};

export default JobApplication;