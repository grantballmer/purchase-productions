import React from "react";
import { GalleryPageTemplate } from "../../templates/gallery";

const GalleryPagePreview = ({ entry, widgetsFor }) => (
  <GalleryPageTemplate
    info={{
      frontmatter: entry.getIn(["data"]).toJS(),
      newFront: entry.get(['data']),
      otherFront: entry.toJS().data,
      gallery: widgetsFor('grid')
    }}
  />
);

export default GalleryPagePreview;


// import React from 'react';
// // import { GalleryPageTemplate } from "../../templates/gallery";

// const GalleryPreview = ({ entry, getAsset, widgetsFor }) => {

//   console.log(entry.get('data'));
//   console.log(widgetsFor('grid'));

//   const widgets = widgetsFor('grid');
//   widgets.map((element, index) => {
//     const image = entry.getIn(['data', 'image']);
//     const band = entry.getIn(['data', 'band']);
//     const imageSrc = getAsset(image);
//     console.log(band);

//     return imageSrc;
//   });

//   return (
//     <div>
//       <h1 className="preview-title">Gallery</h1>
//     </div>
//   );
// };

// export default GalleryPreview;

// // <h1>Gallery</h1>
// // <div className="items-container">
// //   {widgetsFor("gallery").map((element, index) => {
// //     const image = entry.getIn(['data', 'image']);
// //     const imageSrc = getAsset(image);
// //     const band = entry.getIn(['data', 'band']);
// //     return (
// //       <div className="item" key={index}>
// //         <img src={imageSrc.toString()} className="item__image" alt="band" />
// //         <p className="item__band">{band}</p>
// //       </div>
// //     );
// //   })}
// // </div>

// export default GalleryPreview;

// <GalleryPageTemplate
//     title={entry.getIn(['data', 'title'])}
//     content={widgetFor('gallery')}
//   />

// class Preview extends React.Component {

//   render() {
//     console.log('cms page');
//     const { widgetsFor, getAsset, entry } = this.props;
//     return (
//       <div>
//         <h1>Gallery</h1>
//         <div className="items-container">
//           {widgetsFor("Inside Gallery").map((element, index) => {
//             const image = entry.getIn(['data', 'image']);
//             const imageSrc = getAsset(image);
//             const band = entry.getIn(['data', 'band']);
//             return (
//               <div className="item" key={index}>
//                 <img src={imageSrc.toString()} className="item__image" />
//                 <p className="item__band">{band}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }

// }
