import React, { Component } from 'react';
import { TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Accordion } from 'reactstrap';
import classnames from 'classnames';
import { NavMenu } from './NavMenu';
import { Archives } from './Archives';



export class Projects extends Component {
  static displayName = Projects.name;

  render () {
    return (
        <div className="p-3">
            <div className="carousel-height">
                <Form className="m-0 d-flex flex-column justify-content-center min-vw-75 h-100 block">
                    <div className="justify-content-center align-items-center h-100">
                    <div id="carousel-example-1z" className="carousel slide h-100" data-ride="carousel">
                        <ol className="carousel-indicators align-self-end">
                                <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="3"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="4"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="5"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="6"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="7"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="8"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="9"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="10"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="11"></li>
                            </ol>

                    <div class="carousel-inner" role="listbox">
                        <div className="p-3">
                        <div class="carousel-item h-100 active">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Gambit</h1>
                                <a href="">www.gambit.io</a>
                                <p>Sports/E-Sports Gambling</p>
                                <p>Gambit is a platform for sports betting and sports analytics for sports such as basketball, football, soccer, boxing, E-sports, etc. In this platform, we will allow people to place bets, play in fantasy leagues, commentate and analyze games, and well as set up their own betting pool with the assistance of our staff for smaller leagues</p>
                                <p>Gambit Tools Used</p>
                            </div>
                        </div>
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Pillow</h1>
                                <a href="">www.pillow.com</a>
                                <p>Insurance</p>
                                <p>Pillow is an online insurance company that provides affordable insurance tailored to the wants and needs of our customers and their corresponding assets. Pillow also provides customers with affordable maintenance options factored into our prices based on historical data of matching assets, including preferential access to laborers, inspectors, etc.</p>
                                <p>Pillow Tools Used</p>
                            </div>
                        </div>
                        {/*
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <p>Ananke</p>
                                <p>Ananke Site</p>
                                <p>Ananke Industry</p>
                                <span></span>
                                <p>Ananke Description</p>
                                <span></span>
                                <p>Ananke Tools Used</p>
                                <span></span>
                                <p>Ananke Download Options</p>
                            </div>                     
                        </div>  
                        */}
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Suanpan</h1>
                                <a href="">www.suanpan.io</a>
                                <p>IT/Education</p>
                                <p>Suanpan is a educational tool that allows users to practice and learn data structures and algorithm concepts using embedded coding terminal and interactive visuals, including a tool in which users can test their algorithms with visualizations that show time and space complexity.. This site aims to gives users a well illustrated depiction of these concepts and provide a thorough education of such topics</p>
                                <p>Suanpan Tools Used</p>
                            </div>
                        </div>
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>modiste.ai</h1>
                                <a href="">www.modiste.ai</a>
                                <p>Fashion/E-Commerce</p>
                                <p>modiste.ai is an online e-commerce marketplace that allows users and fashion designers alike to buy, sell, and design apparel. Our unique take on this is to AI to create custom outfits based on users taste.</p>
                                <span></span>
                                <p>modiste.ai Tools Used</p>
                                <span></span>
                                <p>modiste.ai Download Options</p>
                            </div>
                        </div>
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Moudasi</h1>
                                <a href="">www.moudasi.io</a>
                                <p>Media/E-Commerce</p>
                                <span></span>
                                <p>Moudasi is a media streaming platform that allows artists and intellectuals to buy, sell, create and market their content such as music, art, educational videos using a subscription-based model and content package deals. We aim to create an all-in-one stop for users to support artists through a range of different outlets. </p>
                                <p>Moudasi Tools Used</p>
                            </div>                     
                        </div>
                        {/*
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <p>Viridis</p>
                                <p>www.viridis.com</p>
                                <p>Agriculture/Energy</p>
                                <span></span>
                                <p>Viridis is site </p>
                                <span></span>
                                <p>Viridis Tools Used</p>
                                <span></span>
                                <p>Viridis Download Options</p>
                            </div>
                        </div>
                        */}
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Amulet</h1>
                                <a href="">www.amulet.com</a>
                                <p>Banking/Financial Services</p>
                                <p>Amulet is an online banking platform that can be used for banking, investing, and bootstrapping. This bank aims to provide everyday people with finacial service accounts and education to save their money, receive affordable loans, and invest in the stock market, small businesses, or personal group ventures. We also offer media that includes with predictions and educational lessons.</p>
                                <p>Amulet Tools Used</p>
                            </div>
                        </div>
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Knack</h1>
                                <a href="">www.knack.com</a>
                                <p>Social Media/Employment</p>
                                <p>Knack is a job listing site that offers users the ability to search for jobs using tailored skills and experience, as well as tailored educational plans and tools for users goals concerning employment, salary, and education.</p>
                                <p>Knack Tools Used</p>
                            </div>                  
                        </div>                        
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Geri</h1>
                                <a href="">www.geri.com</a>
                                <p>Healthcare</p>
                                <p>Geri is healthcare system that allows uses receive medicine, billing, schedule appointments, and maintain medical records, as well many other services. In particular, we aim to combine artifical intelligence with healthcare in helping customers received real-time customized prescriptions based on medical records and current health.</p>
                                <p>Geri Tools Used</p>
                            </div>
                        </div>
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>Yam</h1>
                                <a href="">www.yam.com</a>
                                <p>Logistics</p>
                                <p>Yam is a delivery service that aims to provide a vast, efficient service using a range of technologies</p>
                                <p>Yam Tools Used</p>
                            </div>
                        </div>
                        <div class="carousel-item h-100">
                            <div className="justify-content-center align-items-center h-100 p-3">
                                <h1>BugOut</h1>
                                <a href="">www.bugout.com</a>
                                <p>Project Management/DevOps</p>
                                <p>BugOut is a project management that aims to provides users with quick, reliable, and professional frameworks for project managers looking to complete and monitor tasks for IT projects.</p>
                                <p>BugOut Tools Used</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev carousel-height" href="#carousel-example-1z" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next carousel-height" href="#carousel-example-1z" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>

                    </div>
                </Form>
            </div>
            <Archives />
        </div>
    );
  }
}

{/*       PROJECTS:
                                       *       
                                                <p>Gambit - gambling/esports/sports analytics</p>
                                                <p>Pillow - customized insurance</p>
                                                <p>Ananke - ethereum coin</p>
                                                <p>Suanpan - algorithm analysis</p>
                                                <p>modiste.ai - fashion e-comm</p>
                                                <p>Moudasi - Patreon/Netflix/Soundcloud replica</p>
                                                <p>Viridios - agriculture/solar energy</p>
                                                <p>Amulet - banking/investing</p>
                                                <p>Knack - job search/analysis</p>
                                                <p>Geri - customized healthcare</p>
                                                <p>Yam - Amazon delivery service replica</p>
                                                <p>BugOut - Bug/SDLC tracker</p>
                                              */}
{/*Turf - A name for something. Word resonates*/ }
{/*Social media app - Not sure of concept yet.... maybe the name 'Turf'???*/ }
{/*Social media/blog app - Focus on holding organized debates with authenticated sources, timed interaction, and user interaction */}
{/*
                                                     * Plugins:
                                                         * Google Chrome Widget/Extension for stock portfolio with real time analysis and stock scanner
                                                         * To-do-list
                                                         * Grocery cart 
                                                     * Tutorials
                                                        * FreeCodeCamp
                                                        * HackerRank
                                                        * HackerNoon
                                                        * Medium
                                                        * CodeAcademy
                                                        * HackerEarth
                                                        * Pusher
                                                        * CodingBlast
                                                        * Dev
                                                        * YouTube
                                                     * Data Structures and Algorithms
                                                        * Foundational data structures and algorithms
                                                        * GeeksForGeeks
                                                        * 100DaysOfCoding
                                                        * CodeWars
                                                        * Brillant.org
                                                     * Coursework
                                                        * Udemy
                                                        * Pluralsight
                                                    */}