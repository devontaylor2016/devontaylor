import React, { Component } from 'react';
import { TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Accordion } from 'reactstrap';
import classnames from 'classnames';
import { NavMenu } from './NavMenu';


export class Contact extends Component {
  static displayName = Contact.name;

  render () {
    return (
        <div className="p-2">
            <Container className="">
                <Form className="text-center m-0 d-flex flex-column justify-content-center min-vw-75 block">
                    <div className="justify-content-center align-items-center">
                        <p className="text-center">If you have questions or interest in my services for job opportunities, freelance work, or anything else in general, you can contact me at <u>taylordev2016@gmail</u> or complete the form below, and I will happily follow up with you! Thanks!</p>
                        <Container className="w-75">
                            <FormGroup>
                                <Input type="text" name="name" id="name" placeholder="name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="email" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="subjectt" id="subject" placeholder="subject" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="message" id="message" placeholder="message" />
                            </FormGroup>
                            <p><button className="btn btn-success">Submit</button></p>
                        </Container>
                    </div>
                </Form>
            </Container>
            <p className="text-center">OR</p>
            <Row className="text-center container-fluid">
                <Col xs="6">
                    <button className="btn btn-primary">LinkedIn</button>
                </Col>
                <Col xs="6">
                    <button className="btn btn-danger">GitHub</button>
                </Col>
            </Row>
        </div>
    );
  }
}
