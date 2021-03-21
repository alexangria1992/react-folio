import React from 'react'
import {Timeline, Events, UrlButton, ImageEvent} from "@merc/react-timeline"
// projects
import L_BoomerangWebsite from "../../assets/img/projects/1.JPG";
import L_Django_React_website from "../../assets/img/projects/2.JPG";
import L_Framer_Motion_Website from "../../assets/img/projects/3.JPG";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg"

import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";


import "./project-timeline.style.css";


const ProjectTimeline = () => {
    return (
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Boomerang-Dominion-Rd-Website"
            src={L_BoomerangWebsite}
            alt="Boomerang Website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This project was built with HTML, CSS, Jquery, JavaScript, Bootstrap, and PHP. It was my unitec final semester capstone project.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Calendar system</li>
                          <li>Login and Registration system</li>
                          <li>Responsive</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JS
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                        <UrlButton
                        href="https://boomerang-dominion.herokuapp.com/"
                        target="_blank"
                        >
                            SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/alexangria1992/Boomerang-Website"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        </div>
                    </div>
                </ImageEvent>

                <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Django-React-Website"
            src={L_Django_React_website}
            alt="Boomerang Website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> his project was built with react js and Django as the backend.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Payment System</li>
                          <li>Add to Cart System</li>
                          <li>Styled with React Bootstrap</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_REACT}
                                    rounded className="image-style m-1"
                                    ></Image> {""} React
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                    <Image src={L_DJANGO}
                                    rounded className="image-style m-1"
                                    ></Image> {""} DJANGO
                                </span>
                            </li>      
                            <li>
                                <span className="p-2">
                                    <Image src={L_POSTGRESQL}
                                    rounded className="image-style m-1"
                                    ></Image> {""} POSTGRES
                                </span>
                            </li>                                         
                        </ul>
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                        <UrlButton
                        href="https://proshop-demonstration.herokuapp.com/#/"
                        target="_blank"
                        >
                            SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/alexangria1992/django-react-pro-shop"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        </div>
                    </div>
                </ImageEvent>

                
                <ImageEvent
            date="20/12/2020"
            className="text-center"
            text="Framer-Motion-Website"
            src={L_Framer_Motion_Website}
            alt="Django React Website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This project was built with react js and material UI.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Framer Motion Animation</li>
                          <li>Scroll Animation</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_REACT}
                                    rounded className="image-style m-1"
                                    ></Image> {""} React
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                    <Image src={L_MATERIALUI}
                                    rounded className="image-style m-1"
                                    ></Image> {""} Material UI
                                </span>
                            </li>      
                                                           
                        </ul>
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                        <UrlButton
                        href="https://proshop-demonstration.herokuapp.com/#/"
                        target="_blank"
                        >
                            SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/alexangria1992/react-capture-website"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        </div>
                    </div>
                </ImageEvent>

                   

                   
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
