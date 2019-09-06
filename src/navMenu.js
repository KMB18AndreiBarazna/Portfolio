import React from 'react';
import styles from './navMenu.module.css';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavMenu() {
  return (
      <div className={styles.navMenu}>
{/*              <a href={'#main'} className={styles.link}>Главная</a>
              <a href={'#skills'} className={styles.link}>Навыки</a>
              <a href={'#projects'} className={styles.link}>Проекты</a>
              <a href={'#contacts'} className={styles.link}>Контакты</a>*/}

          <Navbar bg="lighti" expand="lg" className={styles.bglight}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="#main">Главная</Nav.Link>
                      <Nav.Link href="#skills">Навыки</Nav.Link>
                      <Nav.Link href="#projects">Проекты</Nav.Link>
                      <Nav.Link href="#contacts">Контакты</Nav.Link>
                     {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>*/}
                  </Nav>
              </Navbar.Collapse>
          </Navbar>

      </div>
  );
}

export default NavMenu;
/*className={styles.bglight}*/
/*          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Меню</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href={'#main'}>Главная <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href={'#skills'}>Навыки</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href={'#projects'}>Проекты</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href={'#contacts'}>Контакты</a>
                      </li>
                  </ul>
              </div>
          </nav>*/
/*
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport">
        <span className="navbar-toggler-icon">
        </span>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a href={'#main'} className="nav-link">Главная</a>
    </li>
      <li className="nav-item">
          <a href={'#skills'} className="nav-link">Навыки</a>
      </li>
    <li className="nav-item">
      <a href={'#projects'} className="nav-link">Проекты</a>
    </li>
    <li className="nav-item">
      <a href={'#contacts'} className="nav-link">Контакты</a>
    </li>
  </ul>
</div>
      </button>
    </nav>*/