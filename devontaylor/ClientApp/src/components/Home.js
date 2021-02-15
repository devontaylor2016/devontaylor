import React, { Component } from 'react';
import { TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import { NavMenu } from './NavMenu';

import { Background } from './Background';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <div className="row min-vh-100 gradient-background border border-warning" id="home">
                <div className="col-12">
                    <div className="text-center d-flex justify-content-center h-100">
                        <div className="justify-content-center align-self-center">
                            <div className="align-items-center">
                                <h1>Devon Taylor</h1>
                                <h2>Software Developer</h2>
                                <Row className="justify-content-between">
                                    <h3><a><button className="btn btn-warning">Resume</button></a></h3>
                                    <h3><a href="#background"><button className="btn btn-success" href="#background">Visit</button></a></h3>
                                    <h3><a href="#contact"><button className="btn btn-primary" href="#contact">Contact</button></a></h3>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavMenu />
            <div className="row min-vh-100 border border-warning container-fluid" id="background">
                <div className="col-12 page-header mh-25 min-vh-25 h-25 d-inline-block border border-danger ">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="w-100 text-center">
                            <h1>Background</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 page-body min-vh-75 mh-75 d-inline-block ">
                        <div className="m-0 d-flex flex-column justify-content-center">
                            <div className="justify-content-center align-items-center">
                                <Background/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row min-vh-100 border border-warning container-fluid" id="skills">
                <div className="col-12 page-header mh-25 min-vh-25 h-25 d-inline-block border border-danger ">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="w-100 text-center">
                            <h1>Skills</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 page-body min-vh-75 mh-75 d-inline-block ">
                    <div className="m-0 d-flex flex-column justify-content-center">
                        <div className="justify-content-center align-items-center">
                            <Skills/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row min-vh-100 border border-warning container-fluid" id="work">
                <div className="col-12 page-header mh-25 min-vh-25 h-25 d-inline-block border border-danger ">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="w-100 text-center">
                            <h1>Projects</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 page-body min-vh-75 mh-75 d-inline-block ">
                        <div className="m-0 d-flex flex-column justify-content-center">
                            <div className="justify-content-center align-items-center">
                                <Projects/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row min-vh-100 border border-warning container-fluid" id="contact">
                <div className="col-12 page-header mh-25 min-vh-25 h-25 d-inline-block border border-danger ">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="w-100 text-center">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 page-body min-vh-75 mh-75 d-inline-block ">
                        <div className="m-0 d-flex flex-column justify-content-center">
                            <div className="justify-content-center align-items-center">
                            <Contact/>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
  }
}
