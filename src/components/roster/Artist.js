import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./artist.scss"

class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    if (window.innerWidth > 812) return
    const { clicked } = this.state
    this.setState({ clicked: !clicked })
  }

  render() {
    const { name, path, slideFunc, image } = this.props
    const { clicked } = this.state

    const touchClass = clicked ? "screenTouchClass" : ""

    return (
      <div
        className={`box box__artist ${touchClass}`}
        onClick={this.handleClick}
      >
        <div className="overlay-background-image">
          <Img fluid={image} style={{ position: "static" }} />
        </div>
        <Link to={path} className="btn btn-profile">
          Profile
        </Link>
        <p className="box__name">{name}</p>
        <div className="btn btn-booking" onClick={slideFunc} data-artist={name}>
          Book Artist
        </div>
      </div>
    )
  }
}

export default Artist
