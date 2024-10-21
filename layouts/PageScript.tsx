import React from "react";

export function PageScript() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({"gtm.start":
        new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
        "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,"script","dataLayer","GTM-PQ9Q6KG3");
      `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
       window.dataLayer = window.dataLayer || [];
        function gtag() {
        dataLayer.push(arguments);
      }
        gtag("js", new Date());

        gtag("config", "G-SESZ948170");
      `,
        }}
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SESZ948170"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      
  {
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
  }
      `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
       {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.bitech.id/#home"
        },

        {
          "@type": "ListItem",
          "position": 2,
          "name": "Service",
          "item": "https://www.bitech.id/#service"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": "https://www.bitech.id/#contact"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Blogs",
          "item": "https://www.bitech.id/blogs"
        }
          ]
        }
      `,
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
       {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Bitech.id",
          "url": "https://www.bitech.id",
          "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.bitech.id/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
        }
      `,
        }}
        type="application/ld+json"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-8N57YWKWRT");
      `,
        }}
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8N57YWKWRT"
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
       <img
          height="1"
          src="https://www.facebook.com/tr?id=437058709354782&ev=PageView&noscript=1"
          style="display:none"
          width="1"
        />
      `,
        }}
      ></noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments);};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0]; 
  s.parentNode.insertBefore(t,s);}(window, document,"script",
  "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", "437058709354782");
  fbq("track", "PageView");
      `,
        }}
      />
    </>
  );
}
