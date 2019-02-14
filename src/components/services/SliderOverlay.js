import React from 'react';
import Swipe from 'react-easy-swipe';
import ArrowRight from "./icons/arrow-right.svg";
import ArrowLeft from "./icons/arrow-left.svg";
import { FaTimes } from "react-icons/fa";
import "./sliderOverlay.scss";
// const baseImagePath = process.env.PUBLIC_URL + '/assets/images';

class SliderOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      index: null,
      images: null,
      slideAction: null,
      imagePosition: 0,
      didLoad: false
    };
  }

  componentDidMount() {
    const { activePhoto, images } = this.props.items;
    const image = activePhoto.attributes['data-image'].value;
    const index = activePhoto.attributes['data-index'].value;
    // const imagePath = isDesign ? baseImagePath + '/design' : baseImagePath + '/photography';

    this.setState({ image, index, images });
  }

  onLoad = () => {
    this.setState({ didLoad: true });
  }

  handleSlideAction = (e, action) => {
    let { index, images, imagePosition } = this.state;

    //check if mobile size screen to allow swipe events and check if movement is more than 50 pixels either direction
    if (window.innerWidth < 812 && (imagePosition > -50 && imagePosition < 50)) {
      this.setState({ imagePosition: 0 });
      return;
    }

    if (action === 'next') { //check if next slide or prev slide
      index = Number(index) + 1 >= images.length ? 0 : Number(index) + 1;
    }
    else {
      index = Number(index) - 1 <= -1 ? images.length - 1 : Number(index) - 1;
    }

    this.setState({ image: images[index].thumbnail, index, imagePosition: 0 });
  }

  handleKeyDown = e => {
    if (e.key === "ArrowLeft") {
      this.handleSlideAction(e, 'prev');
    }
    else if (e.key === "ArrowRight") {
      this.handleSlideAction(e, 'next');
    }
  }

  onSwipeMove = (position, event) => {
    this.setState({ imagePosition: position.x }); //image will move with users swipe movements
    return true;
  }

  render() {
    const { image, index, imagePosition } = this.state;
    const { removeOverlay } = this.props;
    // const imageEnding = window.innerWidth > 812 ? 'lg' : 'sm';


    // if (window.innerWidth > 812) {
    //   imageEnding = 'lg';
    // }
    // else if (window.innerWidth > 550) {
    //   imageEnding = 'md';
    // }
    // else {
    //   imageEnding = 'sm';
    // }




    // const imgVisibility = didLoad ? 'visible' : 'hidden';

    return (
      <section 
        className={`sliderOverlay`} 
        // onClick = { removeOverlay }
        onKeyDown={this.handleKeyDown} 
        tabIndex="0"
      >
        
        <FaTimes className="sliderOverlay__cancel" onClick={removeOverlay} />
        
        <Swipe 
          className="swipe"
          // allowMouseEvents = { true }
          onSwipeMove={this.onSwipeMove}
          onSwipeLeft={(e) => this.handleSlideAction(e, 'next')}
          onSwipeRight={(e) => this.handleSlideAction(e, 'prev')}
        > 
            
            <div className={`sliderOverlay__photo photo__${image}`}
              data-index={index}
              style={{ transform: `translateX(${imagePosition}px`, backgroundImage: `url(${image})` }}
              onClick={e => e.stopPropagation() }
            >
            
            <h2>Desmond Jones - August 1, 2018</h2>
          
            
            <img src={ArrowLeft} alt="" className="swipe__btn swipe__prev" onClick={(e) => this.handleSlideAction(e, 'prev')} />
            <img src={ArrowRight} alt="" className="swipe__btn swipe__next" onClick={(e) => this.handleSlideAction(e, 'next')} /> 
            
            </div>
          
        </Swipe>
      </section>
    );
  }
}

export default SliderOverlay;

// , backgroundImage: `url(./images/photography/${image}-${imageEnding}.jpg)
