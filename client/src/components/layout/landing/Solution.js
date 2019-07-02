import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const Solution = () => {
  return (
    <Container>
      <Container className='d-flex justify-content-center'>
        <Badge variant='success'>
          <h3>DevUp </h3>
        </Badge>
      </Container>
      <Row>
        <Col>
          <Card className='p-3'>
            <Card.Img variant='top' src='img/profile.png' />
            <Card.Body>
              <Card.Title>1. Create Profile</Card.Title>
              <Card.Text>Add a bio, skillsets, experience, education</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>
                Add social media: YouTube, GitHub, LinkedIn, and more
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='p-3'>
            <Card.Img variant='top' src='img/interaction.jpeg' />
            <Card.Body>
              <Card.Title>2.Interact </Card.Title>
              <Card.Text>
                Engage with other developers in the network and share best
                practices
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>
                Add a post, comment, and likes and dislikes
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='p-3'>
            <Card.Img variant='top' src='img/collaborate.jpg' />
            <Card.Body>
              <Card.Title>3. Collaborate </Card.Title>
              <Card.Text>
                Find developers who are also entrepreurial and work together to
                create something better
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Network</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Solution;
