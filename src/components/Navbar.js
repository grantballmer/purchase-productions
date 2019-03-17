import React from 'react';
import { Link } from 'gatsby';
import './scss/navbar.scss';

import { FaFacebookSquare, FaInstagram, FaSoundcloud } from 'react-icons/fa';
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false
    };
  }

  handleClick = e => {
    const { openMenu } = this.state;
    this.setState({ openMenu: !openMenu });
  }

  removeSideNav = () => {
    const { openMenu } = this.state;

    if (!openMenu) return;
    this.setState({ openMenu: !openMenu });

  }

  render() {
    const { openMenu } = this.state;
    const slideClass = openMenu ? 'slideIn' : '';
    const menuClass = openMenu ? 'open' : '';

    return (
      <nav>
      
        <Link to="/" className="logo" onClick={this.removeSideNav}>
            Purchase Productions, LLC
        </Link>
        
        {/* <i className="nav-menu fas fa-bars" onClick={this.handleClick}></i> */}
        
        <div className={`nav-menu ${menuClass}`} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`sideNav ${slideClass}`}>
          <Link to="/" onClick={this.handleClick}>Home</Link>
          <Link to="/about" onClick={this.handleClick}>About</Link>
          <Link to="/roster" onClick={this.handleClick}>Roster</Link>
          <Link to="/services" onClick={this.handleClick}>Services</Link>
          <Link to="/podcast" className="nav-middle__links">Podcast</Link>
          <Link to="/contact" onClick={this.handleClick}>Contact</Link>
        </div>
        
        <div className="nav-container">
        
          <div className="nav-middle">
            <Link to="/about" className="nav-middle__links">About</Link>
            <Link to="/roster"className="nav-middle__links">Roster</Link>
            <Link to="/services" className="nav-middle__links">Services</Link>
            <Link to="/podcast" className="nav-middle__links">Podcast</Link>
            <Link to="/contact"className="nav-middle__links">Contact</Link>
          </div>
          
          <div className="nav-social-media">
            <a href="https://www.facebook.com/pg/purchaseproductionsllc/about/?ref=page_internal" target="_blank" rel="noopener noreferrer" >
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/purchaseproductions/" target="_blank" rel="noopener noreferrer" >
              <FaInstagram />
            </a>
            <a href="https://soundcloud.com/purchaseproductions?" target="_blank" rel="noopener noreferrer" >
              <FaSoundcloud />
            </a>
          </div>
          
        </div>
        
      </nav>
    );
  }
}

export default Navbar;
