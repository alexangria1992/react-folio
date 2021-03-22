import React from 'react'
import './contact-form.style.css'
import {Container, Jumbotron, Button, Col, Row} from 'react-bootstrap'

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:alex040892@gmail.com" target="_blank" rel="">
                                <Button variant="outline-danger" title="alex040892@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://www.facebook.com/alexandre.angrignon.7">
                                <Button variant="outline-primary" title="Say Hello on FB">
                                    <i className="fab fa-facebook-square"></i> Facebook
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/alexangria1992/">
                                <Button variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> Github
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://www.instagram.com/alexangri/">
                                <Button variant="outline-secondary" title="Follow me on instagram">
                                    <i className="fab fa-instagram"></i> Instagram
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact
