import React from 'react';
import "./photoGrid.scss";
import SliderOverlay from "./SliderOverlay";
// const imagePath = process.env.PUBLIC_URL + '/assets/images/design';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      activePhoto: null
    };

  }

  componentDidMount() {
    this.setState({ images: this.props.images });
  }

  handleClick = e => {
    const { clicked } = this.state;
    document.body.style.overflow = "hidden";
    this.setState({ clicked: !clicked, activePhoto: e.target });
  }

  handleTouchMove = e => {
    const { clicked } = this.state;
    if (clicked) {
      e.preventDefault();
    }
  }

  removeOverlay = () => {
    const { clicked } = this.state;
    document.body.style.overflow = "visible";
    this.setState({ clicked: !clicked, activePhoto: null });
  }

  render() {
    const { images, clicked } = this.state;
    let photoElements;

    if (images) {
      photoElements = images.map((file, index) => {
        return (
          <div className="photo" key={file + index} onClick={this.handleClick}>
            <div className={`overlay-background-image`}
              data-index={index}
              data-image={file.thumbnail}
              style={{ backgroundImage: `url(${file.thumbnail})` }}
            />
          </div>
        );
      });
    }

    return (
      <div className={`photos`}>
        {(clicked && images) &&
          <SliderOverlay 
            items={this.state}
            removeOverlay={this.removeOverlay}
          />
        }
        {photoElements} 
      </div>
    );
  }
}

export default Gallery;
