// import React from 'react';
import CMS from 'netlify-cms';
// import styles from './styles.scss';

// CMS.registerPreviewStyle(styles);


import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

import GalleryPagePreview from "./preview-templates/GalleryPreview";

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('gallery', GalleryPagePreview);
// CMS.registerPreviewTemplate('gallery', ({ entry }) => (
//   <GalleryPageTemplate {...entry.toJS().data} />
// ));
