import React, { Component, useState } from 'react';
import { TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Accordion } from 'reactstrap';
import classnames from 'classnames';
import { NavMenu } from './NavMenu';



export class Skills extends Component {
  static displayName = Skills.name;

  constructor(props) {
        super(props);
        
        this.state = {
            activeTab: '1',
            setActiveTab: '1'
        };

      this.toggle = this.toggle.bind(this);
    }

    toggle(setActiveTab) {
        console.log(this.state.activeTab);
        console.log(this.activeTab)

        this.setState({
            activeTab: setActiveTab
        });

        console.log(this.state.activeTab);
        console.log(this.activeTab);
    }

  render () {

      return (
        <div className="100h p-2">
            <Row className="100vh">
                <Col xs="12" sm="3">
                    <Nav tabs vertical className="text-center">
                        <NavItem xs="4" sm="12">
                            <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                                Front-end Development
                            </NavLink>
                        </NavItem>
                        <NavItem xs="4" sm="12">
                            <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                                Back-end Development
                            </NavLink>
                        </NavItem>
                        <NavItem xs="4" sm="12">
                            <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                                Data
                            </NavLink>
                        </NavItem>
                        <NavItem xs="4" sm="12">
                            <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                                DevOps
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col xs="12" sm="9" className="100vh">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row className="100h">
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                      <ul>
                                          <li>
                                              <ul>HTML/CSS
                                                  <li>Bootstrap/ReactStrap/Material Design</li>
                                              </ul>
                                          </li>
                                          <li>
                                              <ul>JavaScript
                                                  <li>jQuery</li>
                                                  <li>d3.js</li>
                                                  <li>ReactJS</li>
                                                  <li>Angular</li>
                                              </ul>
                                          </li>
                                      </ul>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <div>
                                <Col sm="12">
                                    <h4>Tab 2 Contents</h4>
                                    <p>Frameworks: .NET, Spring, Spring Boot, Django, React, Angular, Node.js,
                                    React Native, Spark</p>
                                    <h4>Languages</h4>
                                    <ul>
                                        <li>
                                        <ul>C#
                                            <li>Backend for software development</li>
                                            <li>ASP.NET/.NET/.NET Core/MVC Framework</li>
                                            <li>Rest and SOAP APIs</li>
                                            <li>Blazor</li>
                                            <li>Entity Framework</li>
                                            <li>Xamarin</li>
                                        </ul>
                                        </li>
                                        <li>
                                        <ul>Java
                                            <li>Backend for software development</li>
                                            <li>Spring/Spring Boot</li>
                                            <li>Big Data Analytics using Spark</li>
                                            <li>Android App Development</li>
                                        </ul>
                                        </li>
                                        <li>
                                        <ul>Python
                                            <li>Django</li>
                                            <li>Data Analytics/Visualization</li>
                                            <li>Scripting for APIs</li>
                                        </ul>
                                        </li>
                                        <li>
                                        <ul>JavaScript
                                            <li>Built prototypes and single page applications in React/React Native</li>
                                            <li>Built APIs and client services in Node.js</li>
                                        </ul>
                                        </li>
                                    </ul>
                                </Col>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <ul>
                                        <li>
                                        <ul>Database Management
                                            <li>SQL for database management in .NET Framework applications</li>
                                            <li>PL/SQL</li>
                                            <li>Oracle for Java APIs used in applications</li>
                                        </ul>
                                        </li>
                                        <li>
                                        <ul>Data Analytics
                                            <li>NoSQL for big data analytics</li>
                                            <li>Hadoop</li>
                                            <li>PostgreSQL for time series data used in APIs</li>
                                        </ul>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 4 Contents</h4>
                                    <p>Unit Testing: MSTest, NUnit, Jenkins, Selenium</p>
                                    <p>Tools: Visual Studio, Netbeans, VSCode, Postman, SMSS, MongoDB,
                                    SVN, Git, Hadoop, AWS, Azure</p>
                                    <p>Unit Testing: MSTest, NUnit, Jenkins, Selenium</p>
                                    <p>Tools: Visual Studio, Netbeans, VSCode, Postman, SMSS, MongoDB,
                                    SVN, Git, Hadoop, AWS, Azure</p>

                                    <ul>Testing
                                        <li>MSTest</li>
                                        <li>Selenium</li>
                                        <li>Postman</li>
                                    </ul>
                                    <ul>Cloud Computing
                                        <li>Azure</li>
                                        <li>AWS</li>
                                    </ul>
                                    <ul>Continous Integration/Continous Deployment
                                        <li>Jenkins</li>
                                        <li>Git</li>
                                        <li>SVN</li>
                                    </ul>
                                    <ul>IDEs/Tools Used
                                        <li>Visual Studio/VS Code</li>
                                        <li>NetBeans</li>
                                        <li>SQL Server Management Studio</li>
                                    </ul>
                               
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>
              </Row>
        </div>
    );
  }
}

export default Skills;