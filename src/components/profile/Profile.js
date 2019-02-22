import React from 'react';
import Img from 'gatsby-image';

import "./profile.scss";
import { details } from "./profileDetails";
// const imagePath = process.env.PUBLIC_URL + '/assets/images';

const Profile = ({ band, image }) => {
  const profileDetails = details[band];

  const { name, headers, musicType, info, socialMedia, management } = profileDetails;
  const { spotify, youtube, itunes, facebook, instagram } = socialMedia;

  const headings = headers.map(header => (<h2 key={header}>{header}</h2>));

  const infoParagraphs = info.map((text, index) => (<p key={index}>{text}</p>));

  const managementDivs = management.map(person => {
    const { title, name, email } = person;
    return (
      <div key={`${name + title}`} className="contact-information">
        <h5>{title}: <span>{name}</span></h5>
        <a className="contact-information__email" href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
          <p>{email}</p>
        </a>
      </div>
    );
  });

  return (
    <section className="profile-container">
      <div className="profile-hero-wrapper">
      
        <div className="svg-container svg-container__profile">
          <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,94 100,98 100,100 0,100" />
          </svg>
        </div>
        
        <div className={`profile-hero`}>
          <Img fluid={image} style={{ position: 'static' }} />
          {headings} 
        </div>
        
      </div>
      
      <div className="profile-about">
        
        <div className="profile-about__info">
        
          <h3>{name}</h3> 
          <h4>{musicType}</h4>
          
          {infoParagraphs}
          
        </div>
        
        <div className="profile-about__music">
          
          
          <a className="profile-about__music--platform" href={spotify} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify"></i>
            <h4>Spotify</h4>
          </a>
          
          <a className="profile-about__music--platform" href={youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
            <h4>Youtube</h4>
          </a>
          
          <a className="profile-about__music--platform" href={itunes} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-itunes-note"></i>
            <h4>iTunes</h4>
          </a>
          
          <a className="profile-about__music--platform" href={facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square"></i>
            <h4>Facebook</h4>
          </a>
          
          <a className="profile-about__music--platform" href={instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            <h4>Instagram</h4>
          </a>

        </div>
        
      </div>
      
      <div className="profile-contact">
        <div className="svg-container svg-container__profile svg-container__contact" >
          <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,12 0,4" />
          </svg>
        </div>
        <h4>Contact Info</h4>
        
        <div className="profile-contact__details">
        
          {managementDivs}
          
        </div>
        
        {/* empty div to allow space-between to center contact info */} 
        <div></div>
        
      </div>
    
    </section>
  );
};

export default Profile;
