import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`Nathan Purchase, Purchase, Purchase Productions, Purchase Productions LLC, Music Agency, Concert Photography, Michigan Music, Michigan music agency ${keywords}`}
      ></meta>
      <link
        rel="canonical"
        href={`https://purchaseproductions.com${canonical}`}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/favicon-16x16.png"
        sizes="16x16"
      />

      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
      {/* <meta name="theme-color" content="#fff" /> */}

      <meta property="og:type" content="business.business" />
      {/* <meta property="og:title" content={data.site.siteMetadata.title} /> */}
      <meta property="og:title" content="Purchase Productions LLC" />
      <meta property="og:url" content="/" />
    </Helmet>
  )
}

export default SEO
