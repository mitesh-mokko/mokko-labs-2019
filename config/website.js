const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Mokko Labs - Design / Dev / Research", // Navigation and Site Title
  siteTitleAlt: "Mokko Labs", // Alternative Site title for SEO
  siteTitleShort: "Mokko", // short_name for manifest
  siteHeadline: "We make great products come to life.", // Headline for schema.org JSONLD
  siteUrl: "https://mokko.io", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription:
    "Mokko Labs works with startups to help design and develop amazing products.",
  author: "Mitesh Shah <mitesh@mokko.io>", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@mokko-labs", // Twitter Username
  ogSiteName: "mokko", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  //  googleAnalyticsID: "UA-47519312-5",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
