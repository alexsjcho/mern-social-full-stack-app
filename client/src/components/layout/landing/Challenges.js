import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const Challenges = () => {
  return (
    <Container>
      <Container className='d-flex justify-content-center '>
        <Badge variant='danger'>
          <h3>DEVELOPER CHALLENGES</h3>
        </Badge>
      </Container>
      <Row>
        <Col>
          <Card className='p-3'>
            <Card.Img
              variant='top'
              src='https://media.giphy.com/media/mBjulVQHWumozyk6O2/giphy.gif'
            />
            <blockquote className='blockquote mb-0 card-body'>
              <p>
                "I'm lost in this world of software development and I've hit
                several walls"
              </p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Student, Job Seeker
                  <cite title='Source Title'>-> Self-Taught Developer</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>
        <Col>
          <Card className='p-3'>
            <Card.Img
              variant='top'
              src='https://media.giphy.com/media/12zV7u6Bh0vHpu/giphy.gif'
            />
            <blockquote className='blockquote mb-0 card-body'>
              <p>
                "I want to find developer talent and also understand developers
                on personal level beyond their resume"
              </p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Recruiters
                  <cite title='Source Title'> -> Technical Recruiter</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>

        <Col>
          <Card className='p-3'>
            <Card.Img
              variant='top'
              src='https://media.giphy.com/media/RMGLLn6JiJELQh5M8i/giphy.gif'
            />
            <blockquote className='blockquote mb-0 card-body'>
              <p>"I want to find organic talent for my company"</p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Hiring Manager
                  <cite title='Source Title'> -> Engineering Manager </cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Challenges;
