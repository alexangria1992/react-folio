import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import Profile from '../../assets/img/profile/4.jpg'
import './about.style.css'
const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3 text-uppercase">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* PROFILE PIC */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                         <Image className="profile justify-content-end"src={Profile} thumbnail fluid></Image>
                        </Row>
                    </Col>

                    {/* ABOUT ME DESCRIPTION */}
                    <Col xs={12} md={6}>
                        <Row className="align-items-start p-2 my-details rounded">
                            {/* DESCRIPTION */}
                            Hi There! I am  <strong>&nbsp; Alexandre Angrignon</strong>
                            <br/> I am passionate about web development and have experience using HTML, CSS, Bootstrap, JavaScript, React, Django and PostgreSQL. 
                            <br/><br/>
                            In 2020, I successfully completed my Bachelor's degree in computer science at Unitec focusing on a web development pathway.
                            <br/><br/> My goal is to help a company and clients to the best of my abilities and how I can provide the best possible product for them.
                            <br/><br/> I love learning new technologies, what they can be used for in a real-life, workplace scenario and how I can use them to build better and scalable products.
                        </Row>

                        
                    </Col>

                </Row>
            </Container>
        </div>
        </div>
    )
}

export default About
