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
