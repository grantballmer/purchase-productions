import React from "react";
import "./scss/contact.scss";
import Layout from "../components/Layout";
// import Loader from "./icons/loader.svg";
// import Success from "../components/contact/Success";
// import Info from "../components/contact/Info";

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

  handleChange = e => {
    const property = e.target.name;
    this.setState({
      [property]: e.target.value
    });
  };

  render() {
    return (
      <Layout>
        <div className="contact-main">
          <div className="contact-container">
            <Info />

            <div className="contact-form">
              {/* QcMnzdPbCpCO81edAo82vuLWMleknLnm 
               9bhYIEEPdath8h1i4ULPVqDYo7A7UynT  */}
              <form
                action="https://send.pageclip.co/QcMnzdPbCpCO81edAo82vuLWMleknLnm"
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
        </div>
      </Layout>
    );
  }
}

export default Contact;
