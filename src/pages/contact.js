import React from "react"
import { Helmet } from "react-helmet"
import "../scss/contact.scss"

import Layout from "../components/Layout"
import Loading from "../components/contact/Loading"
import Success from "../components/contact/Success"
import Error from "../components/contact/Error"
import Info from "../components/contact/Info"

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      honeypot: "",
      formWaiting: false,
      success: false,
      error: false,
    }
  }

  handleChange = e => {
    const property = e.target.name
    this.setState({
      [property]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ formWaiting: true }) //add loader while waiting for submission response

    const { Pageclip } = window
    const { name, email, phone, message, honeypot } = this.state

    if (honeypot.value) return // return if bot adds data to honeypot field

    const data = {
      name,
      email,
      phone,
      message,
    }

    Pageclip.send(
      "9bhYIEEPdatb8h1i4ULPVqDYo7A7UynT",
      "default",
      data,
      (error, response) => {
        if (response) {
          //handle success
          this.setState({ success: true, formWaiting: false })
        } else {
          //handle error
          this.setState({ error: true, formWaiting: false })
        }
      }
    )
  }

  render() {
    const { formWaiting, success, error } = this.state
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact - Purchase Productions</title>
          <meta
            name="keywords"
            content="Nathan Purchase, Purchase, Purchase Productions, Purchase Productions LLC, Music Agency, Concert Photography, Michigan Music, Michigan music agency"
          ></meta>
          <meta
            name="description"
            content="Contact us about any questions and concerns, or if you want to set up an opportunity to collaborate."
          ></meta>
          <link
            rel="canonical"
            href="https://purchaseproductions.com/contact"
          />
        </Helmet>
        <Layout>
          {formWaiting && <Loading />} {/* render Loading component */}
          {/* Check if form has been submitted, if it has, render success or error component; if not, render form component */}
          {success || error ? (
            success ? (
              <Success />
            ) : (
              <Error />
            )
          ) : (
            <div className="contact-main">
              <div className="contact-container">
                <Info />

                <div className="contact-form">
                  <form
                    className="pageclip-form"
                    method="post"
                    onSubmit={this.handleSubmit}
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
                      value="Send Message"
                    />
                  </form>
                </div>
              </div>
            </div>
          )}
        </Layout>
      </React.Fragment>
    )
  }
}

export default Contact
