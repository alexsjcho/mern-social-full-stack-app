import React, { Fragment } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const ProjectInfo = () => {
  return (
    <Fragment>
      <Container>
        <Container className='d-flex justify-content-center '>
          <Badge variant='primary'>
            <h3>ABOUT THIS PROJECT</h3>
          </Badge>
        </Container>
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant='top'
                src='https://media.giphy.com/media/4Jn9m3jXsmeZi/giphy.gif'
              />
              <Card.Body>
                <Card.Title>Project Management </Card.Title>
                <Card.Text>
                  Check out my Trello cards to manage feature implementations on
                  this project
                </Card.Text>
                <Button variant='dark'>
                  <a
                    style={{ color: 'white' }}
                    href='https://trello.com/b/sm1E6ew0/devup-mern-stack-project'>
                    Trello Board
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant='top'
                src='https://cdn.productplan.com/wp-content/uploads/2017/02/Filter-Product-Roadmap.gif'
              />
              <Card.Body>
                <Card.Title> Product Roadmap </Card.Title>
                <Card.Text>
                  Check out my Google Sheet product development planning
                </Card.Text>
                <Button variant='primary'>
                  <a
                    style={{ color: 'white' }}
                    href='https://docs.google.com/spreadsheets/d/1o4sprh2MZLxBz51ovs73EU60IZluEcdfZgjpZjyBkiU/edit?usp=sharing'>
                    Google Sheets
                  </a>{' '}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant='top'
                src='https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif'
              />
              <Card.Body>
                <Card.Title>Source Code</Card.Title>
                <Card.Text>
                  Check out my source code implementation JavaScript based
                  languages and libraries to accomplish this project
                </Card.Text>
                <Button variant='success'>
                  <a
                    style={{ color: 'white' }}
                    href='https://github.com/alexsjcho/mern-social-full-stack-app'>
                    GitHub Repo
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.mraddoil.com/wp-content/uploads/2019/03/6-Points-of-Mentorship.png'
              />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  Check out my blog post on importance of mentorship for
                  software developers
                </Card.Text>
                <Button variant='danger'>
                  {' '}
                  <a
                    style={{ color: 'white' }}
                    href='https://www.mraddoil.com/2019/03/04/6-points-on-why-mentorship-is-important/'>
                    Read Blog
                  </a>{' '}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProjectInfo;
