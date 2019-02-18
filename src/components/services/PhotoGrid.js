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
    const { title } = this.props;
    let photoElements;


    if (images) {
      photoElements = images.map((file, index) => {
        const { src } = file.image.childImageSharp.original;

        if (title === "design") {
          return (
            <img src={src} alt=""
              key={file + index}
              data-index={index}
              data-image={src}
              onClick={this.handleClick}
            />
          );
        }
        else {
          return (
            <div className="photo" key={file + index} onClick={this.handleClick}>
              <div className={`overlay-background-image`}
                data-index={index}
                data-image={src}
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          );
        }
      });
    }


    // if (images) {
    //   photoElements = images.map((file, index) => {

    //     const { src } = file.image.childImageSharp.original;

    //     return (
    //       <div className="photo" key={file + index} onClick={this.handleClick}>
    //         <div className={`overlay-background-image`}
    //           data-index={index}
    //           data-image={src}
    //           style={{ backgroundImage: `url(${src})` }}
    //         />
    //       </div>
    //     );
    //   });
    // }
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
