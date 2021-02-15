import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <header className="sticky-top 100vw gradient-background-nav inherit-text-color">
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow d-flex flex-row justify-content-start">
                <div className="d-flex w-100">
                    <NavbarBrand className="justify-content-start nav-item flex-grow-1 p-0">
                        <a className="navbar-brand p-2 nav-link border border-primary rounded bg-dark" href="#home">Logo</a>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="justify-content-end bg-dark border border-primary" />
                </div>
                <Collapse className="d-sm-inlinelex flex-sm-row-reverse p-1" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem className="p-2 rounded btn-link border border-primary mx-3 bg-dark">
                            <a className="nav-link" href="#background">Background</a>
                        </NavItem>
                        <NavItem className="p-2 rounded btn-link border border-primary mx-3 bg-dark">
                            <a className="nav-link" href="#skills">Skills</a>
                        </NavItem>
                        <NavItem className="p-2 rounded btn-link border border-primary mx-3 bg-dark">
                            <a className="nav-link" href="#work">Work</a>
                        </NavItem>
                        <NavItem className="p-2 rounded btn-link border border-primary mx-3 bg-dark">
                            <a className="nav-link" href="#contact">Contact</a>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
  }
}
