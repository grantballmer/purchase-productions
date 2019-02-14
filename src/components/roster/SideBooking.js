import React from 'react';
import "./sideBooking.scss";
import { FaTimes } from 'react-icons/fa';

class SideBooking extends React.Component {

  render() {
    const { slideClass, currentArtist, slideFunc } = this.props;
    return (
      <div className={`overlay overlay-booking ${slideClass}`}>
      
        <div className="side-booking-heading">
          <h2>Book A Band</h2>
          <FaTimes className="exit" onClick={slideFunc} />
        </div>
        
        <div className="side-booking">

          <form>
            <p className="side-booking__desc">If you're interested in booking a band for your event/venue 
          please fill in the the form below. We will get in touch with you as soon as possible</p>
            <input type="text" name="name" />
            <label htmlFor="name">Your Name</label>
            
            <input type="email" name="email" />
            <label htmlFor="email">Your Email</label>
            
            <input type="tel" name="phone" />
            <label htmlFor="phone">Your Phone Number</label>
            
            <input type="text" name="artist" defaultValue={currentArtist} />
            <label htmlFor="artist">Artist's Name</label>
            
            <input type="text" name="venue" />
            <label htmlFor="venue">Venue Name</label>
            
            <input type="date" name="date" />
            <label htmlFor="date">Event Date</label>
            
            <input type="submit" value="Submit" />
          </form>
        </div>
        
      </div>
    );
  }
}

export default SideBooking;
