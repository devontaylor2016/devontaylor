import React, { Component } from 'react';
import { TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Accordion } from 'reactstrap';
import classnames from 'classnames';
import { NavMenu } from './NavMenu';



export class Background extends Component {
  static displayName = Background.name;

  render () {
    return (
        <div className="inherit-text-color p-2">
            <Row>
                <Col xs="12" sm="7">
                    <div>
                        <p>My name is Devon Taylor. I am a software developer based North Carolina. I am currently working as a software developer in a large financial service institution in the state. My professional interest includes web development, mobile app development, desktop application development, blockchain, and data analytics in a range of industries including financial services, e-commerce, healthcare, media, etc.</p>
                        <p>My hobbies outside of my profession includes video games, boxing, investing, music collection, and history.
                        </p>
                        {/*
                        <p>City of Birth: Durham, NC</p>
                        <p>School: UNC Charlotte</p>
                        <p>Degree: B.S.B.A., Management Information Systems</p>
                        <p>Base Skills: Software Development, Mobile Development, Web Development,
                            Data Analytics, Blockchain, Business</p>
                        <p>Hobbies: Video games, Boxing, Investing, Music Collector, History Buff</p>
                        */}
                    </div>
                </Col>
                <Col xs="12" sm="5" className="bg-info">
                    <div className="row h-100">
                        <div className="col-12">
                            <div className="text-center d-flex justify-content-center h-100">
                                <div className="justify-content-center align-self-center">
                                    <div className="align-items-center">
                                        <img src="https://via.placeholder.com/175" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
  }
}
