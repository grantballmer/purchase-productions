import React from "react";
import "./scss/contact.scss";
import Layout from "../components/Layout";
import Loader from "./icons/loader.svg";
import Success from "../components/contact/Success";
import Info from "../components/contact/Info";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      number: "",
      message: "",
      honeypot: "",
      success: false
    };
  }

  componentDidMount() {
    const { search } = this.props.location;
    this.setState({ submittedMessage: search.includes("true") });
  }

  handleChange = e => {
    const property = e.target.name;
    this.setState({
      [property]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, number, message, honeypot } = this.state;
    this.setState({ messageSent: true });

    if (honeypot.value) return;

    const payload = {
      name,
      email,
      number,
      content: message
    };

    // // console.log(JSON.stringify(data));

    // // const url = 'https://06ajowzoac.execute-api.us-east-1.amazonaws.com/dev/contact';
    // // const url = 'https://06ajowzoac.execute-api.us-east-1.amazonaws.com/dev/contact';
    const url = `https://ubw8z2xawc.execute-api.us-east-1.amazonaws.com/dev/email/send`;

    // setTimeout(() => {
    //   this.setState({ messageSent: false, success: true });
    // }, 2000);

    window
      .fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(payload), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(response => this.setState({ messageSent: false, success: true }))
      .catch(error => console.error("Error:", error));
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log('form submitted');
  // }

  render() {
    const { name, success, messageSent } = this.state;

    return (
      <Layout>
        <div className="contact-main">
          {messageSent && (
            <div className="overlay overlay-contact">
              <img src={Loader} alt="loading..." />
            </div>
          )}

          {success ? (
            <Success name={name} />
          ) : (
            <div className="contact-container">
              <Info />

              <div className="contact-form">
                {/* <form action="https://l7kzwmcxzd.execute-api.us-east-1.amazonaws.com/dev/" method="POST"> 
                <form method="POST" onSubmit={this.handleSubmit}> 
                <form action="https://www.briskforms.com/go/d6b974f5ebd0fb711c0a1d5bdfb94736" method="POST">
                  <form action="https://formspree.io/grant.a.ballmer@gmail.com" method="POST"> 
                  <input type="hidden" name="_to" value="grant.a.ballmer@gmail.com" />
                  <input type="hidden" name="_redirect" value="https://test-grant8.c9users.io/contact?success=true" /> */}
                <form
                  action="https://send.pageclip.co/9bhYIEEPdatb8h1i4ULPVqDYo7A7UynT"
                  className="pageclip-form"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="honeypot"
                    value=""
                    style={{ display: "none" }}
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={this.handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Enter Message Here"
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-link"
                    value="Submit Message"
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default Contact;
