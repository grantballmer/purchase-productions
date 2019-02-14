import React from 'react';
// import "../scss/_box.scss";
import Layout from "../components/Layout";
import Card from "../components/services/Card";

// import FullPhotography from "./images/MMJ.jpg";
// import MobilePhotography from "./images/mobile-MMJ.jpg";

// import FullPoster from "./images/earth-radio.jpg";
// import MobilePoster from "./images/mobile-earth-radio.jpg";


// import FullManagement from "./images/desmond-jones.jpg";
// import MobileManagement from "./images/mobile-desmond-jones.jpg";


import Camera from "./icons/camera.svg";
import Pencil from "./icons/pencil.svg";
import Phone from "./icons/phone.svg";
import Check from "./icons/checkmark.svg";

const Services = () => {

  // function photoToDisplay(full, mobile, tiny) {
  //   if (window.innerWidth > 812) {
  //     const image = full ? full : tiny;
  //     return image;
  //   }
  //   else {
  //     const image = mobile ? mobile : tiny;
  //     return image;
  //   }
  // }

  // const Photography = photoToDisplay(FullPhotography, MobilePhotography, TinyPhotography);
  // const Poster = photoToDisplay(FullPoster, MobilePoster, TinyPoster);
  // const Management = photoToDisplay(FullManagement, MobileManagement, TinyManagement);

  // const photographyImage = Photography ? Photography : TinyPhotography;
  // const managementImage = Management ? Management : TinyManagement;


  return (
    <Layout>
      <section className={`box-container`}>
      
        <Card 
          // frontImage={Photography} 
          //tinyImage={TinyPhotography}
          // backImage={PhotographyBack} 
          icon={Camera} 
          service='photography' 
        />
        
        <Card 
          // frontImage={Poster}
          // tinyImage={TinyPoster}
          // backImage={DesignBack} 
          icon={Pencil} 
          service='design' 
        />
        
        <Card 
          // frontImage={Management}
          // tinyImage = { TinyManagement }
          // backImage = { PhotographyBack }
          icon={Phone}
          service='management'
          management={true}
          check={Check}
        />
  
        
      </section>
    </Layout>
  );
};

export default Services;
