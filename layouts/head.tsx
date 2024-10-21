import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";
import { defaultKeywords } from "@/constants/data-constants";
import { ASSETS } from "@/constants/assets";

export const Head = (props: IProps) => {
  const pageTitle = props.title || siteConfig.name;
  const pageDescription = props.description || siteConfig.description;
  const ogImage = props.ogImage || ASSETS.OG_IMAGE_DEFAULT;
  const keyword = props?.keywords
    ? [...props.keywords, ...defaultKeywords].join(", ")
    : defaultKeywords.join(", ");

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta key="title" content={pageTitle} property="og:title" />
      <meta content={pageDescription} property="og:description" />
      <meta content={pageDescription} name="description" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />

      <link href="https://fonts.googleapis.com" rel="preconnect" />

      {/*Open Graph / Facebook*/}
      <meta content="website" property="og:type" />
      <meta content="https://www.bitech.id/" property="og:url" />
      <meta content={pageTitle} property="og:title" />
      <meta content={pageDescription} property="og:description" />
      <meta content={ogImage} property="og:image" />

      {/*Twitter*/}
      <meta content="summary_large_image" property="twitter:card" />
      <meta content="https://www.bitech.id/" property="twitter:url" />
      <meta content={pageTitle} property="twitter:title" />
      <meta content={pageDescription} property="twitter:description" />
      <meta content={ogImage} property="twitter:image" />

      {/*FAVICON*/}
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/site.webmanifest" rel="manifest" />

      {/*KEYWORD*/}
      <meta content={keyword} name="keywords" />
      {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0]; 
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '437058709354782');
          fbq('track', 'PageView');`,
        }}
      />

      <noscript>
        <img
          height="1"
          src="https://www.facebook.com/tr?id=437058709354782&ev=PageView&noscript=1"
          style={{ display: "none" }}
          width="1"
        />
      </noscript>

      {/* Google Tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8N57YWKWRT"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-8N57YWKWRT');`,
        }}
      />

      {/* JSON-LD for WebSite */}
      <script
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Bitech.id",
            "url": "https://www.bitech.id",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.bitech.id/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }`,
        }}
        type="application/ld+json"
      />

      {/* JSON-LD for BreadcrumbList */}
      <script
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bitech.id/#home" },
              { "@type": "ListItem", "position": 2, "name": "Service", "item": "https://www.bitech.id/#service" },
              { "@type": "ListItem", "position": 3, "name": "Contact", "item": "https://www.bitech.id/#contact" },
              { "@type": "ListItem", "position": 4, "name": "Blogs", "item": "https://www.bitech.id/blogs" }
            ]
          }`,
        }}
        type="application/ld+json"
      />

      {/* JSON-LD for Organization */}
      <script
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "bitech.id",
            "url": "https://www.bitech.id",
            "logo": "https://www.bitech.id/assets/logo.png",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61561685212107",
              "https://www.instagram.com/bitech.id_/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-851-5607-8801",
              "contactType": "Customer Service",
              "contactOption": "WhatsApp",
              "areaServed": "ID",
              "availableLanguage": "Indonesian"
            },
            "email": "info@bitech.id"
          }`,
        }}
        type="application/ld+json"
      />

      {/* Another Google Tag */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SESZ948170"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-SESZ948170');`,
        }}
      />

      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQ9Q6KG3');`,
        }}
      />
    </NextHead>
  );
};

interface IProps {
  title?: string;
  ogImage?: string;
  description?: string;
  slug?: string;
  keywords?: string[];
}
