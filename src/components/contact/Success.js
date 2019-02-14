import React from 'react';
import "./success.scss";

const Success = ({ name }) => {
  return (
    <section className="message-success">
      <p>Thank you {name} for contacting us!</p>
      <p>We appreciate you reaching out and will respond to your message shortly.</p>
    </section>
  );

};

export default Success;
